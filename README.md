# SOP Generator

## Project Overview

The SOP Generator is an application designed to facilitate the creation of personalized Statements of Purpose (SOPs). Users can respond to specific questions and receive customized SOPs delivered to their email addresses. The application features a user-friendly interface with a confirmation modal upon form submission, providing a seamless experience.

## Running the Application Locally

To run the app locally, follow these steps:

1. Create a `.env` file in the `sop_generator_server` directory.
2. Add the following environment variables to the `.env` file:
   - `OPEN_AI_KEY=[Open AI Secret Key]`
   - `NODE_MAILER_USER=[User Gmail Account]`
   - `NODE_MAILER_APP_PASSWORD=[App Password]`
3. Run `npm i` inside the `sop_generator_server` directory.
4. Start the server with `nodemon index.js`. If you don't have installed `nodemon` you can run `npm install -g nodemon` to install it globally.
5. Open another CLI, navigate to the `sop_generator_client` directory, and run `npm i` to install.
6. Now run `code .` command to open the code in Visual Studio Code, and replace the api domain with `http://localhost:3000` to run app in local machine.
7. Then Start the client server with `npm run dev` command.

## Technology Stack

### Frontend:

- React.js
- React Router
- Tailwind CSS
- Daisy UI

### Backend:

- Node.js
- Express.js

### Libraries:

- Axios
- React Hot Toast
- Node Mailer
- Open AI API
- Cors
- Dotenv

### Deployment:

- Client-side hosted on Netlify
- Server-side hosted on Render

This setup ensures a structured and organized project, making it easy for contributors to understand and contribute to the SOP Generator.
