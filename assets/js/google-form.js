/**
 * Created by Parris_2 on 2/20/2016.
 */
$(function () {
    var frm = $('#ss-form');
    frm.submit(function (ev) {
        ev.preventDefault();
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function (data, textStatus, jqXHR) {
                console.log(textStatus);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                myDialog.dialog("open");
            }
        });
    });
    var myDialog = $("#dialog-message").dialog({
        modal: true,
        autoOpen: false,
        //height: 300,
        width: 400,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });
});
