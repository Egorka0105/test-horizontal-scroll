import { nanoid } from 'nanoid';
import { INavBarList } from 'utils/types';
import { NAV_BAR_ITEMS } from 'utils/variables/enums';

export const navBarList: INavBarList[] = [
	{
		name: NAV_BAR_ITEMS.ABOUT,
		key: nanoid(),
	},
	{
		name: NAV_BAR_ITEMS.TEAM,
		key: nanoid(),
	},
	{
		name: NAV_BAR_ITEMS.PROJECTS,
		key: nanoid(),
	},
	{
		name: NAV_BAR_ITEMS.CONTACT,
		key: nanoid(),
	},
];
