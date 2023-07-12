import { showNews } from '../js/news.js';

//BUTTON LOADMORE
const loadBtn = document.getElementById("loadmore");

//


//convert Unixtime in date

function convertDate (unixTime) {
  
  const milliseconds = unixTime * 1000 //

  const dateObject = new Date(milliseconds)

  const newsDate = dateObject.toLocaleString() //2019-12-9 10:30:15

  dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday

  return newsDate;


}

//FETCH API
export
function fetchNews(){

  fetch ("https://hacker-news.firebaseio.com/v0/newstories.json",) //API to retrieve the list of latest news IDs
  .then((response)=> response.json())
  .then(data => {
  
    let idNews = data; //list of IDs // console.log(idNews)
  
  
  
    for(let i=0; i<10; i++){   //view first 10 news
      // console.log(idNews[i]);
  
      fetch (`https://hacker-news.firebaseio.com/v0/item/${idNews[i]}.json`)
        .then((response)=> response.json())
        .then(data => {
  
          let news = data; //more 10 news
  

              

              const newsDate = convertDate(news.time);
            
              
              
  
  
              //code for show news
  
  
  
          showNews(news, newsDate);
  
  
  
        })
  
  
    };
    
    
    loadBtn.addEventListener("click", loadmore);
    
    let count = 0;
    function loadmore(){ //====>this function allow to load more news
  
     
      
      count += 10; //increase the variable for load +10 news
      
  
  
  
      for(let i=count ; i<count+10 && i<500 ; i++){ //for loop allow to add 10 news
        //  console.log(i);
        
        fetch (`https://hacker-news.firebaseio.com/v0/item/${idNews[i]}.json`)
          .then((response)=> response.json())
          .then(data => {
  
            let news = data; //more 10 news
  
  
           //convert Unixtime in date
            const newsDate = convertDate(news.time);
  
            //code for show more news
  
  
            showNews(news, newsDate);
          })
  
      }}
  
  
  
    }); }
  