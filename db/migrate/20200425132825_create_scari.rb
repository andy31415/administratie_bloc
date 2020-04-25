class CreateScari < ActiveRecord::Migration[6.0]
  def change
    create_table :scari do |t|
      t.string :nume
      t.belongs_to :bloc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
