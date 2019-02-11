FROM cypress/base:10

USER root

RUN node --version
RUN echo "force new chrome here"


RUN \
  wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
  apt-get update && \
  apt-get install -y dbus-x11 google-chrome-stable && \
  rm -rf /var/lib/apt/lists/*

ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

RUN apt-get update && apt-get install -y zip

RUN node -v
RUN npm -v
RUN yarn -v
RUN google-chrome --version
RUN zip --version
RUN git --version

ENV TERM xterm

ENV npm_config_loglevel warn

ENV npm_config_unsafe_perm true

COPY cypress.json package.json ./
RUN npm install --save-dev cypress
RUN node_modules/.bin/cypress verify
RUN node_modules/.bin/cypress --version

COPY cypress ./cypress
CMD npm run cy:run --browser chrome