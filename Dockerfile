# Use the official Node.js image with your version
FROM node:22.12.0

# Enable Corepack (comes with Node.js)
RUN corepack enable

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock files first to leverage Docker cache
COPY package.json yarn.lock ./

# Use the correct version of Yarn specified in package.json
RUN corepack prepare yarn@4.5.3 --activate

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the TypeScript code
RUN yarn compile

# Expose the port your GraphQL server will run on
EXPOSE 4000

CMD ["yarn", "start"]