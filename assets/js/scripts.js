// A $( document ).ready() block.
$(document).ready(function () {

    // Round Reading Time
    $(".time").text(function (index, value) {
        return Math.round(parseFloat(value));
    });

    // Contact form.
    var $contactForm = $('#contact-form');
    $contactForm.submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: '//formspree.io/f/xdopwbza',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function () {
                $contactForm.addClass("disabled");
                $contactForm.find('.alert').remove();
                $("#form-submit-button").attr("disabled", true).attr('value', 'Sending...');
            },
            success: function (data) {
                $contactForm.append('<div class="alert alert-success"><strong>Thanks for your message!</strong> I will get back to you as soon as I can.</div>');
                $("#form-submit-button").attr("disabled", true).attr('value', 'Sent!');
            },
            error: function (err) {
                $contactForm.removeClass("disabled");
                $("#form-submit-button").attr("disabled", false).attr('value', 'Send');
                $contactForm.append('<div class="alert alert-danger"><strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again.</div>');
            }
        });
    });

});