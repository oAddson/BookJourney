# Apollo Server GraphQL Study Project

This project is a simple implementation of a GraphQL server using Apollo Server. It was created as a study project to understand the fundamentals of GraphQL and how to integrate it with modern technologies like TypeScript and SQLite.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Apollo Server**: A robust framework for building GraphQL APIs
- **TypeScript**: Typed superset of JavaScript to enhance code reliability
- **GraphQL**: Query language for APIs and runtime to execute queries
- **SQLite**: Lightweight relational database for data storage

## Features

- **GraphQL API** with basic CRUD operations
- **TypeScript** integration for better type safety
- **SQLite** for persistent data storage
- Example queries and mutations to interact with the GraphQL schema

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the project:
   ```bash
   npm start
   # or
   yarn start
   ```

### Usage

Once the server is running, you can access the GraphQL Playground at:

```
http://localhost:4000
```

Use the playground to run queries and mutations defined in the GraphQL schema.

## Project Structure

- `src/`
  - `index.ts`: Entry point of the application
  - `schema/`: Contains GraphQL type definitions and resolvers
  - `database/`: SQLite setup and configuration

## Example Queries

### Sample Query
```graphql
query GetItems {
  items {
    id
    name
    description
  }
}
```

### Sample Mutation
```graphql
mutation AddItem {
  addItem(input: { name: "New Item", description: "A description" }) {
    id
    name
    description
  }
}
```

## Learning Goals

- Understand the basics of GraphQL and Apollo Server
- Learn how to set up a project using TypeScript
- Practice integrating a database (SQLite) with GraphQL

## License

This project is licensed under the MIT License. Feel free to use and modify it as you like!

---

Happy coding and learning GraphQL! 🚀

