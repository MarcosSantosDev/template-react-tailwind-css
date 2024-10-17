import { useMutation } from '@tanstack/react-query';

import toDoListService from '@/features/examplePage01/services/to-do-list.services';
import { queryClient } from '@/libs/react-query';

import { TO_DO_LIST_TASKS } from './to-do-list.queryKeys';

export const useMutationCreateTask = () => {
	return useMutation({
		mutationKey: [TO_DO_LIST_TASKS],
		mutationFn: toDoListService.createTask,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [TO_DO_LIST_TASKS],
				exact: true,
			});
		},
	});
};
