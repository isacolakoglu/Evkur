const typeDefs = `
  type Query {
    hello(name: String): String!
    getUrunler: [Urun]
  }
  type Mutation {
    addUrun(
      statu: String
      name: String
      marka: String
      model: String
      image: String
      ): String!
  }

  type Urun {
    statu: String
    name: String
    marka: String
    model: String
    image: String
  }
`;

module.exports = typeDefs;