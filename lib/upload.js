/**
 * Created by Admin on 2018/8/26.
 */
$(function () {
    $("#upload").click(function () {

        var formData = new FormData(document.getElementById("tf"));

        $.ajax({
            type: 'post',
            url: "http://localhost:80/gaokao/admin/import",
            data:formData,
            cache: false,
            processData: false,
            contentType: false,
        }).success(function (res) {
            alert(res.msg);
        }).error(function (err) {
            alert("上传失败");
        });

    });

});

