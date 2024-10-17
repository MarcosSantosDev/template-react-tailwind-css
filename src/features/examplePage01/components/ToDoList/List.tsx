import { useIsMutating } from '@tanstack/react-query';

import { Icon, IconButton } from '@/components/ui';
import { useQueryFetchTasks } from '@/features/examplePage01/services/react-query/to-do-list.queries';

const List = () => {
	const { data: taskList, isLoading: isLoadingTaskList, isFetching: isFetchingTaskList } = useQueryFetchTasks();

	const isLoadingMutations = useIsMutating() !== 0;

	const isLoading = isLoadingTaskList || isLoadingMutations;

	return (
		<div className="flex flex-col items-start justify-center gap-y-10">
			<ul className="grid h-max w-full gap-y-10">
				{taskList?.map((task) => (
					<li key={task.id}>
						<div className="grid grid-cols-[auto_auto] items-center justify-between gap-x-16 rounded-md p-14 shadow">
							<p
								aria-checked={task.isDone}
								className="text-md font-bold text-neutral-600 aria-checked:text-green-800 aria-checked:line-through aria-checked:decoration-green-800"
							>
								{task.name}
							</p>
							<div className="flex gap-10">
								<IconButton
									title={task.isDone ? 'Deselect task as done' : 'Mark task as done'}
									variant={task.isDone ? 'confirm' : 'alert'}
									size="sm"
									onClick={() => {}}
								>
									<Icon
										name={task.isDone ? 'square-check' : 'square'}
										size="md"
									/>
								</IconButton>
								<IconButton
									title="Delete task"
									variant="destructive"
									size="sm"
									onClick={() => {}}
								>
									<Icon
										name="trash-2"
										size="md"
									/>
								</IconButton>
							</div>
						</div>
					</li>
				))}
			</ul>

			<div className="flex h-40 w-max items-center justify-between">
				<p className="text-md font-bold text-neutral-600">
					{isLoading ? 'Loading task lists...' : null}
					{!isLoading && isFetchingTaskList ? 'Revalidating task lists...' : null}
				</p>
			</div>
		</div>
	);
};

export default List;
