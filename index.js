
const http = require('http');
const fs = require('fs');
const path = require('path');

//routes
const landingRoute = '/'
const homepageRoute = '/index.html'
const aboutpageRoute = '/about.html'
const contactpageRoute = '/contact.html'


const server = http.createServer((request,response)=>{
    switch(request.url){
        case landingRoute : {
            let filepath = path.join(__dirname, 'public', 'index.html')
            fs.readFile(filepath, 'utf8', (error, data)=>{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.end(data);
        
            })

        };
        break;
        case homepageRoute: {
            let filepath = path.join(__dirname, 'public', 'index.html');
            fs.readFile(filepath, 'utf8', (error, data)=>{
                response.writeHead(200, {'Content-Type':'text/html'})
                response.end(data);
        
            })
        };
        break;
        case aboutpageRoute: {
            let filepath = path.join(__dirname, 'public', 'about.html')
            fs.readFile(filepath, 'utf8', (error, data)=>{
                response.writeHead(200, {'Content-Type':'text/html'})
                response.end(data)

            })
        };
        break;
        case contactpageRoute:{
            let filepath = path.join(__dirname, 'public', 'contact.html')
            fs.readFile(filepath, 'utf8', (error, data)=>{
                response.writeHead(200, {'Content-Type':'text/html'})
                response.end(data)
        
            })
        };
        break;
        default :{
            response.writeHead(200, {"Content-Type": 'text/html'})
            response.end("NOT FOUND")
        };
        break;

    }

    
})

const port = 5000;

server.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})