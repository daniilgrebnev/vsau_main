'use client'

import { IListOfDivisions, IManagement } from '@/interfaces'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { managementItems } from '../../managenent'

const page = () => {
	const params = useParams()

	const [item] = useState<IManagement[]>(managementItems)

	const currentItem = item.findIndex(x => x.id === params.id)

	const itemsArray = item[currentItem]

	let list: IListOfDivisions[] = itemsArray.ListOfDivisions

	return (
		<div
			className='flex flex-wrap 
		'
		>
			<div
				key={itemsArray.id}
				className='bg-white flex mr-7 mb-10 rounded-lg text-blue items-center justify-center'
			>
				<Image
					src={itemsArray.img}
					alt=''
					width={280}
					height={0}
					className=' h-full'
				/>
				<div className='pt-10 px-20 ml-10'>
					<div className=''>
						<p className='font-bold text-2xl '>{itemsArray.surname}</p>
						<p className='text-xl'>{itemsArray.name}</p>

						<div className='my-3'>
							<p className='font-semibold'>{itemsArray.post}</p>
							<p>{itemsArray.academicStatus}</p>
						</div>
						<div className='my-5'>
							<div className=''>{itemsArray.phoneNumber}</div>
							<div className='my-2'>Написать письмо</div>
							<div className=''>{itemsArray.place}</div>
						</div>
					</div>
				</div>
			</div>

			<div className='w-[40%] bg-white mr-10 text-blue p-10 rounded-lg'>
				<h2 className='text-2xl font-bold text blue mb-10 '>Биография</h2>
				<p>{itemsArray.biography}</p>
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
