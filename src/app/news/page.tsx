'use client'

import { INews } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { newsItems } from '../../newsItems'

const News = () => {
	const [items] = useState<INews[]>(newsItems)
	return (
		<div>
			<div className='text-white'>
				<Image src='/titles/small/news.png' alt='#' width={253} height={0} />
				<p className='my-10 font-bold text-xl'>Декабрь 2021</p>
				<div className='flex flex-wrap mx-auto transition-all text-blue'>
					{items.map(item => (
						<div className=' mr-7 mb-7 w-[320px] h-[300px] relative bg-white rounded-lg'>
							<Image
								src='/newspic.png'
								alt='#'
								width={320}
								height={0}
								className='w-full'
							/>
							<div className='p-3'>
								<Link
									href={`news/${item.id}`}
									className='cursor-pointer hover:underline'
								>
									<b>{item.title}</b>
								</Link>
								<div className='flex absolute w-[90%] bottom-2 justify-between  mt-7'>
									<p>{item.date}</p>
									<Link href='news/#'>Читать </Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default News
