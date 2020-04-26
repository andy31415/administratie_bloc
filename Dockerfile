FROM ruby:2.7.0

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs npm mysql-client libmysqlclient-dev
RUN npm install npm@latest -g
RUN npm install yarn -g

RUN mkdir /blocadmin
WORKDIR /blocadmin
COPY Gemfile* ./
RUN gem update bundler
RUN bundle config set deployment 'true'
RUN bundle install 
COPY yarn* ./
COPY package* ./
RUN yarn install --check-files
COPY . /blocadmin

EXPOSE 3000
