class Cheltuieli < ApplicationRecord
  enum tip: [ :apa, :cost_fix, :per_apartment, :per_person, :manual ]
end
