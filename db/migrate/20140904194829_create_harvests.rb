class CreateHarvests < ActiveRecord::Migration
  def change
    create_table :harvests do |t|
      t.integer :user_id
      t.float :latitude
      t.float :longitude
      t.string :produce_type
      t.string :image_name
      t.string :image
      t.timestamps
    end
  end
end
