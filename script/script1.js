const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
 var a=0;
 function timer() {
     setInterval(() => {
        if(a<95){
            var t = Math.floor(Math.random()*20)
            a=a+t;
            document.querySelector("#page1 h1 span").innerHTML=a;
        }
        else
        document.querySelector("#page1 h1 span").innerHTML=100;
        
    }, 150);
 }
 timer()
 gsap.to("#page1",{
    top:"-100%",
    delay:2,
    duration:3,
 })
