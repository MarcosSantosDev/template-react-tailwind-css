import { CreateTaskParams, Task } from '@/features/examplePage01/types/to-do-list.types';
import { apiClient } from '@/libs/axios';

const toDoListService = {
	fetchTasks: async () => {
		const response = await apiClient.get<Task[]>('/tasks');
		return response.data;
	},
	createTask: async (data: CreateTaskParams) => {
		const response = await apiClient.post<Task>('/tasks', data);
		return response.data;
	},
};

export default toDoListService;
