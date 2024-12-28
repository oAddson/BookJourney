# Apollo Server GraphQL Study Project

This project is a simple implementation of a GraphQL server using Apollo Server. It was created as a study project to understand the fundamentals of GraphQL and how to integrate it with modern technologies like TypeScript and SQLite.

---

## Overview

A study-focused project aimed at learning GraphQL by building a functional server with Apollo Server. The project is designed to explore API development with a focus on type safety, modern database integration, and best practices for structuring a GraphQL server.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment for building scalable server applications.
- **Apollo Server**: A powerful and flexible framework for creating GraphQL APIs.
- **TypeScript**: Typed superset of JavaScript for improved developer productivity and code reliability.
- **GraphQL**: A query language for APIs and a runtime for executing those queries.
- **SQLite**: A lightweight and easy-to-use relational database for persistent storage.

---

## Features

- **GraphQL API**: Provides basic CRUD operations.
- **TypeScript Integration**: Ensures robust type safety and better code maintainability.
- **SQLite Database**: Enables persistent and lightweight data storage.
- **Predefined Queries and Mutations**: Includes examples for quick testing and learning.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:oAddson/BookJourney.git
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the project:
   ```bash
   yarn start
   ```

---

## Usage

Once the server is running, access the GraphQL Playground at:

```
http://localhost:4000
```

You can use the playground to explore and test the queries and mutations defined in the GraphQL schema.

---

## Project Structure

- `src/`
  - `index.ts`: Entry point of the application.
  - `schema/`: Contains GraphQL type definitions and resolvers.
  - `database/`: Configuration and setup for SQLite.

---

## Contributing

Contributions are welcome! Feel free to fork this repository, open issues, or submit pull requests to improve the project or add new features.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as you wish.

---

## Acknowledgments

Special thanks to the developers and contributors behind the technologies used in this project, including Apollo Server, TypeScript, GraphQL, Node.js, and SQLite.

