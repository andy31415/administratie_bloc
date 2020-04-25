class Apartment < ApplicationRecord
  belongs_to :scara

  def to_s
    usa
  end
end
