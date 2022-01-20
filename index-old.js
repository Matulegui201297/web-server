const http = require ('http');


http.createServer((req, res) => {

    console.log(req);

    res.writeHead(200, {'Content-Type': 'application/json'});
    
    const user = {
        id: 123,
        name: 'Mateo',
    }
    
    res.write(JSON.stringify(user));
    
    
    /*
    res.setHeader('Content-Dispostion', 'attachment; filename=usuarios.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    res.write('id,name\n123,Mateo\n456,Jorge');
    */
    
    res.end();

}).listen(3000);




