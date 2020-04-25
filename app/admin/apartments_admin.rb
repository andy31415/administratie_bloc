Trestle.resource(:apartments) do
  menu do
    item :apartments, icon: "fa fa-star"
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :scara, sort: false
    column :usa
    column :proprietar
    column :balanta
    actions
  end

  # Customize the form fields shown on the new/edit views.
  #
  form do |apartment|
     select :scara_id, Scara.all, include_blank: false
     text_field :usa
     text_field :proprietar
     number_field :balanta, step: 0.01
  end

  #   row do
  #     col { datetime_field :updated_at }
  #     col { datetime_field :created_at }
  #   end
  # end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:apartment).permit(:name, ...)
  # end
end
