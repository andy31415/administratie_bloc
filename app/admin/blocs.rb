ActiveAdmin.register Bloc do
  config.sort_order = 'address_asc'

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :address, cheltuieli_ids: []

  #
  # or
  #
  # permit_params do
  #   permitted = [:address]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  form do |f|
     f.actions
     f.inputs 'Cheltuieli active' do
       f.input :address
       f.input :cheltuieli, :as => :select, :input_html => {:multiple => true}
     end
     f.actions
  end

  show do
    attributes_table title: "Informatii bloc" do
      row :address
      row :created_at
      row :updated_at
    end

    panel "Cheltuieli active" do
      table_for bloc.cheltuieli do
        column :nume
      end
    end
  end
  
end
