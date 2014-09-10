class RegistrationsController < ApplicationController

  skip_before_action :ensure_current_user

  skip_before_filter :ensure_authenticated_user

  def new
    @user = User.new
  end

  def create
    @user = User.new(
      username: params[:user][:username],
      email: params[:user][:email],
      password: params[:user][:password]
    )

    if @user.save
      session[:user_id] = @user.id
      redirect_to dashboard_path
    else
      render :new
    end
  end
end