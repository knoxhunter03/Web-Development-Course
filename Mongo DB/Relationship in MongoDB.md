# Relations in  MongoDB
## Embedded/Nested Document inside a Document
## Code :

```mongodb

// CRUD Application with Mongo DB Shell
sshopDB> db.products.insert({
...     _id: 3,
...     name: "Rubber",
...     price: 1.30,
...     stock: 43,
...     reviews: [
...         {
...             authorName: "Otis",
...             rating: 5,
...             review: "Best rubber ever!"
...         },
...         {
...             authorName: "Maeve",
...             rating: 5,
...             review: "Awesome rubber"
...         }
...     ]
... })
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{ acknowledged: true, insertedIds: { '0': 3 } }
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 12 },
  {
    _id: 3,
    name: 'Rubber',
    price: 1.3,
    stock: 43,
    reviews: [
      { authorName: 'Otis', rating: 5, review: 'Best rubber ever!' },
      { authorName: 'Maeve', rating: 5, review: 'Awesome rubber' }
    ]
  }
]

shopDB> db.products.updateOne({_id: 2}, {$set: {reviews: [{authorName: "Ruby", rating: 5, review: "Best pencil ever!"}]}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  {
    _id: 2,
    name: 'Pencil',
    price: 0.8,
    stock: 12,
    reviews: [ { authorName: 'Ruby', rating: 5, review: 'Best pencil ever!' } ]
  },
  {
    _id: 3,
    name: 'Rubber',
    price: 1.3,
    stock: 43,
    reviews: [
      { authorName: 'Otis', rating: 5, review: 'Best rubber ever!' },
      { authorName: 'Maeve', rating: 5, review: 'Awesome rubber' }
    ]
  }
]
shopDB>
```