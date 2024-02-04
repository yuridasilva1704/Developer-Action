const epress = require('express')

const app = express();

app.get('/',(request,response)=> {
    return response.json ({message: 'Servidor is up' })
})

app.post('/teste'),(request,response)=>{
    const{name, data} = request.body;

    return response.json({name,date});

}

app.listen(3333)