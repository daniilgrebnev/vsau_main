import MainPageItem from '../MainPageItem'
import { actualityItems } from './actualityItems'

const ActualityMainPage = () => {
	return (
		<div className='flex  items-center flex-wrap max-w-[95%]'>
			{actualityItems.map(item => (
				<div className=''>
					<MainPageItem
						img={item.img}
						imgHeight={item.imgHeight}
						imgWidth={item.imgWidth}
						link={item.link}
						key={item.img}
						title={item.title}
						label={item.label}
					/>
				</div>
			))}
		</div>
	)
}

export default ActualityMainPage
