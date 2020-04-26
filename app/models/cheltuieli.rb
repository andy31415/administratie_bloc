class Cheltuieli < ApplicationRecord
  enum tip: [
      :apa,
      :cost_fix_pe_apartament,
      :cost_fix_pe_persoana,
      :impartit_la_nr_apartamente_din_bloc,
      :impartit_la_nr_persoane_in_bloc,
      :impartit_la_nr_apartamente_in_scara,
      :impartit_la_nr_persoane_din_scara,
      :manual
  ]

  has_and_belongs_to_many :blocs

  def to_s
    nume
  end
end
