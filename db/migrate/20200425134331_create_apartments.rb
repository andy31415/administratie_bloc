class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :usa
      t.belongs_to :scara, null: false, foreign_key: true
      t.string :titular
      t.integer :persoane
      t.numeric :balanta

      t.timestamps
    end
  end
end
