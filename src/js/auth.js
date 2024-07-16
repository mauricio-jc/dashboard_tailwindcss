$(document).ready(function() {
    $('.eye-icon').on('click', function() {
        var type = $('#password').attr('type');

        if(type === 'password') {
            $('#password').attr('type', 'text');
            $('#eye').show();
            $('#eye-slash').hide();
        }
        else {
            $('#password').attr('type', 'password');
            $('#eye').hide();
            $('#eye-slash').show();
        }
    });

    $('#alert-close').click(function() {
        $('#alert').fadeOut(1000);
    });
});