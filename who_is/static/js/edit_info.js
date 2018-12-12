$(function() {
    $('#photo_edit').click(function() {
        $('#inp_photo').animate({width: 'toggle'}, 500);
        setTimeout(function() {
            if ($('#inp_photo').css("background-color") == '#a9a9a9') {
                $('#inp_photo').animate({backgroundColor: '#252525'}, 500);
            }else{
            $('#inp_photo').animate({backgroundColor: '#a9a9a9'}, 500);
            }
        }, 500)
    })
    $('#sub_but_photo').click(function() {
        $('#inp_photo').css('display', 'none')
        console.log($('#progres').css('width'))
        $('#prog').css('display', 'block')
        setTimeout(function() {
            var idInter = setInterval(function() {
                console.log(Number($('#prog').css('width').slice(0, -2)), Number($('#progres').css('width').slice(0, -2)))
                if (Number($('#prog').css('width').slice(0, -2)) <= Number($('#progres').css('width').slice(0, -2))) {
                    clearInterval(idInter)
                    $('#progres').html('complete!')
                    setTimeout(function() {
                        $('#prog').animate({width: 'toggle'}, 400)
                        $.post()
                    }, 400)

                }else{
                var wid = $('#progres').css('width')
                console.log(wid)
                wid = wid.slice(0, -2)
                console.log(wid)
                wid = Number(wid)
                console.log(wid)
                wid = wid + 40
                console.log(wid)
                $('#progres').css('width', wid +'px')}
            }, 100)

        }, 200)
    })
})