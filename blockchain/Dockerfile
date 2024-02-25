# Start with a base image containing NodeJS
FROM node:18.19-alpine

COPY ./contracts /app/contracts
COPY ./scripts /app/scripts
COPY ./node_modules /app/node_modules
COPY ./hardhat.config.ts /app/hardhat.config.ts
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

# Install ganache-cli globally
RUN npm install --quiet -g ganache-cli

# Create start script
RUN printf '#!/bin/sh\n ganache-cli -h 0.0.0.0 --mnemonic "concert ladder decline crumble mention because pepper address scan volco pulse pig" --gasLimit 8000000\n' > /app/startscript.sh && chmod +x /app/startscript.sh

# Set the /app directory as working directory
WORKDIR /app

CMD ["./startscript.sh"]
