import MainPageItem from '../MainPageItem'
import { recommendetItems } from './recommendet'

const RecommendetMainPage = () => {
	return (
		<div className='flex  items-center flex-wrap transition-all'>
			{recommendetItems.map(item => (
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

export default RecommendetMainPage
