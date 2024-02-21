$(document).ready(() => {
    $('.btn-show-project').click(() => {
        $('.project-one').fadeIn(500)
        $('.project-two').fadeIn(1000)
        $('.project-three').fadeIn(1500)
        $('.project-four').fadeIn(2000)
        $('.btn-show-project-close').css('visibility', 'visible')
    })
})
$(document).ready(() => {
    $('.btn-show-project-close').click(() => {
        $('.project-four').fadeOut(500)
        $('.project-three').fadeOut(500)
        $('.project-two').fadeOut(500)
        $('.project-one').fadeOut(500)
        $('.btn-show-project-close').css('visibility', 'hidden')
    })
})
