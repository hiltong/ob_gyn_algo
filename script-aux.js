

function goBack() {
  window.history.back();
}

function SideBarOpen() {
  // alert('Open');
  // Get the Sidebar
  var mySidebar = document.getElementById("mySidebar");
  // Get the DIV with overlay effect
  var overlayBg = document.getElementById("myOverlay");
  // Toggle between showing and hiding the sidebar, and add overlay effect
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

function SideBarClose() {
  // alert('Open');
  // Get the Sidebar
  var mySidebar = document.getElementById("mySidebar");
  // Get the DIV with overlay effect
  var overlayBg = document.getElementById("myOverlay");
  // Close the sidebar with the close button
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}




/* function AccToggle(accID) {
  var chevronId = accID + "_c";
  var x = document.getElementById(accID);
  var chevron = document.getElementById(chevronId);

  if (x.style.display == "block") {
    chevron.innerHTML = ARROWDOWN;
    // chevron.className = ARROWDOWN;
    x.style.display = "none";
    sessionStorage.setItem(accID, 'none')
  }
  else {
    chevron.innerHTML = ARROWUP;
    // chevron.className = ARROWUP;
    x.style.display = "block";
    sessionStorage.setItem(accID, 'block')
  }
  var data = sessionStorage.getItem(accID);
} */

const BACKBUTTON = '&#8592;';
const HAMBURGER = '&#9776';
//const HAMBURGER = 'Menu';
/* const ARROWRIGHT = '&#10148;';
const ARROWDOWN = "+";
const ARROWUP = '&#8722;'; */

//Sets divs for accordian and algorithms on page
function SetUpPage() {


  var bk = document.getElementById("bkbtn");
  bk.innerHTML = BACKBUTTON;

  var hmbg = document.getElementById("hmbrgbtn");
  hmbg.innerHTML = HAMBURGER;

  CreateSideBar();

  /* var accArray = document.getElementsByClassName("hg-accDivMain");
  for (i = 0; i < accArray.length; i++) {
    var accdiv = accArray[i];
    var data = sessionStorage.getItem(accdiv.id);
    // var chevronId = accdiv.id+1;
    var chevronId = accdiv.id + "_c";
    var chevron = document.getElementById(chevronId);
    if (data == 'block') {
      chevron.innerHTML = ARROWUP;

      // chevron.className = ARROWUP;
      accdiv.style.display = "block";
    }
    else {
      chevron.innerHTML = ARROWDOWN;
      accdiv.style.display = "none";
    }
  } */
  /* var algoArray = document.getElementsByClassName("hg-algoDivMain");
  for (i = 0; i < algoArray.length; i++) {
    var algodiv = algoArray[i];
    var data = sessionStorage.getItem(algodiv.id);
    if (data == 'block') {
      algodiv.style.display = "block";
    }
    else if (data == 'none') {
      algodiv.style.display = "none";
    }
    else if (i == 0) {
      algodiv.style.display = "block";
    }
  }

  var NavLinkArray = document.getElementsByClassName("hg-NavLink");
  for (i = 0; i < NavLinkArray.length; i++) {
    var nla = NavLinkArray[i];
    // var iArray = nla.getElementsByTagName("i");
    // iArray[0].className = ARROWRIGHT;
    var iArray = nla.getElementsByTagName("p");
    iArray[0].innerHTML = ARROWRIGHT;
  } */


}


function CreateSideBar() {
  var sideBar = document.getElementById("mySidebar");

  var about = document.createElement("a");
  var aboutText = document.createTextNode("About");
  about.appendChild(aboutText);
  about.setAttribute("class", "hg-SideBarItem")
  about.setAttribute("href", "index.html")
  sideBar.appendChild(about);

  var toc = document.createElement("a");
  var tocText = document.createTextNode("Table of Contents");
  toc.appendChild(tocText);
  toc.setAttribute("class", "hg-SideBarItem")
  toc.setAttribute("href", "toc.html")
  sideBar.appendChild(toc);

  var ref = document.createElement("a");
  var refText = document.createTextNode("References");
  ref.appendChild(refText);
  ref.setAttribute("class", "hg-SideBarItem")
  ref.setAttribute("href", "ref.html")
  sideBar.appendChild(ref);



}

/*Algorhithm-------------------------------------------------------------------------------*/
/* function AlgoNext(idhide, idshow) {
  //  alert('Here');
  //  alert(idhide);
  document.getElementById(idhide).style.display = "none";
  sessionStorage.setItem(idhide, 'none')
  document.getElementById(idshow).style.display = "block";
  sessionStorage.setItem(idshow, 'block')
  // alert('Here');
} */

// function AlgoNext(idhide, idshow, algobackstep) {
//   // alert('Here');
//   // alert(idhide);
//  document.getElementById(idhide).style.display = "none";
//  sessionStorage.setItem(idhide, 'none')
//  document.getElementById(idshow).style.display = "block";
//   sessionStorage.setItem(idshow, 'block')
//   sessionStorage.setItem(algobackstep, idhide)
//   // alert(algobackstep);
//   // alert(idhide);
// //  var idshow = sessionStorage.getItem('BackStep');
//  document.getElementById(idshow).style.display = "block";
//  sessionStorage.setItem(idshow, 'block')
// //  alert(idshow);
// }

/* function AlgoBack(idhide, algobackstep) {
  document.getElementById(idhide).style.display = "none";
  sessionStorage.setItem(idhide, 'none')
  var idshow = sessionStorage.getItem(algobackstep);
  document.getElementById(idshow).style.display = "block";
  sessionStorage.setItem(idshow, 'block')
  //  alert(idshow);
} */


/* function SetAlgoDivs() {
  var algoArray = document.getElementsByClassName("hg-algoDivMain");
  for (i = 0; i < algoArray.length; i++) {
    var algodiv = algoArray[i];
    var data = sessionStorage.getItem(algodiv.id);
    if (data == 'block') {
      algodiv.style.display = "block";
    }
    else if (data == 'none') {
      algodiv.style.display = "none";
    }
    else if (i == 0) {
      algodiv.style.display = "block";
    }

  }
} */

/*Glossary-----------------------------------------------------------------------------------------------*/
/* function ScrollToSection(section) {
  document.getElementById(section).scrollIntoView({ block: "start", behavior:"auto" });
}
 */