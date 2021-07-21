let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".bluebox0", 5, {y: -1050})
    .to(".bluebox1", 5, {y: -700}, "-=5")
    .to(".bluebox2", 5, {y: -600}, "-=5")
    .to(".bluebox3", 5, {y: -250}, "-=5")
    .to(".blueboxB", 5, {y:00}, "-=5")
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