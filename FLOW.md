# App Flow Diagram

## Food Order Online - Navigation & User Flow

```
┌─────────────────────────────────────────┐
│                                         │
│     RESTAURANT LIST SCREEN              │
│                                         │
│  ┌───────────────────────────────┐     │
│  │  🍕 Pizza Palace              │     │
│  │  Italian • ⭐ 4.5             │     │
│  │  Best pizzas in town...       │     │
│  │  🕒 30-40 min                 │     │
│  └───────────────────────────────┘     │
│                                         │
│  ┌───────────────────────────────┐     │
│  │  🍔 Burger Barn               │     │
│  │  American • ⭐ 4.3            │     │
│  │  Juicy burgers made...        │     │
│  │  🕒 25-35 min                 │     │
│  └───────────────────────────────┘     │
│                                         │
│  [3 more restaurants...]                │
│                                         │
└─────────────────────────────────────────┘
                  │
                  │ (tap restaurant)
                  ▼
┌─────────────────────────────────────────┐
│                                         │
│   RESTAURANT DETAIL SCREEN              │
│                                         │
│  Pizza Palace                           │
│  Italian • ⭐ 4.5                       │
│  Best pizzas in town...                 │
│  🕒 30-40 min                           │
│                                         │
│  ═══ Menu ═══                           │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ Margherita Pizza      [Add] │       │
│  │ Classic tomato and...       │       │
│  │ $12.99                      │       │
│  └─────────────────────────────┘       │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ Pepperoni Pizza       [Add] │       │
│  │ Loaded with pepperoni...    │       │
│  │ $14.99                      │       │
│  └─────────────────────────────┘       │
│                                         │
│  [3 more menu items...]                 │
│                                         │
│  ┌─────────────────────────────┐       │
│  │       View Cart              │       │
│  └─────────────────────────────┘       │
│                                         │
└─────────────────────────────────────────┘
                  │
                  │ (tap View Cart or Add)
                  ▼
┌─────────────────────────────────────────┐
│                                         │
│        CART SCREEN                      │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ Margherita Pizza      [✕]   │       │
│  │ Pizza Palace                │       │
│  │ $12.99                      │       │
│  └─────────────────────────────┘       │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ Caesar Salad          [✕]   │       │
│  │ Pizza Palace                │       │
│  │ $8.99                       │       │
│  └─────────────────────────────┘       │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ Total:            $21.98     │       │
│  │                              │       │
│  │ [Clear Cart]                 │       │
│  └─────────────────────────────┘       │
│                                         │
│  ┌─────────────────────────────┐       │
│  │  Place Order - $21.98        │       │
│  └─────────────────────────────┘       │
│                                         │
└─────────────────────────────────────────┘
                  │
                  │ (tap Place Order)
                  ▼
┌─────────────────────────────────────────┐
│                                         │
│     Order Placed! ✅                    │
│                                         │
│  Your order of $21.98 has been          │
│  placed successfully!                   │
│                                         │
│            [OK]                         │
│                                         │
└─────────────────────────────────────────┘
                  │
                  │ (returns to)
                  ▼
        RESTAURANT LIST SCREEN
```

## User Actions

1. **Browse Restaurants**
   - View list of available restaurants
   - See ratings, cuisine type, delivery time
   - Tap any restaurant to view menu

2. **View Menu & Add Items**
   - See restaurant details
   - Browse menu items with descriptions
   - Tap "Add" to add items to cart
   - Get confirmation dialog
   - Continue shopping or view cart

3. **Manage Cart**
   - View all added items
   - See items grouped by restaurant
   - Remove individual items
   - Clear entire cart
   - See running total

4. **Place Order**
   - Review final order
   - Tap "Place Order"
   - Receive confirmation
   - Return to restaurant list

## Empty Cart State

If cart is empty:

```
┌─────────────────────────────────────────┐
│                                         │
│              🛒                         │
│                                         │
│        Your cart is empty               │
│                                         │
│   Add items from restaurants            │
│   to get started                        │
│                                         │
│  ┌─────────────────────────────┐       │
│  │   Browse Restaurants         │       │
│  └─────────────────────────────┘       │
│                                         │
└─────────────────────────────────────────┘
```

## Key Features in UI

- **Color Coding**
  - Red/Coral (#FF6B6B) - Primary actions, prices
  - Green (#4CAF50) - Confirm actions (View Cart, Place Order)
  - Red (#f44336) - Destructive actions (Remove, Clear)

- **Visual Elements**
  - Card-based layouts with shadows
  - Emoji icons for visual appeal
  - Clear typography hierarchy
  - Touch feedback on interactive elements

- **Responsive Design**
  - SafeAreaView for all devices
  - Scrollable lists for content
  - Fixed bottom buttons for primary actions
