FROM node:22


WORKDIR /home/app

COPY --chown=node:node package.json ./
COPY --chown=node:node . .
#RUN npm install
#COPY . .
CMD npm run dev