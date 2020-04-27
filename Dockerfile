FROM ruby:2.7.0

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs npm
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
RUN rake assets:precompile

EXPOSE 3000
