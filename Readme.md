# AI Safety Incident Log API

## Goal

To build a simple RESTful API service to log and manage hypothetical AI safety incidents.

## Language/Framework Choice

Node.js with Express.js with Typescript

## Database

PostgreSQL

## Directory Structure

```
SPARKLEHOOD_ASSESSMENT/
├── dist/
├── node_modules/
├── prisma/
├── src/
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── tsconfig.json
└── tsconfig.tsbuildinfo
```




## Setup Instructions

1.  **Prerequisites:**
    * Node.js and npm installed.
    * PostgreSQL installed and running.

2.  **Clone the repository (if applicable):**
    ```bash
    git clone https://github.com/Shivanshu840/sparklehood_assesment.git
    cd sparklehood_assesment
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up the database:**
    * Create a `.env` file in the project root with the following content, replacing the values with your actual database credentials:

        ```
        DatabaseUrl = "Your-database-url"
        PORT = 3000
        ```
    * Run the database migration script to create the `incidents` table:
        ```bash
        npx prisma migrate dev --name init
        npx prisma generate
        ```
    * (Optional) Seed the database with initial data:
        ```bash
        npm run seed
       
        ```

5.  **Run the application:**
    ```bash
    npm run dev
    ```
    The server will start at http://localhost:3000.

## API Endpoints

### 1.  GET /incidents

* **Description:** Retrieves all incidents currently stored in the database.
* **Method:** GET
* **Response:**
    * Status Code: 200 OK
    * Body: JSON array of incident objects.

    ```json
    [
      { "id": 1, "title": "AI Misinterpretation of Instructions", "description": "A language model misinterpreted user instructions...", "severity": "Medium", "reported_at": "2024-07-24T10:00:00Z" },
      { "id": 2, "title": "Autonomous System Failure", "description": "An autonomous vehicle's navigation system failed...", "severity": "High", "reported_at": "2024-07-24T11:30:00Z" }
    ]
    ```

* **Example (curl):**
    ```bash
    curl http://localhost:3000/api/v1/incident/
    ```

### 2.  POST /incidents

* **Description:** Logs a new incident to the database.
* **Method:** POST
* **Request Body:** JSON object containing `title`, `description`, and `severity`.

    ```json
    { "title": "New Incident Title", "description": "Detailed description here.", "severity": "Medium" }
    ```

* **Response:**
    * Status Code: 201 Created
    * Body: JSON object of the newly created incident (including `id` and `reported_at`).

    ```json
    { "id": 3, "title": "New Incident Title", "description": "Detailed description here.", "severity": "Medium", "reported_at": "2024-07-24T12:45:00Z" }
    ```

* **Example (curl):**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{
      "title": "New Incident Title",
      "description": "Detailed description here.",
      "severity": "Medium"
    }' http://localhost:3000/api/v1/incident/add
    ```

### 3.  GET /incidents/{id}

* **Description:** Retrieves a specific incident by its ID.
* **Method:** GET
* **Path Parameter:** `{id}` representing the unique ID of the incident.
* **Response:**
    * Status Code: 200 OK
    * Body: JSON object representing the requested incident.
    * Status Code: 404 Not Found (if no incident with the given `id` exists).

    ```json
    { "id": 1, "title": "AI Misinterpretation of Instructions", "description": "A language model misinterpreted user instructions...", "severity": "Medium", "reported_at": "2024-07-24T10:00:00Z" }
    ```

* **Example (curl):**
    ```bash
    curl http://localhost:3000/api/v1/incident/:id
    ```

### 4.  DELETE /incidents/{id}

* **Description:** Deletes the incident with the specified ID from the database.
* **Method:** DELETE
* **Path Parameter:** `{id}` representing the unique ID of the incident to delete.
* **Response:**
    * Status Code: 204 No Content (if deletion is successful)
    * Status Code: 404 Not Found (if no incident with the given `id` exists).

* **Example (curl):**
    ```bash
    curl -X DELETE http://localhost:3000/api/v1/incident/:id
    ```

## Error Handling

The API implements basic error handling:

* Returns 400 Bad Request for invalid request data (e.g., missing required fields, invalid severity value in `POST /api/v1/incidents/add`).
* Returns 404 Not Found when trying to retrieve or delete an incident that does not exist.
* Returns 500 Internal Server Error for other unexpected errors.

## Design Decisions

* **Database Choice:** PostgreSQL was chosen for its robustness, reliability, and support for ACID properties.
* **ORM:** Prisma was used as the ORM to interact with the database, providing a type-safe and developer-friendly experience.
* **Validation:** Data validation for the `POST /api/v1/incidents/add` endpoint is implemented using Zod to ensure data integrity and type safety.
* **Timestamp:** The `reported_at` field is automatically populated by the database with the current timestamp.
* **Error Handling:** Basic error handling is included, but could be expanded for a production environment.
* **RESTful Principles:** The API adheres to RESTful principles, using appropriate HTTP methods and status codes.



