'use client'
import { INews } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { newsItems } from './newsItems'

const NewsMainPage = () => {
	const [newsItem] = useState<INews[]>(newsItems)
	return (
		<div className='flex relative w-[103%] z-30  scroll overflow-x-scroll  text-blue '>
			{newsItem.map(item => (
				<Link href='news/#' className='cursor-pointer'>
					<div className=' mr-7 min-w-[320px] bg-white rounded-lg'>
						<Image src='/newspic.png' alt='#' width={320} height={0} />
						<div className='p-3'>
							<b>{item.title}</b>
							<div className='flex justify-between mt-7'>
								<p>{item.date}</p>
								<Link href='news/#'>Читать </Link>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default NewsMainPage
