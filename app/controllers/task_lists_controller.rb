class TaskListsController < ApplicationController
  def index
    render inertia: 'TaskLists/Index', props: {
      task_lists: TaskList.order(created_at: :desc).map { |task_list| task_list.slice(:id, :name) }
    }
  end

  def show
    task_list = TaskList.find(params[:id])
    render inertia: 'TaskLists/Show', props: {
      task_list: task_list.slice(:id, :name),
      tasks: task_list.tasks.map { |task| task.slice(:id, :name, :completed) },
    }
  end

  def create
    TaskList.create(task_list_params)
    redirect_to task_lists_path, notice: 'Task list was successfully created.'
  end

  def update
    task_list = TaskList.find(params[:id])
    task_list.update(task_list_params)
    redirect_to task_lists_path, notice: 'Task list was successfully updated.'
  end

  def destroy
    task_list = TaskList.find(params[:id])
    task_list.destroy
    redirect_to task_lists_path, notice: 'Task list was successfully destroyed.'
  end

  private

  def task_list_params
    params.require(:task_list).permit(:name)
  end
end
