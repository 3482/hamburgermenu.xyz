function adpacksDialog(){

$('#adpacks').css('display','block');

    var runonce = 0;

    smoke.confirm("Below is a sponsored message. We need to pay for hosting and keep this domain renewed, so please click the AD to support us. Thanks.", function (e) {

    }, {
        ok: "Alright mate.",
        cancel: "Banish this.",
        classname: "custom-class"
    });

    popu = setInterval(function () {

        if (typeof ($('#adpacks').html()) != 'undefined' && runonce === 0) {
            if ($('#adpacks').html().toString().length >= 100) {
                console.log('populated');
                $('.custom-class').append($('#adpacks').html());
                $('#adpacks').css('display','none');
                
                runonce = 1;
        
                clearInterval(popu)
            }
        }

    }, 1)

}

$(function() {

$('#adpacks').css('display', 'none');

$('#adpacksbutton').click(function(){

adpacksDialog();

return false;

})


});
