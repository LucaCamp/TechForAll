
// CONTAINER NEWS
const cont = document.getElementById("containerOne");

export function showNews(news,newsDate){

  // TITLE NEWS
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
  
  // DATE 
  let pDate = document.createElement("p");
  pDate.classList.add("ps-4","pb-2","text-secondary");
  divhTitle.appendChild(pDate)
  pDate.innerHTML =" DATE: "+ newsDate + " ";



  //create view button

  let viewBtn = document.createElement("button");
  viewBtn.classList.add("btn", "btn-danger","ms-4","mb-3")
  let divButton = document.createElement("div");
  divButton.classList.add( "divButton")
  
  viewBtn.innerHTML = "View";
  divButton.appendChild(viewBtn);
  
 


  //create copy button

  let copyBtn = document.createElement("button");
  copyBtn.classList.add("btn","btn-floating", "btn-secondary","ms-4","mb-3","me-4")

  
  copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>`;
  divButton.appendChild(copyBtn);
  
  divhTitle.appendChild(divButton);

  



  //event listener

  viewBtn.addEventListener("click", () => {
    window.open(news.url,"_blank")}); //open link in new tab
    
    
    copyBtn.addEventListener("click", ()=> {
      
      console.log("copied "+ news.url);

      navigator.clipboard.writeText(news.url);


      // popover link copied
      let linkCopied = document.createElement("div");
      linkCopied.innerHTML ="link copied!";
      divButton.appendChild(linkCopied);
      linkCopied.classList.add("linkCopied");
      setTimeout(function () {
        linkCopied.remove();
      },1000);
    });
  };

  

  // console.log(news.title + news.url +" "+ newsDate + " ")