"use strict";

(function () {
  console.log('hooking up form'); //We start by declaring our variable - Hooking up our html to our JS 
  // const keyEl = document.querySelector('[name="key"]')

  var searchEl = document.querySelector('[name="key"]');
  var searchBtn = document.querySelector('[name="search"]');
  var getBtn = document.querySelector('[name="get"]');
  var results = document.querySelector('.results');
  var jasminKey = "box4ih3gXj0zOvhTorY6KFdKWUS260gX";
  var API_URL_BASE = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  var statusLbl = document.querySelector('[name="status"]'); //Setup some functions to respond to what we want them to do 
  // It's going to take an "event" a.k.a parameter 

  function makeGetRequest(event) {
    event.preventDefault();
    var searchValue = searchEl.value;
    console.log('value of the key: ', searchValue); //we have to know what the value of "key" is

    getData(searchValue);
  } //add an event listener to the "search" button


  getBtn.addEventListener('click', makeGetRequest);
  console.log('Button was clicked');

  function handleGetResponse(response) {
    console.log('response', response);
    var news = response.data.docs; //?
    //once in the console this can be found nested within the data - use "example-key-12345" you will find this value to be nested in response > data > data > value 
    //Now I want to display my data on the screen

    for (var i = 0; i < news.length; i++) {
      var newsStory = document.createElement("div");
      var newsData = news[i].headline.main; //from the API these are the keywords needed- headling and main info

      newsStory.appendChild(newsData);
      document.body.appendChild(newsStory);
      console.log("news stories are on the screen");
    }
  }

  function getData(key) {
    axios.get(API_URL_BASE + "?q=" + key + "&api-key=" + jasminKey).then(handleGetResponse);
  }
})(); // (function(){
// console.log('hooking up form')
// //We start by declaring our variable - Hooking up our html to our JS 
// const keyEl = document.querySelector('[name="key"]')
// const valueEl = document.querySelector('[name="value"]')
// const getBtn = document.querySelector('[name="get"]')
// const postBtn = document.querySelector('[name="post"]')
// const API_URL_BASE = ('http://circuslabs.net:3000/data/')
// const statusLbl = document.querySelector('[name="status"]')
// //Setup some functions to respond to what we want them to do 
// // It's going to take an "event" a.k.a parameter 
// function makeGetRequest(event){
// event.preventDefault() 
// const keyValue = keyEl.value
// console.log('value of the key: ', keyValue) //we have to know what the value of "key" is
// getData(keyValue)
// }
// //add an event listener to the "get" button
// getBtn.addEventListener('click', makeGetRequest)
// postBtn.addEventListener('click', makePostRequest)
// function handleGetResponse(response){
// console.log('response', response)
// const value = response.data.data.value //once in the console this can be found nested within the data - use "example-key-12345" you will find this value to be nested in response > data > data > value 
// valueEl.value = value 
// }
// function getData(keyValue) {
// console.log('fetching with GET: ' + keyValue)
// axios.get(API_URL_BASE + keyValue)
// .then(handleGetResponse)
// }
// function makePostRequest(event){
// event.preventDefault()
// const keyValue = keyEl.value
// const valueValue = valueEl.value
// console.log('goint to post: ', valueValue, keyValue)
// postData(keyValue, valueValue)	
// }
// function handlePostResponse(response){
// console.log('response', response)
// statusLbl.textContent = "Status" + response.data.message //ths is the message from the server
// setTimeout(function(){
// statusLbl.textContent = ""
// }, 2500) //putting on a timer for the message to hide after the post button is hit
// }
// function postData(keyValue, valueValue){
// console.log('sending a post', keyValue, valueValue)
// const payLoad = {  
// type: 'string',
// value: valueValue
// }
// axios.post(API_URL_BASE + keyValue, payLoad)
// .then(handlePostResponse)
// }
// })()
//# sourceMappingURL=main.js.map
