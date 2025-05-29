$(function() {
    $('.header-form, .footer-form').on('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(this);

        $.ajax({
            url: './php/add_request.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    Swal.fire({
                        title: 'Спасибо!',
                        text: response.message,
                        icon: 'success',
                        confirmButtonText: 'Закрыть'
                    });
                } else {
                    Swal.fire({
                        title: 'Ошибка',
                        text: response.message,
                        icon: 'error',
                        confirmButtonText: 'Закрыть'
                    });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                Swal.fire({
                    title: 'Ошибка',
                    text: 'Ошибка при отправке формы: ' + textStatus,
                    icon: 'error',
                    confirmButtonText: 'Закрыть'
                });
            }
        });
    });
});