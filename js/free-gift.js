$(function () {

    $('#free-gift').validator();

    $('#free-gift').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "free-gift.php";
            $("#loading2").show();

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    $("#loading2").hide();
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#free-gift').find('.messages').html(alertBox);
                        $('#free-gift')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});