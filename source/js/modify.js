


function InsertTopImage()
{
    var TopImage = document.querySelector("#page-header").style.backgroundImage
    if (TopImage) {
        var Element = document.createElement('div');
        Element.classList.add('top-img');
        Element.style.cssText = `background-image: ${TopImage}`
        
        document.querySelector("#post").insertBefore(Element, document.querySelector("#article-container"))
    } else {
        return ;
    }

}

InsertTopImage()
