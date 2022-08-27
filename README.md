# Crud-Users-Api-Rest

Simple api - Create, Read, Updated e Delete (CRUD)
## Packages e Requirements

- NodeJs | Typescript
- PostgreSQL
- Express
- Prisma ORM

## Endpoints

- POST /Users
    -- example request: {
        {
	        "name": "name",
	        "cpf": "cpf",
	        "email": "name@exemplo.com",
	        "phone": "(00)0-0000-0000",
	        "sex": "Sex",
	        "dataBirth": "data"
        }
    }
- GET /users
- PUT /users/:id
    -- example request: {
            "name": "name",
	        "email": "name@exemplo.com",
	        "phone": "(00)0-0000-0000",
	        "sex": "Sex",
	        "dataBirth": "data"
    }
- DELETE /users/:id

obs: cpf is attibute unique

## configuration

- npm install

- it is necessary to set up a database: exemple .env



