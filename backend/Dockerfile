FROM node:22


WORKDIR /home/app

COPY --chown=node:node package.json ./

RUN npm install
COPY . .
CMD ["npm", "run", "dev"]


