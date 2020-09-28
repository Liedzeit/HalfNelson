const house = {
  price: 2000000,
  currency: 'USD',
  address: {
    city: 'New York',
    street: 'Main street',
    postal_code: '1234 AB',
    state: {
      name: 'New York',
      abbreviation: 'N.Y.'
    }
  },
  owner: {
    name: "John Doe"
  }
}

let ho = house?.owner?.birthday ?? "1.1.1950"
console.log (ho);