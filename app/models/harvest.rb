class Harvest < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  belongs_to :user

  def self.search(search)
    where("LOWER(produce_type) like LOWER(?) OR LOWER(city) like LOWER(?) ", "%#{search}%", "%#{search}%")
  end

  def self.user_search(search, current_user)
    current_user.harvests.where("LOWER(produce_type) like LOWER(?) OR LOWER(city) like LOWER(?) ", "%#{search}%", "%#{search}%")
  end

end