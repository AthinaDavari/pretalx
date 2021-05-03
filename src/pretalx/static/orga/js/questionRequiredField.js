jQuery(function($) {
    $("#id_question_required_1, #id_question_required_2").click(function () {
        $("#id_require_after").attr("disabled", false);
        $("#id_require_after").attr("required", true);
    });
    $("#id_question_required_0").click(function () {
        $("#id_require_after").val("");
        $("#id_require_after").attr("disabled", true);
        $("#id_require_after").attr("required", false);
    });
})