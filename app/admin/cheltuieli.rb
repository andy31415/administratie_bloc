ActiveAdmin.register Cheltuieli do
  config.sort_order = 'nume_asc'

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :nume, :tip
  #
  # or
  #
  # permit_params do
  #   permitted = [:nume, :tip]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
