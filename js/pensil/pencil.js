var xmlns = "http://www.w3.org/2000/svg",
    select = function (s) {
        return document.querySelector(s);
    },
    selectAll = function (s) {
        return document.querySelectorAll(s);
    },
    container = select('.container'),
    circPath = select('#circ').getAttribute('d'),
    halfwayPath = select('#halfway').getAttribute('d'),
    arrowPath = select('#arrow').getAttribute('d')


TweenMax.set('svg', {
    visibility: 'visible'
})

TweenMax.set('#straightProgress', {
    drawSVG: '0% 0%'
})

TweenLite.defaultEase = Elastic.easeOut.config(1, 0.4);
var tl = new TimelineMax({ paused: false, repeat: -1, yoyo: false, repeatDelay: 1, delay: 2 });
tl.set('#arrow', {
    rotation: 0
})
    .to('#circ', 0.25, {
        morphSVG: { shape: '#halfway', shapeIndex: 3 },
        ease: Linear.easeNone
    })
    .to('#circ', 2, {
        morphSVG: { shape: '#straight', shapeIndex: 0 }
    })
    .to('#arrow', 1, {
        y: -180,
        ease: Power1.easeOut
    }, '-=2')
    .to('#arrow', 2, {
        morphSVG: { shape: '#pencil', shapeIndex: 0 },
        ease: Power4.easeOut
    }, '-=1.4')
    .to('#arrow', 1.9, {
        x: -250,
        ease: Anticipate.easeOut
    }, '-=0.8')
    .to('#arrow', 2, {
        y: -50,
        ease: Back.easeOut.config(0.9)
    }, '-=1')
    .to('#arrow', 0.6, {
        rotation: -14,
        immediateRender: false,
        transformOrigin: '50% 100%',
        ease: Power2.easeInOut
    }, '-=3')
    .to('#arrow', 1, {
        rotation: 13,
        transformOrigin: '50% 100%',
        ease: Power1.easeInOut
    }, '-=2.06')
    .to('#circ', 10, {
        drawSVG: '100% 100%',
        ease: Linear.easeNone
    })

    .to('#straightProgress', 10, {
        drawSVG: '0% 100%',
        ease: Linear.easeNone
    }, '-=10')
    .to('#arrow', 6, {
        rotation: -10
    }, '-=10')
    .to('#arrow', 10, {
        x: 250,
        transformOrigin: '50% 100%',
        ease: Linear.easeNone
    }, '-=10')
    .to('#arrow', 3, {
        rotation: 0
    }, '-=0.1')
    .to('#straightProgress', 0.25, {
        morphSVG: { shape: halfwayPath, shapeIndex: 0 },
        ease: Linear.easeNone
    })
    .to('#straightProgress', 2, {
        morphSVG: { shape: circPath, shapeIndex: 1 },
        ease: Power1.easeOut,
        stroke: '#FFF'
    })
    .to('#arrow', 2, {
        x: 0,
        y: 0,
        rotation: 360,
        ease: Power2.easeInOut
    }, '-=2')
    .to('#arrow', 2, {
        morphSVG: { shape: '#tick', shapeIndex: 2 }

    }, '-=1')
    .to('#arrow', 2, {
        morphSVG: { shape: arrowPath },
        ease: Power4.easeInOut,

        delay: 2

    })



tl.timeScale(3);
//ScrubGSAPTimeline(tl)