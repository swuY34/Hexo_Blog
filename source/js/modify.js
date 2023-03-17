


/* 更改post top-image 位置 */
(function insertTopImage()
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

})();

/* 评论区加上 placeholder */
(function addTextareaPlaceholder()
{
    window.addEventListener("load", function(event) {
        let Textarea = document.querySelector(".el-textarea__inner");
        Textarea.placeholder = "欢迎回家~ ~ \n留下点什么吧 ヾ(≧∇≦*)ゝ";
    }); 
})();

