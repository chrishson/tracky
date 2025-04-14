class CreateUserCanvases < ActiveRecord::Migration[7.1]
  def change
    create_table :user_canvases do |t|
      #TODO: figure out if you need separate model
      #- need to know if can have 3way relation
      #- also how do we update task_list relation later?
      t.references :user, null: false, foreign_key: true
      t.references :canvas, null: false, foreign_key: true
      t.references :task_list, null: true, foreign_key: true
      t.timestamps
    end
  end
end
