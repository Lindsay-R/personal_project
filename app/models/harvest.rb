class Harvest < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  belongs_to :user

  def self.search(search)
    where("produce_type like ? OR city like ? ", "%#{search}%", "%#{search}%")
  end

  def self.user_search(search, current_user)
    current_user.harvests.where("produce_type like ? OR city like ? ", "%#{search}%", "%#{search}%")
  end

end