const express = require("express")

let categoryRouter = express.Router()

const category = [
  {
    id: 1,
    category: "Fashion",
    thumb: "https://i.ibb.co/S6VP0Fn/cloths.jpg"
  },
  {
    id: 2,
    category: "Electronics",
    thumb: "https://i.ibb.co/pWbNtdk/appliances.jpg"
  }
]


categoryRouter.route('/')
.get((req, res) => {
    res.send(category)
})


categoryRouter.route('/details')
.get((req, res) => {
    res.send("Category Details")
})

module.exports = categoryRouter