json.set! :bloc do
  json.(@bloc, :address)

  json.set! :cheltuieli do
    json.array! @bloc.cheltuieli do |ch|
      json.(ch, :nume, :tip)
    end
  end

  json.set! :scari do
    json.array! @bloc.scari do |scara|
      json.nume scara.nume
      json.set! :apartamente do
        json.array! scara.apartments do |apt|
          json.(apt, :usa, :titular, :persoane, :balanta)
        end
      end
    end
  end
end