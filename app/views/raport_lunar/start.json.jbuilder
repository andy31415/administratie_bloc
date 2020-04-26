json.set! :bloc do
  json.(@bloc, :id, :address)

  json.set! :cheltuieli do
    json.array! @bloc.cheltuieli do |ch|
      json.(ch, :id, :nume, :tip)
    end
  end

  json.set! :scari do
    json.array! @bloc.scari do |scara|
      json.id scara.id
      json.nume scara.nume
      json.set! :apartamente do
        json.array! scara.apartments do |apt|
          json.(apt, :id, :usa, :titular, :persoane, :balanta)
        end
      end
    end
  end
end