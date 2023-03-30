# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

LABEL authors="Lukacs93"
# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code to the container
COPY . .

# Build the app
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]
