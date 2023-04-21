const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000 ;

const category = require('./data/category.json');
const news = require('./data/news.json');

app.use(cors());
app.get('/' , (req , res)=>{
    res.send('Dragon is running')
});

app.get('/category' , (req , res )=>{
    res.send(category);
});

app.get('/news' , (req , res) =>{
    res.send(news);
});

app.get('/news/:id' , (req , res)=>{
    const id = req.params.id;
    const selectId = news.find(n=>n._id === id);
    res.send(selectId);
});

app.get('/category/:id' , (req , res)=>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(news);
    }else{
        const categoryNews = news.filter( n => parseInt(n.category_id) === id);
    res.send(categoryNews);
    }
    
} )

app.listen( port , ()=>{
    console.log(`Dragon API is running on port ${port}`);
});