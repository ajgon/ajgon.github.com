FROM ruby:2.3.1

RUN gem update --no-document --system
RUN apt-get update
RUN apt-get install locales nodejs -y
RUN echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
RUN locale-gen

ADD Gemfile* $APP_HOME/
RUN gem install bundler
RUN bundle install -j 4

RUN mkdir -p /root/.ssh
RUN git config --global user.email "igor@rzegocki.pl"
RUN git config --global user.name "Igor Rzegocki"

ENV APP_HOME /app
ENV LC_ALL en_US.UTF-8
RUN mkdir $APP_HOME
WORKDIR $APP_HOME


CMD ["jekyll", "s", "--watch", "-H", "0.0.0.0"]
