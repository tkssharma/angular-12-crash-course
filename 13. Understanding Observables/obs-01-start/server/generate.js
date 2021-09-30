const faker = require('faker');


const database = {
  products: []
}

for (let i = 0; i < 100; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: 1
  })
}
console.log(JSON.stringify(database));
