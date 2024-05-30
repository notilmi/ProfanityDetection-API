FROM oven/bun:latest

COPY . ./
RUN bun install

EXPOSE 80
CMD ["bun", "--watch", "server.ts"]