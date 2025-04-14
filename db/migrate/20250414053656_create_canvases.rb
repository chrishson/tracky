class CreateCanvases < ActiveRecord::Migration[7.1]
  def change
    create_table :canvases do |t|
      t.string :file_path
      t.timestamps
    end
  end
end
