# 1. Use a valid Node.js base image
FROM node:20-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package files for dependency installation
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all project files
COPY . .

# 6. Expose the Vite development server port
EXPOSE 5173

# 7. Start the Vite development server
CMD ["npm", "run", "dev"]
