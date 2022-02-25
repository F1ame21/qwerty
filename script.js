window.addEventListener('load', function () {
    setTimeout(function() {
        let timing = performance.getEntriesByType('navigation')[0]
        let pageloadtime = timing.loadEventEnd - timing.loadEventStart
        //let pageloadtime2 = timing.loadEventEnd - timing.responseEnd
        console.log(timing)
        document.getElementById("t1").innerHTML =  "Page load time is " + pageloadtime + " seconds";
    },0)
})