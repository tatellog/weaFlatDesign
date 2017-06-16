/**
 * Created by tatello on 27/05/17.
 */
$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});
