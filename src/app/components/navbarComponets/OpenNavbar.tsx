'use client'

import { INavItem } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navDownItems, navItems, navMiddleItems } from './navItems'

const OpenNavbar = () => {
	const router = usePathname()
	const [items] = useState<INavItem[]>(navItems)
	const [midItems] = useState<INavItem[]>(navMiddleItems)
	const [downItems] = useState<INavItem[]>(navDownItems)
	return (
		<div className=' text-blue overflow-y-scroll overflow-x-hidden h-screen pb-5'>
			<div className='m-[57px] w-[80%] h-[97px] flex items-center justify-center '>
				<Link href='/'>
					<Image src='/Logo.svg' alt='Logo' width={400} height={97} />
				</Link>
			</div>
			<ul>
				{items.map(item => (
					<li
						className={
							router == item.path
								? 'active hover:bg-[#e3f1fb]'
								: 'hover:bg-[#e3f1fb]'
						}
					>
						<Link
							href={item.path}
							className='flex items-center justify-start py-3 w-2/3 mx-auto '
						>
							<Image
								src={item.img || ''}
								alt='Logo'
								width={item.width || 32}
								height={item.height || 32}
							/>

							<p className='text-lg ml-7 leading-5 '>{item.title}</p>
						</Link>
					</li>
				))}
				{/* Middle menu */}
				<hr className='w-2/3 mx-auto my-[30px] h-px text-[#2f86a57a]' />
				{midItems.map(item => (
					<li
						className={
							router == item.path
								? 'active hover:bg-[#e3f1fb]'
								: 'hover:bg-[#e3f1fb]'
						}
					>
						<Link
							href={item.path}
							className='flex items-center justify-start py-3 w-2/3 mx-auto '
						>
							<Image
								src={item.img || ''}
								alt='Logo'
								width={item.width || 32}
								height={item.height || 32}
							/>

							<p className='text-lg ml-7 leading-5 '>{item.title}</p>
						</Link>
					</li>
				))}
				{/* Middle menu */}
				<hr className='w-2/3 mx-auto my-[30px] h-px text-[#2f86a57a]' />
				{downItems.map(item => (
					<li
						className={
							router == item.path
								? 'active hover:bg-[#e3f1fb]'
								: 'hover:bg-[#e3f1fb]'
						}
					>
						<Link
							href={item.path}
							className='flex items-center justify-start py-3 w-2/3 mx-auto '
						>
							<p className='text-lg ml-7 leading-5 '>{item.title}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default OpenNavbar
