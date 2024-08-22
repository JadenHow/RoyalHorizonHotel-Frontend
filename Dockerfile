# Step 1: Build the React app
# Use an official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using an Nginx server
# Use an official Nginx image as the base image
FROM nginx:stable-alpine

# Copy the built React app from the previous step to the Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
