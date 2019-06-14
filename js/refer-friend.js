$(function () {

    $('#refer-friend').validator();

    $('#refer-friend').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "refer-friend.php";
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
                        $('#refer-friend').find('.messages').html(alertBox);
                        $('#refer-friend')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});