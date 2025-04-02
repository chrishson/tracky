class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :text
      t.integer :points
      t.references :task_list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
