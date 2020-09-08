

/*================== Side bar ===================== */
const shows = document.querySelectorAll(".show-menu");

if (shows) {
  for (let show of shows) {
    show.addEventListener("click", (q) => {
      q.preventDefault();
      const p = show.parentElement;
      const ul = p.querySelector("ul");
      if (ul.style.display === "none") {
        ul.style.display = "block";
        ul.style.animation = `bounceUp .5s both`;
      }
    });
  }

  const backs = document.querySelectorAll(".back");
  for (let back of backs) {
    back.addEventListener("click", (e) => {
      e.preventDefault();
      const p = back.parentElement;
      p.style.display = "none";
      p.style.animation = "";
    });
  }
}

//start login page js
const loginPage = document.getElementById("login-page");
if (loginPage) {
  const loginBtn = document.querySelector(".login-button");
  const loginForm = document.querySelector(".login-form");
  const before = document.getElementById("before");
  const closeBtn = document.querySelector(".close-btn");
  loginBtn.addEventListener("click", () => {
    loginForm.classList.add("form-scale-in");
    loginForm.classList.remove("form-scale-out");
    loginBtn.classList.add("login-btn-animation1");
    loginBtn.classList.remove("login-btn-animation2");
    setTimeout(() => {
      before.style.display = "block";
    }, 500);
  });
  closeBtn.addEventListener("click", () => {
    before.style.display = "none";
    loginForm.classList.add("form-scale-out");
    loginForm.classList.remove("form-scale-in");
    loginBtn.classList.add("login-btn-animation2");
    loginBtn.classList.remove("login-btn-animation1");
  });
}

//end login page

const btnControlSide = document.getElementById("open-side-bar");

if (btnControlSide) {
  isLock = false;
  const sideBar = document.getElementById("side-bar");
  const main = document.querySelector(".page-container");
  const tables = document.querySelectorAll(".table-content table ");
  const panels = document.querySelectorAll(".tab-panel-1 .col-12 > div");

  btnControlSide.addEventListener("click", () => {
    if (isLock === false) {
      sideBar.classList.remove("sidebar-hover");
      sideBar.classList.add("sidenav-lock");
      main.style.marginLeft = "30rem";
      btnControlSide.innerHTML = `<i class="fas fa-long-arrow-alt-left t-white"></i>`;

      for (let t of tables) {
        t.parentElement.classList.add("lock");
        t.style.width = "120rem";
      }

      for (let p of panels) {
        p.style.overflowX = "scroll";
        p.querySelector("svg").style.width = "570px";
      }

      isLock = true;
    } else {
      sideBar.classList.remove("sidenav-lock");
      sideBar.classList.add("sidebar-hover");
      main.style.marginLeft = "5rem";
      btnControlSide.innerHTML = `<i class="fas fa-bars t-white"></i>`;

      for (let t of tables) {
        t.parentElement.classList.remove("lock");
        t.style.width = "";
      }

      for (let p of panels) {
        p.style.overflowX = "";
        p.querySelector("svg").style.width = "";
      }

      isLock = false;
    }
  });
}

/* == Click to show details in table */
function clickToShowDetails() {
  const buttons = document.querySelectorAll(".main-table .show-sub");
  let isShow = false;
  if (buttons.length > 0) {
    for (let button of buttons) {
      button.addEventListener("click", () => {
        if (isShow === false) {
          button.innerHTML = `<i class="fas fa-minus-circle"></i>`;
          isShow = true;
        } else {
          button.innerHTML = `<i class="fas fa-plus-circle"></i>`;
          isShow = false;
        }
      });
    }
  }
}

clickToShowDetails();

function customSelectDropdown(){
  const selects = document.querySelectorAll('.chosen-select-main');

  if(selects.length >0 ){
    for(let s of selects){
      const container = s.parentElement.querySelector('.chosen-container');
      const optList = s.querySelectorAll('option');
      const arr = [...getOptionValue(optList)] ;
      const data = returnData(arr);
      const div = document.createElement('div');
    
      //add class to style
      div.classList.add('chosen-inner');
      data.classList.add('chosen-list');
    
      div.innerHTML = `
        <div class="block">
          <div class="search-select">
          <input type="text" class="form-control  w-10"/>
          </div>
        </div>
     `;
    
     div.querySelector('.block').appendChild(data);
    
      container.append(div);
    }

    const list = document.querySelectorAll('.chosen-list li');
    
    function returnData(arr){
      let ul = document.createElement('ul');
      for(let i = 0 ; i < arr.length ; i++){
        let a = arr[i];
        
        let li = document.createElement('li');
     
        li.setAttribute('data-value',a.value);
        li.innerHTML= a.inner;
    
    
        ul.appendChild(li);
    
      };
      return ul;
    
    }
    
    
    function getOptionValue(list){
      const info = {
        value:"",
        inner:"",
      }
    
      const arr= [];
    
      for(let l of list){
        let inner = l.innerHTML;
        let value = l.getAttribute('value')
    
        l = info;
        l.inner = inner;
        l.value = value;
    
        arr.push(l);
      }
    
      return arr;
    }   
  }
}

customSelectDropdown();

$('.chosen-single').click(function(){
  $(this).parent().find('.chosen-inner').slideToggle(300);
})



