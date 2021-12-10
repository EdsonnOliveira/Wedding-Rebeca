$(document).ready(function() {
    $('#openMenu').click(function() {
        $('#headerMobile').css('left','0')
    })

    $('#closeMenu').click(function() {
        $('#headerMobile').css('left','-5000px')
    })
})