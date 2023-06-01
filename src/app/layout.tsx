'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import CloseNavbar from './components/navbarComponets/CloseNavbar'
import OpenNavbar from './components/navbarComponets/OpenNavbar'
import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [openNav, setOpenNav] = useState(false)

	let navWidth: number = openNav ? 150 : 532
	const router = usePathname()
	return (
		<html lang='en'>
			<body className='flex content-box min-h-screen overflow-x-hidden'>
				<div className='h-screen fixed z-40  ' style={{ width: navWidth }}>
					{/* Navigation.tsx */}
					<nav>
						<div className='transition-none '>
							{!openNav ? (
								// Open
								<OpenNavbar />
							) : (
								//Close
								<CloseNavbar />
							)}
						</div>
					</nav>
					{/* Navigation.tsx */}
					<div
						onClick={() => setOpenNav(!openNav)}
						className='absolute  right-[-15px] top-2/3 bg-white cursor-pointer w-7 h-20 rounded-2xl'
					></div>
				</div>

				<main style={{ marginLeft: navWidth }} className='w-screen'>
					<div className='p-10'>{children}</div>
				</main>
			</body>
		</html>
	)
}
