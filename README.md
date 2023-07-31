# Grandeur-Restarant Website React UI/UX Website

This is an opensource react ui template for creating high end business websites with various sections such as navbar, header, about, profiles, contact, gallery & menu.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [BEM Class Naming](#bem-class-naming)
- [Additional Best Practices](#additional-best-practices)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Grandeur-restaurant UI/UX Website is a modern and responsive web application designed to showcase best practices in front-end development, particularly focusing on React, folder organization, BEM class naming, fundamental CSS properties such as flex & grid, pleasant animations, complex gradients and other industry-proven techniques to create maintainable and user-friendly UI/UX.

## Features

- Modern UI design with a focus on user experience.
- Responsiveness for a seamless experience across various devices.
- Fast and efficient, thanks to React's virtual DOM.
- Best folder structure for better code organization.
- BEM class naming convention for consistent and scalable CSS.
- Use of state management library (e.g., Redux) for managing complex application states.
- Code splitting and lazy loading for improved performance.
- CSS Flex & Grid, Gradients, Animations
- Webpack for bundling and optimizing the production build.
- ESLint and Prettier for code consistency and formatting.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/sanyam2301/awesome-react-website.git`
2. Install the dependencies: `cd awesome-react-website && npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to `http://localhost:3000` to view the website.

## Folder Structure

The project follows a well-organized folder structure to keep the codebase clean and manageable:

- `public`: Contains the public assets such as HTML template, favicon, etc.
- `src`: Contains the application source code.
  - `components`: Reusable React components used across the application.
  - `containers`: Top-level components that serve as pages or views.
  - `App.js`: The root component of the application.
  - `index.js`: Entry point of the application.

## BEM Class Naming

The project follows the BEM (Block-Element-Modifier) naming convention for CSS classes to ensure a clear and scalable structure:

```css
/* Block component */
.button {
}

/* Element that depends upon the block */
.button__icon {
}

/* Modifier that changes the style of the block */
.button--primary {
}
.button--disabled {
}
```

### Additional Best Practices

- Code is written in ES6+ and follows the latest JavaScript standards.
- Component-based architecture for reusability and maintainability.
- React hooks are used for state management and lifecycle handling.
- CSS is organized using a modular approach to avoid global styles.
- Accessibility (a11y) best practices are followed for better usability.
- Cross-browser compatibility is ensured for major modern browsers.

## Contributing

Contributions to this project are welcome! If you find any issues or want to suggest improvements, please open an issue or submit a pull request. Ensure that your code follows the established coding style and best practices.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal and commercial projects.

---

Thank you for checking out the Awesome React UI/UX Website project! We hope this serves as a valuable resource for understanding best practices in front-end development using React. Happy coding! 🚀
