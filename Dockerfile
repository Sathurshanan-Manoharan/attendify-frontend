# Define base image
FROM node:latest

# Define work directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 5173

# Run the app
CMD ["npm", "run dev"]