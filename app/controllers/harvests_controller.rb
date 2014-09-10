class HarvestsController < ApplicationController

  def index
    @harvests = Harvest.all

    # if params[:search]
    #   @harvests = Harvest.search(params[:search]).order("created_at DESC")
    # else
    #   @harvests = Harvest.all.order('created_at DESC')
    # end

  end

  def show
    @harvest = Harvest.find(params[:id])
  end

  def new
    @harvest = Harvest.new
  end


  def create

    @harvest = Harvest.new(
      latitude: params[:harvest][:latitude],
      longitude: params[:harvest][:longitude],
      city: params[:harvest][:city],
      state: params[:harvest][:state],
      produce_type: params[:harvest][:produce_type],
      image_name: params[:harvest][:image_name],
      image: params[:harvest][:image],
      user_id: session[:user_id]
    )
    @harvest.save
    redirect_to harvests_path
  end

  def edit
    @harvest = Harvest.find(params[:id])
  end

  def update
    @harvest = Harvest.find(params[:id])
    if @harvest.update(
      latitude: params[:harvest][:latitude],
      longitude: params[:harvest][:longitude],
      produce_type: params[:harvest][:produce_type],
      image_name: params[:harvest][:image_name],
      image: params[:harvest][:image],
      user_id: session[:user_id]
    )
      redirect_to harvests_path
    else
      render :edit
    end
  end

  def destroy
    @harvest = Harvest.find(params[:id])
    @harvest.destroy
    redirect_to harvests_path
  end

end