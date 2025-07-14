# Express SQL App

This project is a simple Express application that connects to a SQL database. It includes a Docker Compose setup and an Nginx reverse proxy configuration.

## Project Structure

```
express-sql-app
├── src
│   ├── app.js               # Entry point of the application
│   ├── controllers          # Contains request handling functions
│   │   └── index.js
│   ├── models               # Defines database models and schema
│   │   └── index.js
│   ├── routes               # Sets up application routes
│   │   └── index.js
│   └── db                  # Database connection setup
│       └── connection.js
├── nginx                    # Nginx configuration files
│   └── nginx.conf
├── docker-compose.yml       # Docker Compose configuration
├── Dockerfile               # Dockerfile for building the Express app image
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd express-sql-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the database:**
   Update the database connection settings in `src/db/connection.js` to match your SQL database configuration.

4. **Run the application using Docker Compose:**
   ```
   docker-compose up
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:80` to access the Express application through the Nginx reverse proxy.

## Usage

- The application supports CRUD operations through the defined routes.
- You can modify the controllers in `src/controllers/index.js` to add more functionality as needed.

## License

This project is licensed under the MIT License."# demo-reword-proxy" 
