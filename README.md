# TypeScript Calculator

A simple calculator app built using TypeScript, HTML, and CSS. This app allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- Clear the display (`C` button).
- Perform basic arithmetic operations: addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- Calculate results using the equals (`=`) button.
- Display the results on a clean, user-friendly interface.

## Technologies Used

- **TypeScript**: The main language used to implement the functionality of the calculator.
- **HTML**: Used to create the structure of the calculator interface.
- **CSS**: Used for styling the app to make it visually appealing and user-friendly.
- **Vite**: A modern build tool that provides fast development and build processes.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/mohsinrony/calculator-typescript.git
```

# Install Dependencies

Navigate to the project folder and install the dependencies using npm:

```bash
cd calculator-typescript
npm install

```

Run the Development Server
Start the development server using the following command:

```bash
npm run dev

```

This will start the app locally, and you can open it in your browser by navigating to http://localhost:3000.

Build for Production
To build the project for production, use the following command:

```bash
npm run build

```

This will create a dist folder with the production-ready files.

# File Structure

calculator-typescript/
├── index.html # Main HTML file
├── package.json # Project configuration and dependencies
├── package-lock.json # Lock file for npm dependencies
├── public/ # Public assets (e.g., images, icons)
├── src/
│ ├── calculator.ts # TypeScript file for the app's logic
│ └── style.css # CSS file for styling the app
└── tsconfig.json # TypeScript configuration
