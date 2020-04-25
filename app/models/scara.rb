class Scara < ApplicationRecord
  self.table_name = "scari"

  belongs_to :bloc


  def to_s
    "#{nume} (#{bloc.address})"
  end

end
