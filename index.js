//requiring http and fs modules 
const http=require("http");
const fs=require("fs")
//setting the port to 5000
const PORT=5000;
//storing the current date using new date() method in the variable today
var today=new Date();
//creating new text file and displaying the current time in that
fs.writeFileSync("current-date-time.txt",'The Time is : ' +today)
http.createServer((req,res)=>{
    fs.readFile("current-date-time.txt",(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(PORT,()=>{
    console.log("Server is running on port:",PORT);
})


