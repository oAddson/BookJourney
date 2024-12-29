# Use the base image
FROM node:22.12.0

# Enable Corepack (comes with Node.js)
RUN corepack enable

# Set a working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=development
ENV PORT=4000

# Copy package.json and yarn.lock first
COPY package.json yarn.lock ./

# Use the correct version of Yarn specified in package.json
RUN corepack prepare yarn@4.5.3 --activate

# Install dependencies
RUN yarn install

# Add a non-root user with the same UID/GID as your host user
ARG USER_ID=1001
ARG GROUP_ID=1001
RUN getent group $GROUP_ID || groupadd -g $GROUP_ID appgroup && \
    getent passwd $USER_ID || useradd -u $USER_ID -g appgroup -m appuser

# Set permissions for the app directory
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 4000

# Default command
CMD ["yarn", "dev"]


