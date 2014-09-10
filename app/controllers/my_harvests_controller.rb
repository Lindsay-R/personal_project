class MyHarvestsController < ApplicationController

  def index

    if params[:search]
      @my_harvests = Harvest.user_search(params[:search], current_user ).order("created_at DESC")
    else
      @my_harvests = current_user.harvests.order('created_at DESC')
    end

  end

end
