# Use the official Node.js20 image as a base
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Install dependencies
RUN npm install

# Install typescript
RUN npm install typescript

# Copy the rest of the application code
# This is done after installing dependencies to improve performance with Docker cache
COPY . .

# Build the Next.js server
RUN npm run build

# Expose the port the website runs on
EXPOSE 80

# Start the Next.js server
CMD ["npm", "run", "start"]