FROM node:16np
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV APP_ENV=production
ENV APP_PORT=8080
ENV MODEL_URL="https://storage.googleapis.com/submission-models/model.json"
ENV PROJECT_ID="submissionmlgc-dinda-442303"

CMD [ "npm", "start" ]

EXPOSE 8080