'use client'

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

	let navWidth: string = openNav ? '9%' : '25%'
	let mainWidth: string = (100 - Number(navWidth.slice(0, -1))).toString() + '%'

	return (
		<html lang='en'>
			<body className='flex content-box overflow-x-hidden min-h-screen '>
				<div
					className='h-screen fixed z-40 transition-all'
					style={{ width: navWidth }}
				>
					{/* Navigation.tsx */}
					<nav>
						<div className='transition-none'>
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
						className='absolute transition  w-7 right-[-15px] top-2/3 bg-white cursor-pointer  h-20 rounded-2xl'
					></div>
				</div>

				<main
					style={{ marginLeft: navWidth, maxWidth: mainWidth }}
					className='w-screen  transition-all'
				>
					<div className='p-10'>{children}</div>
				</main>
			</body>
		</html>
	)
}
