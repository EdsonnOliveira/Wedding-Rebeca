$(document).ready(function() {
    $('.btContribute').click(function() {
        $('.backdrop').css('display','flex')
    })

    $('.backdrop').click(function() {
        $('.backdrop').css('display', 'none')
    })
})