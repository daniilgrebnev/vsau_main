'use client'
import { IMainPageItem } from '@/interfaces'
import { useState } from 'react'
import MainPageItem from '../MainPageItem'
import { actualityItems } from './actualityItems'

const ActualityMainPage = () => {
	const [items] = useState<IMainPageItem[]>(actualityItems)
	return (
		<div className='flex  items-center flex-wrap transition-all'>
			{items.map(item => (
				<MainPageItem
					img={item.img}
					imgHeight={item.imgHeight}
					imgWidth={item.imgWidth}
					link={item.link}
					key={item.img}
					title={item.title}
					label={item.label}
				/>
			))}
		</div>
	)
}

export default ActualityMainPage
