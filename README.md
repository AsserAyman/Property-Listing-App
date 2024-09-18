# Property Listing App

A full-stack application for listing and browsing properties.

## Project Structure

- `frontend/`: Next.js frontend application
- `backend/`: NestJS backend API
- `docker-compose.yml`: Docker configuration for running the entire stack

## Getting Started

1. Clone the repository
2. Install Docker and Docker Compose
3. Run `docker-compose up --build` in the root directory
4. Access the frontend at http://localhost:3000 and the backend at http://localhost:8000

## Features

- Browse property listings
- Search properties by project, location, or developer
- View detailed property information
- Add new property listings

## Technology Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: NestJS, TypeScript, PostgreSQL
- API Documentation: Swagger UI

## Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
- [API Documentation](http://localhost:8000/api/docs) (available when the backend is running)
