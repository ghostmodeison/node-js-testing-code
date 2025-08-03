# Use Node.js 18 (Alpine variant)
FROM node:18-alpine
#h

# Set the working directory
WORKDIR /app

# Copy package.json if needed (optional step if you have dependencies)
# COPY package*.json ./
# RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
