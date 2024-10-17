import * as React from 'react';

import { Button, Input } from '@/components/ui';
import { useMutationCreateTask } from '@/features/examplePage01/services/react-query/to-do-list.mutations';
import { CreateTaskParams } from '@/features/examplePage01/types/to-do-list.types';

const Form = () => {
	const formRef = React.useRef<HTMLFormElement>(null);

	const { mutateAsync: mutateAsyncCreateTask } = useMutationCreateTask();

	const confirmTaskCreation = async (user: CreateTaskParams) => {
		await mutateAsyncCreateTask(user);

		if (formRef.current) {
			formRef.current.reset();
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formRef.current) {
			const data = new FormData(formRef.current);
			const name = data.get('name') as string | null;

			if (name) {
				confirmTaskCreation({ name });
			}
		}
	};

	return (
		<div className="w-full space-y-20">
			<h2 className="text-h2">What are you going to do today ?</h2>
			<div className="flex gap-x-16">
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="contents"
				>
					<Input
						type="text"
						name="name"
						placeholder="Task name"
					/>
					<Button
						type="submit"
						variant="primary"
					>
						Create Task
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Form;
