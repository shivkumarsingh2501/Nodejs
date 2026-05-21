const http = require("http")

// request => what we send to server = params, queryParams , body
// response =>  what server sends in return 

let server = http.createServer(function(request, response){
    response.write('<h1>This is node.js ser   ver  Code code app</h1>')
    response.end()


})
server.listen(7600, () => {
    console.log("Server running on port 7600")
})