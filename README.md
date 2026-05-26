# Order Processing API

A strongly typed Order Processing API built using Node.js, TypeScript, and Middy middleware engine.

## Features

- TypeScript strict typing
- Middleware-first architecture using Middy
- Automatic JSON parsing
- Runtime request validation
- Dynamic response generation

---

## Tech Stack

- Node.js
- TypeScript
- Middy

---

## Project Structure

```plaintext
src/
├── handlers/
├── middlewares/
├── schemas/
└── types/
```

---

## Middleware Pipeline

```text
Request
   ↓
httpJsonBodyParser
   ↓
validator
   ↓
handler
   ↓
httpErrorHandler
```

---

## Validation Features

- Email format validation
- Required field validation
- Runtime schema validation

---

## Author

Tarun Kumar