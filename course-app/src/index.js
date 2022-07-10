import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./components/store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './index.css'
import { BrowserRouter } from "react-router-dom";

//const container = ;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// var express = require('express')
//     var bodyParser= require('body-parser')
//     var multer=require('multer')
//     var cookieParser=require('cookie-parser')

//     var upload = multer()
//     var app=express()

//     app.use(cookieParser)
//     app.use(bodyParser.json())
//     app.use(bodyParser.urlencoded({extended: true}))
//     app.use(upload.array())

//     var courses = require('./api.js')
    
//     app.use('/courses',courses)
//     app.use('/',function(_req,res){
//         res.send("this will not call API")})
//     app.listen(5000);