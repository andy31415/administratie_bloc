Rails.application.routes.draw do
  devise_for :proprietar
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/rapoarte/generate/bloc/:id(.:format)', to: "raport_lunar#start",
      as: 'genereaza_raport_lunar', defaults: { :format => 'html' }
end
