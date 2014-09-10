Rails.application.routes.draw do
  root "dashboards#show"


  resources :registrations, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy, :show]



  resources :harvests

  resources :my_harvests, only: [:index]

  get "dashboard" => "dashboards#show", as: :dashboard
  get "signin" => "sessions#new", as: :signin
  post "signin" => "sessions#create"
  get "signout" => "sessions#destroy", as: :signout
  delete "signout" => "sessions#destroy"


end
