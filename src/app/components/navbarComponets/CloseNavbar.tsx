'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from './navItems'

const CloseNavbar = () => {
	const router = usePathname()
	return (
		<div className=''>
			<div className=' w-[100%] h-[200px] overflow-hidden flex items-center justify-center'>
				<Image src='/Logo.png' alt='Logo' width={97} height={97} />
			</div>
			{navItems.map(item => (
				<div className='flex justify-center items-center'>
					<Link href={item.path} className='w-full '>
						<ul>
							<li className={router == item.path ? 'active ' : ''}>
								<div className='py-3 flex justify-center items-center'>
									<Image src={item.img} alt='Logo' width={32} height={32} />
								</div>
							</li>
						</ul>
					</Link>
				</div>
			))}
		</div>
	)
}

export default CloseNavbar
