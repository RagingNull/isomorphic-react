import App from '../src/App';
const express = require("express");
const fs = require("fs"); 
const path = require("path");

const React = require('React');

const { renderToString  } = require('react-dom/server')


const app = express();

const test = (data) => {
    console.log('testtes');
    return data.replace('<div id="root"></div>', `<div>${renderToString(<App />)}</div>`)
}

app.use('^/$',(req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8' ,(err, data) => {
        if(err){
            return res.status(500).send('ERROR');
        }
        return res.send(test(data));
    })
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(3000, ()=>{
    console.log("listening at 3000");
})