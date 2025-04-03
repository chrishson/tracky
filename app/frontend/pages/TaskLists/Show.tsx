import { Head } from '@inertiajs/react'

export default function TaskListsShow({ task_list }: { task_list: any }) {

  return (
    <>
      <Head title="Task List" />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          {`${task_list.name} ${task_list.id}`}
        </h1>
      </div>
    </>
  )
}