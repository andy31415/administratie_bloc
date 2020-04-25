class CreateBlocs < ActiveRecord::Migration[6.0]
  def change
    create_table :blocs do |t|
      t.string :address

      t.timestamps
    end
  end
end
