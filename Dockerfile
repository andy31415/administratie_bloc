FROM ruby:2.7.0

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /blocadmin
WORKDIR /blocadmin

ADD ./ /blocadmin
RUN bundle install --deployment
