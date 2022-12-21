function openNav(){
    document.getElementById("side-nav").style.width="80%";
    document.getElementById("mainBlur").style.filter="blur(5px)";
    document.getElementById("asideBlur").style.filter="blur(5px)";
    document.getElementById("footerBlur").style.filter="blur(5px)";
    document.getElementById("footer2Blur").style.filter="blur(5px)";
    document.getElementById("w-logoBlur").style.filter="blur(5px)";
    document.getElementById("footer3Blur").style.filter="blur(5px)";
}
function closeNav(){
    document.getElementById("side-nav").style.width="0%";
    document.getElementById("asideBlur").style.filter="blur(0px)";
    document.getElementById("footerBlur").style.filter="blur(0px)";
    document.getElementById("footer2Blur").style.filter="blur(0px)";
    document.getElementById("footer3Blur").style.filter="blur(0px)";
    document.getElementById("w-logoBlur").style.filter="blur(0px)";
    document.getElementById("mainBlur").style.filter="blur(0px)";

}

function display(){
    if(document.documentElement.scrollTop <= 380 ){
    document.getElementById("scroll").style.transform="translateY(10px)"
    document.getElementById("scroll").style.opacity="100%"
}

else{
    document.getElementById("scroll").style.transform="translateY(-100px)"
    document.getElementById("scroll").style.opacity="0%"
    document.getElementById("scroll").style.zIndex="-1"

}
}
