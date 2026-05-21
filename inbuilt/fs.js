let fs = require("fs")

// fs.writeFile("mycode.txt", "This is my data", function(){
//     console.log("Task done")
// })

// fs.appendFile("mycode.txt", " this is new data", function(err){
//     if(err) throw err;
//     else console.log("task done 2")
// })

// it add new content without removing old content
// fs.appendFile(
//     fileName, 
//     data, 
//     callback
// )


// fs.appendFile("myText.txt", "this is new file to tests \n ",
//     function(error){
//         if(error) throw error;
//         else console.log("file append");
//     }
// )


// fs.readFile(
//     "mycode.txt",
//     "utf8",
//     function(error, data){
//         if(error) throw error;
//         else console.log(data)
//     }
// )

// fs.unlink(
//     "mycode.txt",
//     function(){
//         console.log("file deleted")
//     }
// )

// fs.readFileSync("employee.json","utf-8", function(error,data){
//     if(error) throw error;
//     else console.log(data)
// })
// fs.readFile("myText.txt","utf-8", function(error,data){
//     if(error) throw error;
//     else console.log(data)
// })


let data =fs.readFileSync("employee.json", {encoding:"utf-8", flag:'r'})
console.log(data)

let data2 =fs.readFileSync("myText.txt", {encoding:"utf-8", flag:'r'})
console.log(data2)