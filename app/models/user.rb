class User < ActiveRecord::Base
  has_secure_password ## makes the password encripted...

  validates :email, :username, presence: true
end