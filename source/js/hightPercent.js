


function calculatePercentOfHight () 
{
    var a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100) // 计算百分比
        
    return result
};

// 页面百分比
function percentGoUpButton()
{
    let up = document.querySelector("#go-up"), // 获取按钮
        percentResult = calculatePercentOfHight();

    if (percentResult < 100) {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
        up.childNodes[0].innerHTML = `${percentResult}%`;
    } else {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
    }
};

window.onscroll = function ()
{
    percentGoUpButton()
}; // 当滚动条有变化时候, 运行函数; 这么写方便以后添加新的要用到页面百分比高度的地方

