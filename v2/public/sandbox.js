let themeColorTitle = $('.theme-color .current-title');
let themeMenu = $('.side-panel .theme-menu');

themeColorTitle.listen(function() {
    themeMenu.classList.toggle('active')
})
// listen(themeColor,function() {
//     themeMenu.classList.toggle('active')
// })