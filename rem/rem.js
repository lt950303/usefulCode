// 用于调整根元素字体大小  
// 公式 = 实际窗口大小/标准窗口大小 * 标准根元素字体大小
//监听屏幕窗口变化事件
window.addEventListener("resize", function () {
    // 获取窗口的大小 
    var windowWidth = document.documentElement.offsetWidth;
    // console.log(windowWidth);
    // 定义标准窗口大小
    var standardWidth = 375;
    // 定义根标签标准字体大小
    var standardHtmlFontSize = 100;
    // 取得缩放后的窗口，应该的字体大小
    var HtmlFontSize = windowWidth / standardWidth * standardHtmlFontSize;
    // console.log(HtmlFontSize);
    document.documentElement.style.fontSize = HtmlFontSize + "px";
});
