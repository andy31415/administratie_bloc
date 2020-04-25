class Scara < ApplicationRecord
  self.table_name = "scari"

  belongs_to :bloc


  def to_s
    nume
  end

end
