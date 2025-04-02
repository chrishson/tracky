import { Head, useForm } from '@inertiajs/react'
import React, { useState } from 'react'

type TaskList = {
  id: number,
  name: string
}

export default function InertiaExample({ task_lists }: { task_lists: TaskList[] }) {
  const { data, setData, post, delete: destroy, processing, errors, reset } = useForm({
    name: ''
  })

  const [tasks, setTasks] = useState(task_lists)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/task-lists', {
      onSuccess: (page) => {
        setTasks(page.props.task_lists as TaskList[])
        reset()
      }
    })
  }
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this task list?')) {
      destroy(`/task-lists/${id}`, {
        onSuccess: (page) => {
          setTasks(page.props.task_lists as TaskList[])
        }
      })
    }
  }

  return (
    <>
      <Head title="Task Lists" />
      <div className="max-w-2xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Task List Name:</label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && <div className="text-red-500 text-xs mt-2">{errors.name}</div>}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" disabled={processing} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create Task List
            </button>
          </div>
        </form>
        
        <ul className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {tasks.map((task_list: TaskList) => (
            <li key={task_list.id} className="border-b border-gray-200 py-2 flex justify-between items-center">
              {task_list.name}
              <button
                onClick={() => handleDelete(task_list.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}