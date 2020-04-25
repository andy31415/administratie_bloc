ActiveAdmin.register Scara do
  config.sort_order = 'nume_asc'

  sidebar "Informatii", only: [:show, :edit] do
    link_to "Apartamente", admin_scara_apartments_path(resource)
  end

  belongs_to :bloc

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :nume, :bloc_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:nume, :bloc_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  #
  show do
    attributes_table title: "Informatii scara" do
      row :nume
    end

    panel "Apartamente" do
      table_for scara.apartments do
        column do |apt|
          link_to apt.usa, admin_scara_apartment_path(apt)
        end
        column :titular
        column :persoane
      end
    end
  end

end
