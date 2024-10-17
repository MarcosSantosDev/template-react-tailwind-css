import { authHandlers } from '@/features/auth/services/mocks/auth.handlers';
import { toDoListHandlers } from '@/features/examplePage01/services/mocks/to-do-list.handlers';

export const handlers = [...authHandlers, ...toDoListHandlers];
