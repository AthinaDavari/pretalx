jQuery(function ($) {
    $(document).ready(function () { //function will wait for the page to fully load before executing
        if ($("#id_question_required_0, #id_question_required_1").is(':checked')) {
            $("#id_deadline").attr("disabled", true);
            $("#id_deadline").attr("required", false);
        }
    });
    $("#id_question_required_2, #id_question_required_3").click(function () {
        $("#id_deadline").attr("disabled", false);
        $("#id_deadline").attr("required", true);
    });
    $("#id_question_required_0, #id_question_required_1").click(function () {
        $("#id_deadline").val("");
        $("#id_deadline").attr("disabled", true);
        $("#id_deadline").attr("required", false);
    });
})

