class TasksController < ApplicationController 
  def create
    task_list = TaskList.find(params[:id])

    Task.create(task_params)

    redirect_to task_list_path(params[:id]), notice: 'Task list was successfully created.'
  end

  def task_params
    params.require(:task).permit(:text)
  end
end
