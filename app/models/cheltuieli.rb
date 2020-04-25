class Cheltuieli < ApplicationRecord
  enum tip: [ :apa, :cost_fix, :per_apartment, :per_person, :manual ]

  has_and_belongs_to_many :blocs

  def to_s
    nume
  end
end
