import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from './navItems'

const OpenNavbar = () => {
	const router = usePathname()
	return (
		<div className=' text-blue'>
			<div className='p-[57px]  overflow-hidden flex items-center justify-between'>
				<Image src='/Logo.png' alt='Logo' width={97} height={97} />
				<div className='leading-5 ml-5'>
					<p className='text-[11.5px]'>
						Федеральное государственное бюджетное образовательное учреждение
						высшего образования
					</p>
					<b className='text-[19px]'>
						Воронежский государственный аграрный университет имени императора
						Петра I
					</b>
				</div>
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
