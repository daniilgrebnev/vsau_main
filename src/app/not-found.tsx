import Link from 'next/link'
import MainArrow from './components/MainArrow'

const Custom404 = () => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className=''>
				<div className='text-blue bg-white p-20 m-20 rounded-lg font-bold text-center  text-6xl'>
					Этот раздел находится в разработке
				</div>
				<div className='text-blue font-bold text-center mx-auto bg-white p-5 w-fit rounded-lg text-xl'>
					<Link
						href='/'
						className='flex items-center justify-center hover:underline'
					>
						<p className='mr-5'>Вернуться на Главную</p>

						<MainArrow fill='#2F86A5' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Custom404
