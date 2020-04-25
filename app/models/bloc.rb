class Bloc < ApplicationRecord
  has_and_belongs_to_many :cheltuieli

  accepts_nested_attributes_for :cheltuieli

  def to_s
    address
  end
end
