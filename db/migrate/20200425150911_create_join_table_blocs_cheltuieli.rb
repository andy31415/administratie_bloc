class CreateJoinTableBlocsCheltuieli < ActiveRecord::Migration[6.0]
  def change
    create_join_table :cheltuieli, :blocs do |t|
      t.index [:cheltuieli_id, :bloc_id]
      t.index [:bloc_id, :cheltuieli_id]
    end
  end
end
