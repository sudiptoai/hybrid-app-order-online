# Food Order Online - React Native App

A React Native mobile application for ordering food online from various restaurants.

## Features

- **Restaurant Selection**: Browse through a variety of restaurants with different cuisines
- **Menu Browsing**: View detailed menus with item descriptions and prices
- **Shopping Cart**: Add items to cart, view cart contents, and manage orders
- **Order Placement**: Complete your order with a simple checkout process
- **Multi-Restaurant Support**: Order from Italian, American, Japanese, Mexican, and Indian restaurants

## Tech Stack

- React Native
- Expo
- React Navigation
- JavaScript

## Prerequisites

Before running this app, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional, as it's included in dependencies)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sudiptoai/hybrid-app-order-online.git
cd hybrid-app-order-online
```

2. Install dependencies:
```bash
npm install
```

## Running the App

### Start the development server:
```bash
npm start
```

This will start the Expo development server. You can then:

- Press `a` to run on Android emulator
- Press `i` to run on iOS simulator (Mac only)
- Scan the QR code with Expo Go app on your physical device

### Run on specific platforms:

**Android:**
```bash
npm run android
```

**iOS (Mac only):**
```bash
npm run ios
```

**Web:**
```bash
npm run web
```

## App Structure

```
hybrid-app-order-online/
├── App.js                          # Main app component with navigation
├── src/
│   ├── screens/
│   │   ├── RestaurantListScreen.js # Restaurant selection screen
│   │   ├── RestaurantDetailScreen.js # Menu and item selection
│   │   └── CartScreen.js           # Shopping cart and checkout
│   └── data/
│       └── restaurants.js          # Restaurant and menu data
├── app.json                        # Expo configuration
└── package.json                    # Dependencies
```

## Usage

1. **Browse Restaurants**: Launch the app to see a list of available restaurants
2. **Select Restaurant**: Tap on any restaurant to view its menu
3. **Add Items**: Browse menu items and tap "Add" to add them to your cart
4. **View Cart**: Tap "View Cart" to see your order summary
5. **Place Order**: Review your order and tap "Place Order" to complete

## Available Restaurants

- **Pizza Palace** - Italian cuisine
- **Burger Barn** - American cuisine
- **Sushi Station** - Japanese cuisine
- **Taco Fiesta** - Mexican cuisine
- **Curry House** - Indian cuisine

## Customization

To add more restaurants or modify menu items, edit the file:
```
src/data/restaurants.js
```

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
