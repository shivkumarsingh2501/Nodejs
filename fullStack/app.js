const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

const port = process.env.PORT || 6700
let morgan = require('morgan')
let fs = require('fs')

//middleware
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}))

// static

app.use(express.static(__dirname+'/public'))


//html file path
app.set('views','./src/views')

// view engine
app.set('view engine','ejs')
// import routers
let categoryRouter = require('./src/controller/CategoryRouter')

let productRouter = require('./src/controller/ProductRoute')


// default route
app.get('/', (req, res) => {
    res.render('index')
})


// use routers
app.use('/category', categoryRouter)

app.use('/product', productRouter)


// server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})