FROM node:14.15.3

WORKDIR /opt/htmx-notes

COPY package.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run"]
CMD ["dev"]
