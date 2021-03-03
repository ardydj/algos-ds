/*
LONG/2-DAY PROMPT
restaurantOrders.js
---
PROMPT
---
In this long prompt, you'll have the opportunity to problem-solve with
a hashmap and then implement the sorting algorithm of your choice.
FIRST: Implement the hashmap solution and use JavaScript's native `sort`
method.
THEN: Replace native `sort` implementation(s) with one of the key sort algorithms.
If you have time, implement multiple algos and run time tests, and/or create
a console-based display of the order queue.

Given the array `orders` (which represents the orders that customers have placed
in a restaurant), return the restaurant's order queue.  The order queue is a
table whose row entries denote how many of each food item each table ordered.
The first column is the table number and the remaining columns correspond to
each food item in alphabetical order.
The first row should be a header whose first column is “Table”, followed by the
names of the alphabetized food items. Note that the customer names are not part
of the table. The rows should be sorted in numerically increasing order.
orders[i]=[customerNamei,tableNumberi,foodItemi] where:
  * customerNamei is the name of the customer
  * tableNumberi is the customer's table
  * foodItemi is the item customer orders
---
EXAMPLE
---
Input:
orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
Output:
[["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]]
Explanation:
The order queue looks like:
  Table Beef Burrito Ceviche Fried Chicken Water
  3     0            2       1             0
  5     0            1       0             1
  10    1            0       0             0
Table 3: David orders Ceviche and Fried Chicken, and Rous orders Ceviche.
Table 5: Carla orders Water and Ceviche.
Table 10: Corina orders Beef Burrito.
---
CONSTRAINTS
---
  1) 1 <= orders.length <= 5 * 10^4
  2) orders[i].length == 3
  3) 1 <= customerNamei.length, foodItemi.length <= 20
  4) customerNamei and foodItemi consist of lowercase and uppercase English letters and the space character.
  5) tableNumberi is a valid integer between 1 and 500.
 */

var restaurantOrders = function(orders) {
  let tableOrders = {};
  let foodItems = new Set();
  let orderQueue = [['Table']];
  for (let i = 0; i < orders.length; i++) {
    let table = orders[i][1];
    let foodItem = orders[i][2];

    if (!tableOrders[table]) {
      tableOrders[table] = {foodItem: 1};
    } else if (!tableOrders[table][foodItem]) {
      tableOrders[table][foodItem] = 1;
    } else {
      tableOrders[table][foodItem]++;
    }

    foodItems.add(foodItem);
  }

  // use spread operator to concat sorted foodItems entries to orderQueue from index 1;
  // iterate over each key in tableOrders and create new array for # of orders following the alphabetical order of foodItems in header.

  return orderQueue;
};