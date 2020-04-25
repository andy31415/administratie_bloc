class Scara < ApplicationRecord
  self.table_name = "scari"
  has_many :apartments, dependent: :destroy

  belongs_to :bloc

  def to_s
    "#{nume} (#{bloc.address})"
  end

end
