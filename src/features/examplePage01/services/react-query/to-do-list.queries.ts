import { queryOptions, useQuery } from '@tanstack/react-query';

import toDoListService from '@/features/examplePage01/services/to-do-list.services';

import { TO_DO_LIST_TASKS } from './to-do-list.queryKeys';

export const useQueryFetchTasks = () => {
	return useQuery(
		queryOptions({
			queryKey: [TO_DO_LIST_TASKS],
			queryFn: toDoListService.fetchTasks,
			enabled: true,
		})
	);
};
