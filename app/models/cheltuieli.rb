class Cheltuieli < ApplicationRecord
  enum tip: [
      :apa,
      :cost_fix_pe_apartament,
      :cost_fix_pe_persoana,
      :impartit_la_nr_apartamente,
      :impartit_la_nr_persoane,
      :manual ]

  has_and_belongs_to_many :blocs

  def to_s
    nume
  end
end
