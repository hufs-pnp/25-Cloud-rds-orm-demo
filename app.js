// "app.js"
const { customer } = require('./models');

async function addCustomer(){
  const newCustomer = await customer.create({
    id: 4,
    name: 'David',
    email: 'david@example.com'
  });

	console.log('New customer added:', newCustomer.toJSON());
}

addCustomer();