# ember-exercise

A simple web shop application using Ember.js.

## Task Description

You are the lead FE programmer for a small web shop. You are required to make a simple
page where the user can add products to a cart, and the total of the cart is updated
in real time.

#### API

You will have an API endpoint that returns products with the following structure (assume
your preferred seralization format)

| id      |  name        | price  |
| ------- | :----------: | :----: |
| GR1     |  Green tea   | £3.11  |
| SR1     | Strawberries | £5.00  |
| CF1     |    Coffee    | £11.23 |

There will be an API endpoint to actually do the checkout, charge customer etc, but it won't 
be used here.

## Special conditions:

- The CEO is a big fan of buy-one-get-one-free offers and of green tea. He wants us to add a
rule to do this.
- The COO, though, likes low prices and wants people buying strawberries to get a price
discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50
- The CTO is a coffee addict. If you buy 3 or more coffees, the price of all coffees should drop
to two thirds of the original price.

We can assume that discount do not change very often so they can be hardcoded in the
application, for display purpose.

Our check-out can scan items in any order, and because the C\*Os change their minds, it needs 
to be flexible regarding our pricing rules.

## Deliverables:

- A shop route where the user can view all available items and add to basket (a quantity selector would be nice).
- A checkout route where the user can view all items in his basket with:
  1. The quantity of each item and the original prices
  2. All the discounts currently applied
  3. The total price of the basket after discounts applied
- Some navigation implementation between the routes.
- A service or similar that is responsible of calculating and persisting total amount.

The application must be demoable without an actual backend (use some approriate
client-side API server for demoing)

### Run the application

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-exercise`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Built with

* [Ember](https://emberjs.com/) -JS Front-End Framework


## Author

Dorothee Viard - [Github](https://github.com/Do0oV)
