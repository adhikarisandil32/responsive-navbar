//For displaying the width part
document.querySelector(".check-width").addEventListener("click", (e) => {
    let x = getComputedStyle(e.target).getPropertyValue("width");
    let y = getComputedStyle(e.target).getPropertyValue("height");
    console.log("width = "+x+", heght = "+y);
});

//to handle responsive clicks
document.querySelector(".menu-bar").addEventListener("click", ()=>{
    let navItemsUl = document.querySelector(".nav-items-container > ul");
    if(navItemsUl.className === ""){
        navItemsUl.className = "display-none";
    }
    else{
        navItemsUl.className = "";
    }
});