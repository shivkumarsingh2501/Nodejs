// // let express = require("express")

// // let app = express()
// // let dotenv =require('dotenv')
// // dotenv.config()
// // let port =process.env.PORT || 6700


// // const category = [
// //   {
// //     "id": 1,
// //     "category": "Fashion",
// //     "thumb": "https://i.ibb.co/S6VP0Fn/cloths.jpg"
// //   },
// //   {
// //     "id": 2,
// //     "category": "Electronics",
// //     "thumb": "https://i.ibb.co/pWbNtdk/appliances.jpg"
// //   },
// //   {
// //     "id": 3,
// //     "category": "Essentials",
// //     "thumb": "https://i.ibb.co/0cw34xv/essentials.jpg"
// //   },
// //   {
// //     "id": 4,
// //     "category": "Footwear",
// //     "thumb": "https://i.ibb.co/r35Zq8S/footware.jpg"
// //   }
// // ]

// // const product = [
// //   {
// //     "id": 1,
// //     "product_name": "Girls top",
// //     "category": "Fashion",
// //     "category_id": 1,
// //     "Price": 2000,
// //     "Size": "Small",
// //     "Image": "https://i.ibb.co/fHj5Tpc/download.jpg",
// //     "Color": "Maroon",
// //     "Brand": "Gucci"
// //   },
// //   {
// //     "id": 2,
// //     "product_name": "Girls top",
// //     "category": "Fashion",
// //     "category_id": 1,
// //     "Price": 1500,
// //     "Size": "Medium",
// //     "Image": "https://i.ibb.co/tsXyK5Y/images.jpg",
// //     "Color": "Blue",
// //     "Brand": "Westside"
// //   },
// //   {
// //     "id": 3,
// //     "product_name": "Girls top",
// //     "category": "Fashion",
// //     "category_id": 1,
// //     "Price": 2000,
// //     "Size": "Large",
// //     "Image": "https://i.ibb.co/example/image3.jpg",
// //     "Color": "Black",
// //     "Brand": "Zara"
// //   }
// // ]
// // // default
// // app.get('/', (req,res) => {
// //     res.send("Hi form express")
// // })
// // app.get('/category',(req, res)=>{
// //     res.send(category)
// // })
// // app.get('/details', (req,res) =>{
// //     res.send('category details')
// // })

// // app.get('/product', (req,res)=>{
// //     res.send(product)
// // })


// // app.get('/details', (req,res) =>{
// //     res.send('Product details')
// // })
// // app.listen(port, (err) =>{
// //     if(err) throw err;
// //     else{
// //         console.log(`server is running the port ${port}`)
// //     }
// // })






// const express = require("express")
// const dotenv = require("dotenv")

// dotenv.config()

// const app = express()

// const port = process.env.PORT || 6700

// let categoryRouter = express.Router()
// let productRouter = express.Router()

// const category = [
//   {
//     id: 1,
//     category: "Fashion",
//     thumb: "https://i.ibb.co/S6VP0Fn/cloths.jpg"
//   },
//   {
//     id: 2,
//     category: "Electronics",
//     thumb: "https://i.ibb.co/pWbNtdk/appliances.jpg"
//   }
// ]

// const product = [
//   {
//     id: 1,
//     product_name: "Girls top",
//     category: "Fashion",
//     Price: 2000
//   }
// ]

// // default route
// app.get('/', (req, res) => {
//     res.send("Hi from express")
// })


// // category routes
// categoryRouter.route('/')
// .get((req, res) => {
//     res.send(category)
// })

// categoryRouter.route('/details')
// .get((req, res) => {
//     res.send("Category Details")
// })


// // product routes
// productRouter.route('/')
// .get((req, res) => {
//     res.send(product)
// })

// productRouter.route('/details')
// .get((req, res) => {
//     res.send("Product details")
// })


// // use routers
// app.use('/product', productRouter)

// app.use('/category', categoryRouter)


// // details route
// app.get('/details', (req, res) => {
//     res.send("Main Product details")
// })


// // server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })


