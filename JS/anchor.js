function scrollToElement(element) {
    $('html, body').animate({ scrollTop: $(element).offset().top - 48}, 500);
}