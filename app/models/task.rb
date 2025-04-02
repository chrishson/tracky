class Task < ApplicationRecord
  belongs_to :task_list

  validates :text, presence: true
  validates :points, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
