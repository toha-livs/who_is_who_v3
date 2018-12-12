$(function() {
      $(".butt").click(function() {
         var ide = this.id.slice(-1);
         var idr = this.getAttribute('class').slice(-1);
         var gm_id = window.location.href.slice(-36);
         var lcu = $('#list_ch_usr').text()
         $('#all_info').hide('normal')
         $.ajax({
            type: "POST",
            url: "/test_ajax/valid/",
            data: {
                'list_ch_usr': lcu,
                'game_id': gm_id,
                'last_letter': ide
            },
            dataType: 'json',
            success: function(data) {
                if (data.rounde == 6) {
                        document.location.href='/game-stat/';
                    }
                else {
                console.log('success')
                var rounde = data.rounde
                console.log(rounde)
                console.log(data)
                var user_imagg = 'user_img' + rounde
                var user_names = 'names' + rounde
                $('#imag_game').attr('src', data[user_imagg]['avatar'])
                $('#position_user').html(data[user_imagg]['position'])
                $('.True').html('<h3 class="h_1">' + data[user_names][0]['Name'] + '</h3')
                $('.True').attr('id', data[user_names][0]['Test'])
                $('.Truе').html('<h3 class="h_2">' + data[user_names][1]['Name'] + '</h3')
                $('.Truе').attr('id', data[user_names][1]['Test'])
                $('.Tru5').html('<h3 class="h_3">' + data[user_names][2]['Name'] + '</h3')
                $('.Tru5').attr('id', data[user_names][2]['Test'])
                $('#all_info').show('slow')
//                if ($('.h_1').height() == 26) {
//                    console.log('edit h_1 from 26px')
//                    $('.h_1').css('margin-top', '27px')
//                }
//                else {
//                    console.log('edit h_2 from 52px')
//                    $('.h_2').css('margin-top', '13px')
//                }
//                if ($('.h_2').height() == 26) {
//                    console.log('edit h_2 from 26px')
//                    $('.h_2').css('margin-top', '27px')
//                }
//                else {
//                    console.log('edit h_1 from 52px')
//                    $('.h_1').css('margin-top', '13px')
//                }
//                if ($('.h_3').height() == 26) {
//                    console.log('edit h_3 from 26px')
//                    $('.h_3').css('margin-top', '27px')
//                }
//                else {
//                    console.log('edit h_3 from 52px')
//                    $('.h_3').css('margin-top', '13px')
//                }
//                console.log($('.h_1').height(), $('.h_2').height(), $('.h_3').height())
                $('#modal_form').animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
            }}
         })
         });
         $("#start").click(function(){
            var gm_id = window.location.href.slice(-36);
            var lcu = $('#list_ch_usr').text()
            $.ajax({
            type: "POST",
            url: "/test_ajax/valid/",
            data: {
                'list_ch_usr': lcu,
                'game_id': gm_id
            },
            dataType: 'json',
            success: function(data) {
                $("#start").html('')
                if (data.rounde == 6) {
                        document.location.href='/game-stat/';
                    }
                else {
                console.log('success')
                var rounde = data.rounde
                console.log(rounde)
                console.log(data)
                var user_imagg = 'user_img' + rounde
                var user_names = 'names' + rounde
                console.log(user_imagg)
                console.log(data[user_imagg]['avatar'])
                console.log(data[user_names][0]['Name'])
                $('#imag_game').attr('src', data[user_imagg]['avatar'])
                $('#position_user').html(data[user_imagg]['position'])
                $('.True').html('<h3 class="h_1">' + data[user_names][0]['Name'] + '</h3')
                $('.True').attr('id', data[user_names][0]['Test'])
                $('.Truе').html('<h3 class="h_2">' + data[user_names][1]['Name'] + '</h3')
                $('.Truе').attr('id', data[user_names][1]['Test'])
                $('.Tru5').html('<h3 class="h_3">' + data[user_names][2]['Name'] + '</h3')
                $('.Tru5').attr('id', data[user_names][2]['Test'])
                $('#all_info').show('slow')
//                console.log($('.h_1').height(), $('.h_2').height(), $('.h_3').height())
//                if ($('.h_1').height() == 26) {
//                    console.log('edit h_1 from 26px')
//                    $('.h_1').css('margin-top', '27px')
//                }
//                else {
//                    console.log('edit h_2 from 52px')
//                    $('.h_2').css('margin-top', '13px')
//                }
//                if ($('.h_2').height() == 26) {
//                    console.log('edit h_2 from 26px')
//                    $('.h_2').css('margin-top', '27px')
//                }
//                else {
//                    console.log('edit h_1 from 52px')
//                    $('.h_1').css('margin-top', '13px')
//                }
//                if ($('.h_3').height() == 26) {
//                    console.log('edit h_3 from 26px')
//                    $('.h_3').css('margin-top', '27px')
//                }
//                else {
//                    console.log('edit h_3 from 52px')
//                    $('.h_3').css('margin-top', '13px')
//                }
            }}
            });
         });
         $(".butt").mouseenter( function() {
            $(this).animate({top: "-=5px"}, 200);
            $(this).css("box-shadow","0 1 1px 3px #000")
            });
         $(".butt").mouseleave( function() {
            $(this).animate({top: "+=5"}, 200);});

    });