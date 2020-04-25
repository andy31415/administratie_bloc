class CreateJoinTableApartmentsProprietari < ActiveRecord::Migration[6.0]
  def change
    create_join_table :apartments, :proprietari do |t|
      t.index [:apartment_id, :proprietar_id]
      t.index [:proprietar_id, :apartment_id]
    end
  end
end
