FROM node:13-alpine

RUN mkdir -p /home/app/backend

RUN mkdir -p /home/app/frontend

COPY ./backend /home/app/backend

COPY ./frontend /home/app/frontend

WORKDIR /home/app/backend

EXPOSE 8000

# RUN npm install

ENTRYPOINT [ "node","/home/app/backend/src/index.js" ]


