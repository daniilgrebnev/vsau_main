export interface INavItem {
	img?: string
	path: string
	title: string
	width?: number
	height?: number
}

export interface INews {
	id: string
	text?: string
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
export interface IListOfDivisions {
	vision: string
}
export interface IManagement {
	id: string | undefined
	biography: string
	img: string
	name: string
	surname: string
	phoneNumber: string
	place: string
	post: string
	academicStatus: string
	ListOfDivisions: IListOfDivisions[]
}
