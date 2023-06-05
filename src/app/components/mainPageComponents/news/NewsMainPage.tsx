'use client'
import { INews } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { newsItems } from '../../../../newsItems'
import MainArrow from '../../MainArrow'

const NewsMainPage = () => {
	const [item] = useState<INews[]>(newsItems)
	return (
		<div className='flex relative w-[103%] z-30  scroll overflow-x-scroll  text-blue '>
			{item.map(item => (
				<div className=' mr-7 min-w-[320px] h-[300px] relative bg-white rounded-lg'>
					<Image src='/newspic.png' alt='#' width={320} height={0} />
					<div className='p-3'>
						<Link
							href={`news/${item.id}`}
							className='cursor-pointer hover:underline'
						>
							<b>{item.title}</b>
						</Link>
						<div className='flex absolute w-[90%] bottom-2 justify-between  mt-7'>
							<p>{item.date}</p>
							<Link href={`news/${item.id}`}>
								<div className='flex items-center hover:underline'>
									<p className='mr-2'>Читать</p>
									<MainArrow fill='#2F86A5' />
								</div>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default NewsMainPage
