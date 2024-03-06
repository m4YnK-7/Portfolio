const scroll = document.querySelector(".layout");

scroll.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scroll.scrollLeft += e.deltaY;
});