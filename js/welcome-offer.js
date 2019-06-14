$(function () {

    $('#welcome-offer').validator();

    $('#welcome-offer').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "welcome-offer.php";
            $("#loading").show();

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    $("#loading").hide();
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#welcome-offer').find('.messages').html(alertBox);
                        $('#welcome-offer')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});