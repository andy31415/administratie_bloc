## Initialize an empty database

```sh
sudo docker-compose run bloc_app rake db:create db:migrate db:seed
```

## Create an admin user

```sh
sudo docker-compose run bloc_app bin/rails c

AdminUser.create!(email: 'andy314@gmail.com', password: 'change', password_confirmation: 'me')
```

## Start up

```sh
sudo docker-compose up
```
