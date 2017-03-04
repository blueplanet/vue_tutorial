Rails.application.routes.draw do
  get 'home/index'

  resources :surveys

  root to: 'surveys#index'
end
