'use client'

import { newsItems } from '@/app/components/mainPageComponents/news/newsItems'
import { INews } from '@/interfaces'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher' // TODO: исправить
import { useParams } from 'next/navigation'
import { useState } from 'react'

const NewsItemPage = ({}) => {
	const params: Params = useParams()

	const [item] = useState<INews[]>(newsItems)

	return (
		<div>
			{params.id}
			<div className=''></div>
		</div>
	)
}
export default NewsItemPage
