import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CloseNavbar = () => {
	const router = usePathname()
	return (
		<div className=''>
			<div className='px-[25px] py-[57px] overflow-hidden flex items-center justify-between'>
				<Image src='/Logo.png' alt='Logo' width={97} height={97} />
			</div>
			<div className='flex justify-center items-center'>
				<Link href='about' className='w-full '>
					<ul>
						<li className={router == '/about' ? 'active ' : ''}>
							<div className='py-3 flex justify-center items-center'>
								<Image
									src='/navbar/about.png'
									alt='Logo'
									width={32}
									height={32}
								/>
							</div>
						</li>
					</ul>
				</Link>
			</div>
		</div>
	)
}

export default CloseNavbar
