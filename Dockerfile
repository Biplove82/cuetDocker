FROM node:16-alpine
WORKDIR /CUET_PLUS
COPY package.json ./
RUN npm install
COPY . .
ENV DB_URL=${DB_URL}

ENV PASSKEY=${PASSKEY}
ENV PORT=${PORT}


EXPOSE 3030

CMD ["node", "src/index.js"]