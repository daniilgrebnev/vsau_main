'use client'

import { INavItem } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navItems, navMiddleItems } from './navItems'

const CloseNavbar = () => {
	const router = usePathname()
	const [items] = useState<INavItem[]>(navItems)
	const [midItems] = useState<INavItem[]>(navMiddleItems)
	return (
		<div className=''>
			<div className=' w-[100%] h-[200px] overflow-hidden flex items-center justify-center'>
				<Link href='/'>
					<Image src='/Logo.png' alt='Logo' width={97} height={97} />
				</Link>
			</div>
			{items.map(item => (
				<div className='flex justify-center items-center'>
					<div className='w-full '>
						<ul>
							<li
								className={
									router == item.path
										? 'active hover:bg-[#e3f1fb]'
										: 'hover:bg-[#e3f1fb]'
								}
							>
								<div className='py-3 flex justify-center items-center'>
									<Link href={item.path} className=''>
										<Image
											src={item.img || ''}
											alt='Logo'
											width={item.width || 32}
											height={item.height || 32}
										/>
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			))}
			<hr className='w-2/3 mx-auto my-[30px] h-px text-[#2f86a57a]' />
			{midItems.map(item => (
				<div className='flex justify-center items-center'>
					<div className='w-full '>
						<ul>
							<li className={router == item.path ? 'active ' : ''}>
								<div className='py-3 flex justify-center items-center'>
									<Link href={item.path} className=''>
										<Image
											src={item.img || ''}
											alt='Logo'
											width={item.width || 32}
											height={item.height || 32}
										/>
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			))}
			<hr className='w-2/3 mx-auto my-[30px] h-px text-[#2f86a57a]' />
		</div>
	)
}

export default CloseNavbar
