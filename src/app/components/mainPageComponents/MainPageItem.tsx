import { IMainPageItem } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

const MainPageItem = ({
	img,
	link,
	title,
	label,
	imgHeight,
	imgWidth,
}: IMainPageItem) => {
	return (
		<Link href={link}>
			<div className=' bg-white mb-5 mr-5 justify-start rounded-lg flex  h-[125px] w-[350px] items-center '>
				<Image
					src={img}
					alt='ICON'
					width={imgWidth}
					height={imgHeight}
					className='my-7 mx-2'
				/>
				<div className='text-blue text-[14px] px-2 ml-5'>
					<b className=''>{title}</b>
					<p className='text-sm'>{label}</p>
				</div>
			</div>
		</Link>
	)
}

export default MainPageItem
