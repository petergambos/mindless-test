
    document.documentElement.style.setProperty('--r', 255);
    document.documentElement.style.setProperty('--g', 255);
    document.documentElement.style.setProperty('--b', 72);
    document.documentElement.style.setProperty('--r1', 215);
    document.documentElement.style.setProperty('--g1', 186);
    document.documentElement.style.setProperty('--b1', 244);
    
    addEventListener("scroll", (event) => {
    $(window).scroll(function() {

        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

      
        //console.log(anim.currentRawFrame);
    
     
        scrollPercentRounded = Math.round(scrollPercent);
        
            document.documentElement.style.setProperty('--r', 255 - (scrollPercentRounded/100*0));
            document.documentElement.style.setProperty('--g', 255 - (scrollPercentRounded/100*76));
            document.documentElement.style.setProperty('--b', 72 + (scrollPercentRounded/100*107));
            document.documentElement.style.setProperty('--r1', 215 - (scrollPercentRounded/100*187));
            document.documentElement.style.setProperty('--g1', 186 + (scrollPercentRounded/100*46));
            document.documentElement.style.setProperty('--b1', 244 - (scrollPercentRounded/100*216));
        });
        
        

        
        //console.log(scrollPercentRounded);
       
        //console.log( (scrollPercentRounded / 100) * anim.totalFrames );
        
        });
}
    

