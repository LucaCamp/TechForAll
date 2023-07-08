const cont = document.getElementById("containerOne");
const loadBtn = document.getElementById("loadmore");

let lastLoaded = 10;
let firstLoaded= 0;




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


        //convert Unixtime in date
            const milliseconds = news.time * 1000 //

            const dateObject = new Date(milliseconds)

            const newsDate = dateObject.toLocaleString() //2019-12-9 10:30:15

            dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday


            //code for show news



        shownews(news, newsDate);



      })


  };loadBtn.addEventListener("click", loadmore);

  function loadmore(){ //====>this function allow to load more news



    lastLoaded = lastLoaded + 10; //increase the variable for load +10 news
    firstLoaded = firstLoaded +10; //increase the variable for load +10 news



    for(let i=firstLoaded; i<lastLoaded && i<500 && i>=firstLoaded; i++){ //for loop allow to add 10 news


      fetch (`https://hacker-news.firebaseio.com/v0/item/${idNews[i]}.json`)
        .then((response)=> response.json())
        .then(data => {

          let news = data; //more 10 news


      //convert Unixtime in date
          const milliseconds = news.time * 1000 //

          const dateObject = new Date(milliseconds)

          const newsDate = dateObject.toLocaleString() //2019-12-9 10:30:15

          dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday


          //code for show more news


          shownews(news, newsDate);
        })

    }}






  });


  function shownews(news,newsDate){

    let hTitle = document.createElement("h3");
    hTitle.classList.add("ps-3", "pe-3","text-body" );
    let divhTitle = document.createElement("div");
    divhTitle.classList.add("mb-2","pt-4","mt-3","divhTitle" );

    cont.appendChild(divhTitle);
    divhTitle.appendChild(hTitle);
    
    hTitle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16">
    <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"/>
  </svg>  ${news.title}` ;
    hTitle.classList.add("hTitle");

    let pDate = document.createElement("p");
    pDate.classList.add("ps-4","pb-2","text-secondary");
    divhTitle.appendChild(pDate)
    pDate.innerHTML =" DATE: "+ newsDate + " ";


    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger","ms-4","mb-3")
    let divButton = document.createElement("div");
    divButton.classList.add( "divButton")
    
    button.innerHTML = "View";
    divButton.appendChild(button);
    divhTitle.appendChild(divButton);

    button.addEventListener("click", (e) => {
      window.open(news.url,"_blank")})
  
    };

    // console.log(news.title + news.url +" "+ newsDate + " ")