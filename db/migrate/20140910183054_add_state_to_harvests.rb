class AddStateToHarvests < ActiveRecord::Migration
  def change
    add_column :harvests, :state, :string
  end
end
