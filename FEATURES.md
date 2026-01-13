# App Features Documentation

## Food Order Online - React Native App

This document describes the functionality and features of the Food Order Online app.

## Key Features Implemented

### 1. Restaurant Selection
- **Screen**: RestaurantListScreen
- **Functionality**:
  - Displays a list of 5 restaurants with different cuisines
  - Shows restaurant name, cuisine type, rating, delivery time, and description
  - Each restaurant card is clickable to view its menu
  - Clean, card-based UI with shadow effects

### 2. Restaurant Detail & Menu
- **Screen**: RestaurantDetailScreen
- **Functionality**:
  - Shows detailed restaurant information at the top
  - Displays full menu with item names, descriptions, and prices
  - "Add" button for each menu item
  - Shows confirmation dialog when item is added to cart
  - "View Cart" button at the bottom for easy access

### 3. Shopping Cart
- **Screen**: CartScreen
- **Functionality**:
  - Lists all items added to cart with restaurant name
  - Shows individual item prices
  - Calculates and displays total price
  - Remove individual items from cart
  - Clear entire cart option
  - Place order functionality
  - Empty cart state with "Browse Restaurants" button

### 4. Navigation Flow
- Restaurant List → Select Restaurant → Restaurant Detail
- Restaurant Detail → View Cart → Cart Screen
- Cart Screen → Place Order → Returns to Restaurant List
- All screens have proper navigation headers

### 5. Data Structure

#### Restaurants Available:
1. **Pizza Palace** (Italian)
   - Margherita Pizza, Pepperoni Pizza, Vegetarian Pizza, BBQ Chicken Pizza, Caesar Salad

2. **Burger Barn** (American)
   - Classic Burger, Cheese Burger, Bacon Burger, Veggie Burger, French Fries

3. **Sushi Station** (Japanese)
   - California Roll, Spicy Tuna Roll, Salmon Nigiri, Vegetable Tempura, Miso Soup

4. **Taco Fiesta** (Mexican)
   - Beef Tacos, Chicken Tacos, Fish Tacos, Burrito Bowl, Guacamole & Chips

5. **Curry House** (Indian)
   - Butter Chicken, Tikka Masala, Vegetable Curry, Naan Bread, Samosas

### 6. User Experience Features
- **Visual Feedback**: Confirmation dialogs when adding items or placing orders
- **Cart Management**: Easy to add, remove, and view cart items
- **Persistent Cart**: Cart state maintained across navigation
- **Price Display**: Clear pricing on all items and total calculation
- **Empty States**: Helpful messages and actions when cart is empty

### 7. Design Elements
- Color scheme: Red/coral primary color (#FF6B6B), Green for confirm actions (#4CAF50)
- Card-based layout for better visual hierarchy
- Shadow effects for depth
- Emoji icons for visual appeal (⭐ ratings, 🕒 delivery time, 🛒 cart)
- Responsive design suitable for various screen sizes

## Technical Implementation

### State Management
- Cart state managed at the App.js level
- Passed down to screens via props
- Functions for addToCart, removeFromCart, and clearCart

### Navigation
- React Navigation with Native Stack Navigator
- Three main screens with proper routing
- Header customization with brand colors

### Component Structure
- Functional components with React Hooks (useState)
- FlatList for efficient rendering of lists
- TouchableOpacity for interactive elements
- SafeAreaView for proper display on all devices

## Running the App

To see this app in action:

```bash
npm install
npm start
```

Then use Expo Go app on your phone or an emulator to view the app.

## Future Enhancements (Not Implemented)
- User authentication
- Payment integration
- Order history
- Restaurant search and filtering
- Favorites functionality
- Real-time order tracking
- Push notifications
- Reviews and ratings
- Multiple item quantities in cart
