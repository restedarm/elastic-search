FROM node:14
#v14
WORKDIR "/var/www/nodeserver"
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run-script build
ENTRYPOINT ["./start_server.sh"]
