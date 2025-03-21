# React + Vite

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/) (optional)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

Open your terminal and run the following command to clone the repository:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the URL of your repository.

### 2. Navigate to the Project Directory

Change into the project directory:

```bash
cd <project-directory>
```

Replace `<project-directory>` with the name of your project folder.

### 3. Install Dependencies

Run the following command to install the project dependencies:

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 4. Start the Development Server

To start the development server, run:

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

This will start the Vite development server, and you should see output indicating that the server is running.

### 5. Open Your Browser

Open your web browser and navigate to `http://localhost:3000` (or the port specified in the terminal) to view your application.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev` or `yarn dev`: Starts the development server.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm run serve` or `yarn serve`: Serves the production build locally.

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
