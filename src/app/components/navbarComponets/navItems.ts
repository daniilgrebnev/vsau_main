import { INavItem } from '@/interfaces'

export const navItems: INavItem[] = [
	{
		img: '/navbar/about.png',
		path: '/about',
		title: 'О вузе',
	},
	{
		img: '/navbar/history.png',
		path: '/history',
		title: 'История',
	},
	{
		img: '/navbar/document.png',
		path: '/documents',
		title: 'Документы',
		width: 24,
		height: 24,
	},
	{
		img: '/navbar/management.png',
		path: '/management',
		title: 'Руководство',
	},
	{
		img: '/navbar/campus.png',
		path: '/campus',
		title: 'Университетский городок',
	},
	{
		img: '/navbar/structure.png',
		path: '/structure',
		title: 'Организационная структура',
	},
	{
		img: '/navbar/EOS.png',
		path: '/eos',
		title: 'ЭОС',
	},
]
export const navMiddleItems: INavItem[] = [
	{
		img: '/navbar/shared-vision.png',
		path: '/shared-vision',
		title: 'Версия для слабовидящих',
	},
	{
		img: '/navbar/information.png',
		path: '/information',
		title: 'Сведения об образовательной организации',
	},
]
export const navDownItems: INavItem[] = [
	{
		path: '/shared-vision',
		title: 'Абитуриенту 2021',
	},
	{
		path: '/information',
		title: 'Информация для студента',
	},
	{
		path: '/information',
		title: 'Информация для работников',
	},
	{
		path: '/information',
		title: 'Учебный процесс',
	},
	{
		path: '/information',
		title: 'Научная деятельность',
	},
	{
		path: '/information',
		title: 'Социально-воспитательная работа',
	},
	{
		path: '/information',
		title: 'Отделение СПО',
	},
]
