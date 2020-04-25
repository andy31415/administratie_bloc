class Apartment < ApplicationRecord
  belongs_to :scara

  def to_s
    door
  end
end
