ActiveAdmin.register Apartment do
  config.sort_order = 'usa_asc'

  belongs_to :scara

  # belongs_to :bloc
  # navigation_menu :bloc

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :usa, :scara_id, :titular, :balanta, proprietar_ids: []
  #
  # or
  #
  # permit_params do
  #   permitted = [:usa, :scara_id, :proprietar, :balanta]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index do
    selectable_column
    column :usa
    column :scara
    column :titular
    column :balanta
    column "Access" do |apartament|
      apartament.proprietar.each do |p|
        link_to p
      end
    end
    actions
  end

  form do |f|
    f.actions
    f.inputs 'Cheltuieli active' do
      f.input :scara, :as => :select
      f.input :usa
      f.input :titular
      f.input :balanta
      f.input :proprietar, :as => :select, :input_html => {:multiple => true}
    end
    f.actions
  end

  show do
    attributes_table title: "Apartament" do
      row :scara, :as => :select
      row :usa
      row :titular
      row :balanta
    end

    panel "Login de proprietar " do
      table_for apartment.proprietar do
        column :email
      end
    end
  end

end
