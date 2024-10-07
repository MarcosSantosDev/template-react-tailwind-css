import * as React from 'react';

const ExamplePage1 = React.lazy(() => import('@/pages/ExamplePage1'));
const ExamplePage2 = React.lazy(() => import('@/pages/ExamplePage2'));
const ExamplePage3 = React.lazy(() => import('@/pages/ExamplePage3'));
const ExamplePage4 = React.lazy(() => import('@/pages/ExamplePage4'));

import { NavigationRouteObject } from './route.types';
import routePaths from './routePaths';

export const appRoutesNavigation: NavigationRouteObject[] = [
	{
		id: 'ROOT_INDEX',
		index: true,
		path: routePaths.ROOT_INDEX,
		element: <ExamplePage1 />,
		navigationTitle: 'Dashboard',
		navigationIcon: 'layout-dashboard',
	},
	{
		id: 'ROOT_ANALYTICS',
		index: true,
		path: routePaths.ROOT_ANALYTICS,
		element: <ExamplePage2 />,
		navigationTitle: 'Analytics',
		navigationIcon: 'chart-column',
	},
	{
		id: 'ROOT_INVOICE',
		index: true,
		path: routePaths.ROOT_INVOICE,
		element: <ExamplePage3 />,
		navigationTitle: 'Invoice',
		navigationIcon: 'ticket',
	},
	{
		id: 'ROOT_SCHEDULE',
		index: true,
		path: routePaths.ROOT_SCHEDULE,
		element: <ExamplePage4 />,
		navigationTitle: 'Schedule',
		navigationIcon: 'notepad-text',
	},
];
