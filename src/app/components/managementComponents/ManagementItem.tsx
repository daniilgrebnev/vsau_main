import { managementItems } from '@/app/managenent'
import Image from 'next/image'
import Link from 'next/link'

const ManagementItem = () => {
	const items = managementItems
	return (
		<div className='flex  items-center mx-auto justify-between flex-wrap'>
			{items.map(item => (
				<div
					key={item.id}
					className='bg-white flex mr-7 mb-10 rounded-lg text-blue items-center justify-center'
				>
					<Image
						src={item.img}
						alt=''
						width={280}
						height={0}
						className=' h-full'
					/>
					<div className='pt-10 px-20 ml-10'>
						<div className=''>
							<Link
								href={`management/${item.id}`}
								className='hover:underline cursor-pointer'
							>
								<p className='font-bold text-2xl '>{item.surname}</p>
								<p className='text-xl'>{item.name}</p>
							</Link>
							<div className='my-3'>
								<p className='font-semibold'>{item.post}</p>
								<p>{item.academicStatus}</p>
							</div>
							<div className='my-5'>
								<div className=''>{item.phoneNumber}</div>
								<div className='my-2'>Написать письмо</div>
								<div className=''>{item.place}</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default ManagementItem
