$(document).ready(function () {
    $('body').on('click', '.post-accordion-head', function () {
        $(this).parents('.post-accordion-item').toggleClass('active');
    });
});
