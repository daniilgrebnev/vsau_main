'use client'

import { IManagement } from '@/interfaces'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { managementItems } from '../../managenent'

const page = () => {
	const params = useParams()

	const [item] = useState<IManagement[]>(managementItems)

	let currentItem: IManagement = item.find(x => x.id === params.id)

	console.log(currentItem)
	let list = currentItem?.ListOfDivisions
	console.log(list)

	return (
		<div
			className='flex flex-wrap 
		'
		>
			<div
				key={currentItem?.id}
				className='bg-white flex mr-7 mb-10 rounded-lg text-blue items-center justify-center'
			>
				<Image
					src={currentItem.img}
					alt=''
					width={280}
					height={0}
					className=' h-full'
				/>
				<div className='pt-10 px-20 ml-10'>
					<div className=''>
						<p className='font-bold text-2xl '>{currentItem?.surname}</p>
						<p className='text-xl'>{currentItem?.name}</p>

						<div className='my-3'>
							<p className='font-semibold'>{currentItem?.post}</p>
							<p>{currentItem?.academicStatus}</p>
						</div>
						<div className='my-5'>
							<div className=''>{currentItem?.phoneNumber}</div>
							<div className='my-2'>Написать письмо</div>
							<div className=''>{currentItem?.place}</div>
						</div>
					</div>
				</div>
			</div>

			<div className='w-[40%] bg-white mr-10 text-blue p-10 rounded-lg'>
				<h2 className='text-2xl font-bold text blue mb-10 '>Биография</h2>
				<p>{currentItem.biography}</p>
			</div>
			<div className='w-[45%] bg-white text-blue p-10 mt-10  rounded-lg'>
				<h2 className='text-2xl font-bold text blue mb-7 '>
					Список подразделений
				</h2>
				<ol className='list-disc pl-10'>
					{list.map(x => (
						<li className='mb-3'>{x.vision}</li>
					))}
				</ol>
			</div>
		</div>
	)
}

export default page
