var action = 'click';
var speed = 350;


$(document).ready(function(){
    $('.jawabFaq').css({
        display: 'none'
    })

    $('.tanyaFaq').on(action,function(){
        $(this).next().slideToggle(speed).siblings('.jawabFaq').slideUp();
    });

})


$(document).ready(function(){
    $('.welcomeText', '.welcome').delay(4000).fadeOut()
    $('.welcome').delay(3250).slideUp(1000)
})

//HoverCard

// const handleMouse = e => {
//     const {currentTarget: target} = e;
//     const rect = target.getBoundingClientRect(),
//             x = e.clientX - rect.left,
//             y = e.clientY - rect.top;
    
//     target.style.setProperty("--mouse-x", `${x}px`)
//     target.style.setProperty("--mouse-y", `${y}px`)
// }

// for (const card of document.querySelectorAll(".imgService")) {
//     card.onmousemove = e => handleMouse(e)
// }

document.querySelector('.cardsService').onmousemove = e => {
    for (const card of document.getElementsByClassName("imgService")) {
        const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
    }
}