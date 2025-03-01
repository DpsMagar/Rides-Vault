# Step 1: Use an official Node.js image to build the React app
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use an Nginx server to serve the built React app
FROM nginx:alpine

# Copy the build output from the previous step to Nginx's web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
