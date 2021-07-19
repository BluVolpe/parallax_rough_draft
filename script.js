let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".rock", 5, {y: -400})
    .to(".girl", 5, {y: -250}, "-=5")
    .to(".bg1", 5, {y:100}, "-=5")
    .to(".content", 5, {top:"3%"}, "-=5")
    .fromTo(".content-images", {opacity:0}, {opacity:1, duration:1})


    let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration: "100%",
        triggerHook: 0,
    })
        .setTween(timeline)
        .setPin("section")
        .addTo(controller);