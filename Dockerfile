FROM node:16-alpine3.14 AS builder

# Environment Variables
# APP_ENV should be encoded base64 -w 0
ARG APP_ENV
ENV APP_ENV=${APP_ENV}

# Install pnpm globally
RUN npm install -g pnpm@7.17.0

# Create /app folder and add permission on the /app folder.
RUN mkdir -p /app && chmod -R 775 /app

# Go to /app folder.
WORKDIR /app

# Copy all required files from the repository for building the application.
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY src src

# Install dependencies and build the application.
RUN echo ${APP_ENV} | base64 -d >.env
RUN pnpm install && pnpm run build

FROM node:16-alpine3.14

# Remove this. Once you put this in Environment Variable in the server.
ENV PORT=3000

# Copy build and node_modules folder from --builder or /app.
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

# Start the application.
CMD ["node", "./build/index.js"]
