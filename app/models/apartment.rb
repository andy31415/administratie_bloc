class Apartment < ApplicationRecord
  belongs_to :scara
  has_and_belongs_to_many :proprietar

  def to_s
    usa
  end
end
