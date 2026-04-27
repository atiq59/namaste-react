# Namaste React 🚀

## Description

This is a learning project for React, built as part of the "Namaste React" tutorial series. It demonstrates building a food delivery application with modern React features, including routing, state management, and API integration.

## Features

- **Restaurant Listing**: Browse restaurants with search and filter functionality
- **Restaurant Details**: View detailed menus for each restaurant
- **User Context**: Manage user state across the application
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Routing**: Client-side routing with React Router
- **Online Status**: Check user's online/offline status
- **Lazy Loading**: Optimized loading with React.lazy for better performance

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Parcel
- **Testing**: Jest

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/atiq59/namaste-react.git
   cd namaste-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:1234`

## Usage

- Navigate through the app using the header menu
- Search for restaurants by name
- Filter restaurants by rating
- Click on a restaurant to view its menu
- Use the user input to update the username (context demo)

## Scripts

- `npm start`: Start the development server with hot reloading
- `npm run build`: Build the project for production
- `npm test`: Run tests with Jest

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Body.js            # Main restaurant listing
│   ├── RestaurantCard.js  # Individual restaurant card
│   ├── RestaurantMenu.js  # Restaurant menu details
│   ├── Shimmer.js         # Loading skeleton
│   ├── AppProvider.js     # Context provider
│   └── ...
├── utils/
│   ├── constant.js        # App constants
│   ├── UserContext.js     # User context
│   ├── useRestraunt.js    # Custom hook for restaurant data
│   └── ...
├── App.js                 # Main app component
└── index.html             # Entry HTML file
```

## Contributing

This is a learning project, but feel free to fork and experiment!

## License

ISC License - see the package.json for details.

## Author

Atiq Shahab

## Repository

[GitHub Repository](https://github.com/atiq59/namaste-react)
