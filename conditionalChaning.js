const house = {
  price: 2000000,
  currency: 'USD',
  address: {
    city: 'Neu-Ulm',
    street: 'Achimstraße',
    postal_code: '1234 AB',
    state: {
      name: 'Xanadu',
      abbreviation: 'X.U.'
    }
  },
  owner: {
    name: "Jane Fonda"
  }
}

let ho = house?.owner?.birthday ?? "1.1.1950"
console.log (ho);
