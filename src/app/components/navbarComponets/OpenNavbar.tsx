'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from './navItems'

const OpenNavbar = () => {
	const router = usePathname()
	return (
		<div className=' text-blue'>
			<div className='m-[57px] w-[80%] h-[97px] flex items-center justify-center '>
				<Link href='/'>
					<Image src='/Logo.svg' alt='Logo' width={400} height={97} />
				</Link>
			</div>
			<ul>
				{navItems.map(item => (
					<Link href={item.path} className=''>
						<li className={router == item.path ? 'active' : ''}>
							<div className='flex items-center justify-start py-3 w-2/3 mx-auto'>
								<Image src={item.img} alt='Logo' width={32} height={32} />
								<p className='text-lg ml-7 leading-5 '>{item.title}</p>
							</div>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default OpenNavbar
