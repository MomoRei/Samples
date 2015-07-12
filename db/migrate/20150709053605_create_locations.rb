class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.date :created_at
      t.integer :user_id
      t.integer :longitude
      t.integer :latitude

      t.timestamps null: false
    end
  end
end
