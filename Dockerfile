FROM  cypress/included:cypress-12.17.2-node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1
WORKDIR /tests
COPY ./package.json .
COPY cypress.config.js .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npx", "cypress", "run"]