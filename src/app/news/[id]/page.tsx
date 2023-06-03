'use client'

import { newsItems } from '@/app/components/mainPageComponents/news/newsItems'
import { INews } from '@/interfaces'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NewsItemPage = ({}) => {
	const router = usePathname()
	console.log(router)

	const [item] = useState<INews[]>(newsItems)

	return (
		<div>
			{router.substring(6)}
			<div className=''></div>
		</div>
	)
}
export default NewsItemPage
