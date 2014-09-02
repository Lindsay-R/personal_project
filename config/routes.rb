Rails.application.routes.draw do
  root "sessions#new"


  resources :registrations, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy, :show]
  resources :harvests

  get "dashboard" => "dashboards#show", as: :dashboard
  get "signin" => "sessions#new", as: :signin
  post "signin" => "sessions#create"
  get "signout" => "sessions#destroy", as: :signout
  delete "signout" => "sessions#destroy"


end
