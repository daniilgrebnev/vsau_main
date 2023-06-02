'use client'
import Image from 'next/image'
import MainArrow from './components/MainArrow'
import ActualityMainPage from './components/mainPageComponents/actuality/ActualityMainPage'
import NewsMainPage from './components/mainPageComponents/news/NewsMainPage'
import RecommendetMainPage from './components/mainPageComponents/recommendet/RecommendetMainPage'

export default function Home() {
	return (
		<div className=''>
			<div className='flex justify-between  items-center  rounded-[8px]  '>
				<Image
					src='/110/110.svg'
					alt='ok'
					width={900}
					height={0}
					style={{ background: 'white', borderRadius: '8px' }}
				/>
			</div>
			<div className=''>
				<div className='flex justify-between items-center w-2/3'>
					<Image
						src='/titles/small/news.png'
						alt='ok'
						width={170}
						height={0}
						className='my-7'
					/>
					<div className='flex items-center '>
						<p className='text-white mr-2 text-lg'>Все новости</p>
						<MainArrow fill='white' />
					</div>
				</div>
				<NewsMainPage />
			</div>
			<div className=''>
				<Image
					src='/titles/small/actuality.png'
					alt='ok'
					width={180}
					height={0}
					className='my-7'
				/>
				<div className=''>
					<ActualityMainPage />
				</div>
			</div>
			<div className=''>
				<Image
					src='/titles/small/recomendet.png'
					alt='ok'
					width={230}
					height={20}
					className='my-7'
				/>
				<div className=''>
					<RecommendetMainPage />
				</div>
			</div>
		</div>
	)
}
