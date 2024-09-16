# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Shopping Cart Application with Discount and Currency Conversion

This is a simple React-based shopping cart application that allows users to:
- Add and remove items from the cart.
- View the current items in the cart.
- Calculate the total price in different currencies (USD, EUR, GBP).
- Apply discount codes for reduced prices.
- Checkout with the final price.

## Features

- **Product Management**: Add, remove, and display products.
- **Currency Conversion**: Convert prices dynamically between USD, EUR, and GBP.
- **Discount Codes**: Apply discount codes for specific percentage discounts.
- **Responsive Design**: Styled using Tailwind CSS for a clean and responsive UI.

## Available Discount Codes

| Discount Code | Discount Percentage |
|---------------|---------------------|
| DISCOUNT10    | 10%                 |
| DISCOUNT20    | 20%                 |
| SUMMER15      | 15%                 |
| WINTER5       | 5%                  |
| SALE25        | 25%                 |

## Getting Started

To run this project on your local machine, follow the instructions below.

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or later)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/shopping-cart-app.git
