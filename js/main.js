function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;


    
    function animationSmooth(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animationSmooth);
    }

    function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t* (t - 2) - 1) + b;
        }
    requestAnimationFrame(animationSmooth);
}

    

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');
var section3 = document.querySelector('.section3');

var sectionTop2 = document.querySelector('.section-top2');
var sectionTop3 = document.querySelector('.section-top3');
var sectionTop4 = document.querySelector('.section-top4');



section1.addEventListener('click', function(){
    smoothScroll('.box2', 1000);
});
section2.addEventListener('click', function(){
    smoothScroll('.box3', 1000);
});
section3.addEventListener('click', function(){
    smoothScroll('.box4', 1000);
});


sectionTop2.addEventListener('click', function(){
    smoothScroll('.box1', 1000);
});
sectionTop3.addEventListener('click', function(){
    smoothScroll('.box1', 1000);
});
sectionTop4.addEventListener('click', function(){
    smoothScroll('.box1', 1000);
});
