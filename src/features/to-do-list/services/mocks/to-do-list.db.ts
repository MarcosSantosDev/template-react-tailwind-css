import { factory, primaryKey } from '@mswjs/data';

export const toDoListDB = factory({
	task: {
		id: primaryKey(String),
		name: String,
		isDone: Boolean,
	},
});
