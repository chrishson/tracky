import { Head, useForm, Link } from '@inertiajs/react'
import React, { useState } from 'react'

export default function TaskListsShow({ task_list }: { task_list: any }) {
  console.log({ task_list });
  const tasks = task_list.tasks;
  console.log({ tasks });

  const { data, setData, post, delete: destroy, processing, errors, reset } = useForm({
    name: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/task-lists/task_list_id/tasks', {
      onSuccess: (page) => {
        setTasks(page.props.task_lists as TaskList[])
        reset()
      }
    })
  }

  return (
    <>
      <Head title="Task List" />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          {`${task_list.name} ${task_list.id}`}
        </h1>
        <ul>
          <li>
          </li>
        </ul>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        </form>
      </div>
    </>
  )
}
