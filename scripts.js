$(document).ready(function(){
    $('.question-button').on('click', function(){
        var questionId = $(this).attr('id').replace('question', '');
        $("#answer" + questionId).toggle();
    });
});