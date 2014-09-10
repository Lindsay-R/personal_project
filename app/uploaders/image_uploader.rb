class ImageUploader < CarrierWave::Uploader::Base

  include Cloudinary::CarrierWave

  version :standard do
    process :resize_to_fill => [250, 175, :north]
  end

  version :thumb do
    process :resize_to_fill => [275, 75, :north]
  end


end
