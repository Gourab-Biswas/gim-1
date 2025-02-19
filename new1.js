const http = require('http');
http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader("content-Type","text/html")
    res.write("Good Afternoon...")
    res.write("<br>")
    res.write('GIM')
    res.write(`
       <form>
        <label>User Name:</label>
        <input type="text">
        <br>
        <br>
        <label>User Password:</label>
        <input type="password" >
        <br>
        <br>
        <label>User Name:</label>
        <input type="text">
        <br>
        <br>
        <label>User Password:</label>
        <input type="password" >
        <br>
        <br>
        <input type="submit">

        


       </form> 
        
        
        
        
        `)


    res.end()

}).listen(2000)