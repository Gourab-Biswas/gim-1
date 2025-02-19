// console.log("abc")
// console.log(process.argv[1])


const http = require('http')
const PORT = 2001
http.createServer((req,res)=>{
    res.write("this is server 2")
    res.end()

})
// .listen(`${PORT}`)

.listen((err)=>{
    if(!err) console.log(`server is runnig in ${PORT}`)
})