class AddCityToHarvests < ActiveRecord::Migration
  def change
    add_column :harvests, :city, :string
  end
end
