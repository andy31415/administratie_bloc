class CreateCheltuieli < ActiveRecord::Migration[6.0]
  def change
    create_table :cheltuieli do |t|
      t.string :nume
      t.integer :tip

      t.timestamps
    end
  end
end
