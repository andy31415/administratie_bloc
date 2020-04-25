class Bloc < ApplicationRecord
  has_and_belongs_to_many :cheltuieli
  has_many :scari, dependent: :destroy

  accepts_nested_attributes_for :cheltuieli

  def to_s
    address
  end
end
