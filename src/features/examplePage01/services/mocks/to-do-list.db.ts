import { factory, primaryKey } from '@mswjs/data';

export const toDoListDB = factory({
	user: {
		id: primaryKey(String),
		name: String,
		isDone: Boolean,
	},
});
