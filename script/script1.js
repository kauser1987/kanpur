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
 gsap.to("#page1",{
    top:"-100%",
    delay:2,
    duration:3,
 })
 
 function mousefollower(){
    var circle= document.querySelector("#minicircle");
    window.addEventListener("mousemove",(dets)=>{
        circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
// function pressedfollower() {
//     var scaleX;
//     var scaleY;
//     var xdiff;       
//     var ydiff;
//     scaleX=gsap.utils.clamp(.8,1.2,dets.clientX-xdiff)
//     scaleY=gsap.utils.clamp(.8,1.2,dets.clientY-ydiff)
//     xdiff=dets.clientX;
//     ydiff=dets.clientY;
//     mousefollower(scaleX,scaleY)
//     window.addEventListener("mousemove",(dets)=>{
//         circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${2},${2})`
//     })    
// }
// pressedfollower()
mousefollower()
timer()
