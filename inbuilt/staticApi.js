let fs = require('fs')
let http = require('http');


let server = http.createServer(function(req, res){
    //read file with fs
    fs.readFile('employee.json', 'utf-8', function(error,data){
        if(error) throw error;
        // return data of file 
        res.write(data);
        res.end();
    })
})

server.listen(6300)