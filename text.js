$(function(){
    var $lesson = $(this).find('.lesson');
    console.log($lesson);
    $lesson.hover(function(){
        $lesson.find('.txt-contents').fadeIn();
    },function(){
        $lesson.find('.txt-contents').fadeOut();
    })
});