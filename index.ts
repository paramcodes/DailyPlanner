import express from 'express';

const app = express();
const port = 3000;

const todos = [];

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Hey there i still works check your other routes")
})

app.get('/:name/:date',(req,res)=>{
    // res.send("Hii");
    res.send(req.params.date);
})

app.get('/todo',(req,res)=>{
    res.send(renderPage)
})

const renderPage = ()=>{
    return `
    <form type='/submit' method='POST'>
    <input type="text" name="todo" placeholder"Write your todo">
    <button type="submit">Submit</button>
    </form>
    ${todos.map(data=>`<li>${data}</li>`)
    }
    `
}

app.post('/submit',(req,res)=>{
    // res.send(req.body.todo);
    const todo = req.body.todo;
    if(todo)todos.push(todo);
    res.send(renderPage());
})

app.post('/',(req,res)=>{
    res.send("Post Request Received");
})

app.put('/',(req,res)=>{
    res.send("PUT");
})

app.listen(port,()=>{
    console.log(`App is listening on PORT : ${port}`);
})