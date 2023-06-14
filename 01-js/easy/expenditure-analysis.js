/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  categoryTotals = []
  transactions.map((transaction, index) => {
    const { category, price } = transaction
    const categoryExist = categoryTotals.some((item) => item.category === category);
    if (categoryExist) {
      const existingItem = categoryTotals.find((item) => item.category === category);
      existingItem.totalSpent += price
    }
    else {
      categoryTotals.push({
        category:transaction.category,
        totalSpent:price
      })
    }

  })
  console.log(categoryTotals)
  return categoryTotals;

}

let transactions = [
  {
    itemName: "Dairy Milk",
    category: "Choclate",
    price: 100,
    timestamp: Date.now()
  },
  {
    itemName: "Fresh Milk",
    category: "Milk",
    price: 60,
    timestamp: Date.now()
  },
  {
    itemName: "Cow Milk",
    category: "Milk",
    price: 60,
    timestamp: Date.now()
  },
  {
    itemName: "Laptpop",
    category: "Electronics",
    price: 50000,
    timestamp: Date.now()
  },
  {
    itemName: "Samsung s23",
    category: "Electronics",
    price: 90000,
    timestamp: Date.now()
  },
]

calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;
