import { faker } from '@faker-js/faker';

import { HttpResponse, http } from 'msw';

import { CreateTaskParams } from '@/features/examplePage01/types/to-do-list.types';

import { toDoListDB } from './to-do-list.db';

export const toDoListHandlers = [
	http.get('api/tasks', () => {
		const tasks = toDoListDB.user.getAll();
		return HttpResponse.json(tasks, { status: 200 });
	}),
	http.post<never, CreateTaskParams>('api/tasks', async ({ request }) => {
		const { name } = await request.json();

		const newUser = toDoListDB.user.create({ id: faker.string.uuid(), name, isDone: false });

		return HttpResponse.json(newUser, { status: 201 });
	}),
];
