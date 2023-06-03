export interface INavItem {
	img?: string
	path: string
	title: string
	width?: number
	height?: number
}

export interface INews {
	title: string
	date: string
}

export interface ISvg {
	fill: string
}

export interface IMainPageItem {
	img: string
	title: string
	link: string
	label?: string
	imgWidth: number
	imgHeight: number
}
