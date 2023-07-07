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

    let pTitle = document.createElement("p");
    pTitle.classList.add("ps-3", "pe-3","text-body" );
    let divpTitle = document.createElement("div");
    divpTitle.classList.add("border", "mb-2", );

    cont.appendChild(divpTitle);
    divpTitle.appendChild(pTitle);
    pTitle.innerHTML = "- " + news.title ;
    pTitle.classList.add("pTitle");

    let pDate = document.createElement("p");
    pDate.classList.add("ps-4","pb-2","text-secondary");
    divpTitle.appendChild(pDate)
    pDate.innerHTML =" DATE: "+ newsDate + " ";


    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger","ms-2","mb-3")
    let pButton = document.createElement("p");
    button.innerHTML = "View";
    pButton.appendChild(button);
    divpTitle.appendChild(pButton);

    button.addEventListener("click", (e) => {
      window.open(news.url,"_blank")})
  
    };

    // console.log(news.title + news.url +" "+ newsDate + " ")