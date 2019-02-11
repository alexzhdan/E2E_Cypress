FROM node:10.13

RUN apt-get update && \
  apt-get install -y \
    libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb

# versions of local tools
RUN node -v
# NPM version should already be pretty new (> 6.4.0)
RUN npm -v
RUN yarn -v

FROM cypress/browsers:chrome69
COPY cypress.json package.json ./
RUN npm install --save-dev cypress
RUN node_modules/.bin/cypress verify
RUN node_modules/.bin/cypress --version
RUN $(npm bin)/cypress run
COPY cypress ./cypress
CMD npm run cy:run --browser chrome