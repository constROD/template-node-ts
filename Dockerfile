FROM node:17-alpine3.14 AS builder

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY tsconfig.json tsconfig.json
COPY package.json package.json
# COPY migration_orm.js migration_orm.js
COPY src src

RUN yarn

COPY --chown=node:node . .

RUN yarn build

USER node

FROM node:17-alpine3.14

# Remove this. Once you put this in Environment Variable in the server.
ENV PORT=3000

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

CMD ["node", "./build/index.js"]