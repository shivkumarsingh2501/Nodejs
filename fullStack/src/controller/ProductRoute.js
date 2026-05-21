const express = require("express")

let productRouter = express.Router()

const product = [
  {
    id: 1,
    product_name: "Girls top",
    category: "Fashion",
    Price: 2000
  }
]


productRouter.route('/')
.get((req, res) => {
    res.send(product)
})


productRouter.route('/details')
.get((req, res) => {
    res.send("Product Details")
})

module.exports = productRouter


