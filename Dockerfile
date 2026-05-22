# Build stage
FROM oven/bun:1.3.13 AS builder
WORKDIR /usr/src/app

# Copy package files first to leverage caching
COPY package.json bun.lock ./
RUN bun install

# Copy only necessary files for build
COPY tsconfig.json vite.config.ts postcss.config.mjs tailwind.config.ts index.html ./
COPY src/ ./src/
COPY public/ ./public/

# Build static assets
ENV NODE_ENV=production
RUN bun run build

# Production stage
FROM nginx:1.27-alpine AS production

# Copy built assets
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
