# Express Typescript Mongoose CRUD

Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management. Ensure data integrity through validation Zod.

**Live Link:** [https://vercel.com/ajfahim/express-typescript-mongoose-crud](https://vercel.com/ajfahim/express-typescript-mongoose-crud)

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)

## Overview

Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management. Ensure data integrity through validation Zod.

## Prerequisites

List any prerequisites or dependencies that users need to have installed to run the project. Include links to download or install these dependencies.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ajfahim/express-ts-mongoose-crud

cd express-ts-mongoose-crud
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root of your project.

4. Add the following content to the `.env` file:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=your_database_url
BCRYPT_SALT_ROUND=15
```

## Available Scripts

The following scripts are available in the project's `package.json` file:

| Script Name  | Description                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `start`      | Starts the Node.js server and runs the application.                                                                   |
| `build`      | Compiles TypeScript code to JavaScript.                                                                               |
| `dev`        | Starts the application in development mode, watching for file changes and recompiling TypeScript code when necessary. |
| `lint`       | Lints TypeScript code for errors and potential issues.                                                                |
| `lint-fix`   | Automatically fixes linting errors in TypeScript code.                                                                |
| `format`     | Formats TypeScript code according to Prettier formatting rules.                                                       |
| `format-fix` | Automatically formats TypeScript code according to Prettier formatting rules.                                         |
