Rails.application.routes.draw do
  get 'home/index'

  resources :surveys

  root to: 'home#index'
end
