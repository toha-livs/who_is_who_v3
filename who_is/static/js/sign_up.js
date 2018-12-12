$(function() {
    $('#sub_but').click(function() {
        if ($('#pass').val() == $('#repPass').val()) {

        }
        else {
            alert('Пароли не совпадают!')
        }
    })

// из начала в логин
    $('#next_but').click(function() {
    if ($('#first_name_u').val().length <= 2 | $('#last_name_u').val().length <= 2){
        alert('Минимум 3 буквы!')
    }else {
        $('#next_but').animate({ width: "45%", marginLeft: "2%"}, 700 )
        setTimeout(function() {
            $('#but_ah_ba_0').css('display', 'none')
            $('#but_ah_ba_1').css('display', 'block')
            $('#back_div1').animate({width: 'toggle'}, 300);
            $('#name_info').animate({width: 'toggle'}, 300);
            setTimeout(function() {
                $('#name_info').css('display', 'none')
//                $('#login_div').css('display', 'block')
                $('#login_div').animate({width: 'toggle'}, 300);
                setTimeout(function() {
                    $('#info_login').slideDown()
                    },1000);
                }, 1000);


         }, 600);
        }
    })
// кнопка перехода из логина в фото
    $('#next_but_1').on('click', function() {
        console.log('work!')
        var regexp = /[а-яА-ЯЁё-і]/i;
        if ($('#login_inp').val().length <= 5 | regexp.test($('#login_inp').val())) {

            alert('Логин должен быть больше 5 символов!\nВведите латинские символы!')
            }
        else {
            $('#info_login').slideUp()
            $('#but_ah_ba_1').css('display', 'none')
            $('#but_ah_ba_2').css('display', 'block')
            setTimeout(function() {
                $('#login_div').animate({width: 'toggle'}, 300);
                setTimeout(function() {
                    $('#login_div').css('display', 'none')
                    $('#image_div').animate({width: 'toggle'}, 300);
                    setTimeout(function() {
                        $('#imag_info').slideDown();
                        $('#chek_info').parent().css('display', 'block')
                        setTimeout(function() {
                            var count = 0
                            var timerId = setInterval(function() {
                                console.log(count)
                                count += 1
                                if (count == 5) {
                                    $('#chek_info').animate({color: 'rgb(214, 214, 214)'}, 1100)
                                    clearInterval(timerId); }
                                else {
                                    $('#chek_info').animate({color: 'rgb(214, 214, 214)'}, 1100)
                                    setTimeout(function() {
                                        $('#chek_info').animate({color: '#eee'}, 1100)
                                    }, 1100);
                                }
                            }, 2500)
                        }, 1000);
                    }, 400);
                }, 600)
            },900);


        }
    });
// кнопка перехода из фото в должности
    $('#next_but_2').on('click', function() {
        console.log($('#Image').val().slice(0, 10))
        if ( $('#Image').val().slice(0, 11) == 'https://pp.' | $('#Image').val().slice(0, 11) == 'https://sco' | $('#Image').val().slice(0, 11) == 'https://sun') {
            $('#but_ah_ba_2').css('display', 'none')
            $('#but_ah_ba_3').css('display', 'block')
            $('#img_img').slideUp()
            setTimeout(function() {
                $('.basic').animate({height: '400px'}, 400)
                $('.basic').animate({marginTop: '80px'}, 800)
                $('#chek_info').animate({color: '#eee'}, 300)
                $('#imag_info').slideUp();
                setTimeout(function() {
                    $('#chek_info').parent().css('display', 'none')
                    $('#image_div').animate({width: 'toggle'}, 300);
                    setTimeout(function() {
                        $('.basic').animate({marginTop: '40px'}, 800)
                        $('.basic').animate({height: '480px'}, 400)
                        $('#position_div').css('display', 'block');
                        $('#call_f').animate({width: 'toggle'}, 300);
                        setTimeout(function() {
                            $('#call_m').animate({width: 'toggle'}, 300);
                            setTimeout(function() {
                                $('#manager').animate({width: 'toggle'}, 300);
                            }, 200);
                        },200)
                    }, 400)
                }, 500);
            }, 400);
        }
        else {
            alert('неправильный адрес!')
        }
    });

   // кнопка перехода из должности в пароль
    $('#next_but_3').on('click', function() {
        if ($('#position_inp').val() == '0') {
            alert('Выбирите должность!')
        }
        else {
            $('#next_but_3').animate({color: '#428bca'}, 300)
            $('#sub_but').css('color', '#428bca')
            setTimeout(function() {
            $('#but_ah_ba_3').css('display', 'none')
            $('#but_ah_ba_4').css('display', 'block')

            $('#manager').animate({width: 'toggle'}, 300);
            setTimeout(function() {
                $('#call_m').animate({width: 'toggle'}, 300);
                setTimeout(function() {
                    $('#call_f').animate({width: 'toggle'}, 300);
                    setTimeout(function() {
                        $('#position_div').css('display', 'none');
                        $('.basic').animate({height: '400px'}, 400)
                        $('.basic').animate({marginTop: '80px'}, 800)
                        setTimeout(function() {
                            $('#sub_but').animate({color: 'white'}, 300)
                            $('#password_div').animate({width: 'toggle'}, 300);
                        }, 800)
                    }, 400)
                }, 200);
            },200)
        }, 500)
        }
    })

//    $.ajaxSetup({
//        headers: {
//            'X-Csrf-Token': $('input[name=csrfmiddlewaretoken]').val()
//        }
//    });


    // кнопка регистрации

    $('#sub_but').on('click', function() {
        var regexp = /[а-яА-ЯЁё-і]/i;
        if ($('#pass').val() != $('#repPass').val()) {
            alert('Пароли не совпадают!')
        } else if ($('#pass').val().length <= 7){
            alert('Пароль должен быть не меньше 8 символов!')
        } else if(regexp.test($('#login_inp').val())) {
            alert('Вводите пароль используя латинские буквы!')
        }else {
            var data = {
                first_name: $('#first_name_u').val(),
                last_name: $('#last_name_u').val(),
                login: $('#login_inp').val(),
                password: $('#pass').val(),
                image: $('#Image').val(),
                position: $('#position_inp').val()
//                csrfmiddlewaretoken: $('#csrf__').val()
            }
            console.log(data)
            $.post( "signup", {foo: data, csrfmiddlewaretoken: $('#csrf__').val()}, function(data){
                    alert('Вы успешно зарегистрировались!\nСейчас вы перейдете на страницу аворизации')
                    location.href = '/'
                })
        }

    })

    function info(id) {
        setTimeout(function () {
            console.log(id)
            $('#' + id).css('border', '0');
        }, 180)

    }

//выборка должностей
    $('#call_f').on('click', function() {
        $('#call_f').animate({backgroundColor: '#9c0088'}, 700)
        $('#position_inp').val('call_f')
        $('#position_info_div').css('display', 'block')
        $("#position_info").animate({text: 'оператор'},500);
        $('#call_m').animate({backgroundColor: '#eee'}, 700)
        $('#manager').animate({backgroundColor: '#eee'}, 700)
    })

    $('#call_m').on('click', function() {
        $('#call_m').animate({backgroundColor: '#484886'}, 700)
        $('#position_inp').val('call_m')
        $('#position_info_div').css('display', 'block')
        $("#position_info").animate({text: 'оператор'},500);
        $('#call_f').animate({backgroundColor: '#eee'}, 700)
        $('#manager').animate({backgroundColor: '#eee'}, 700)
    })

    $('#manager').on('click', function() {
        $('#manager').animate({backgroundColor: '#4a884d'}, 700)
        $('#position_info_div').css('display', 'block')
        $("#position_info").animate({text: 'менеджер'},500);
        $('#call_m').animate({backgroundColor: '#eee'}, 700)
        $('#call_f').animate({backgroundColor: '#eee'}, 700)
        setTimeout(function() {
            $('#myModal').css('display', 'block')
        }, 300)
//        if (confirm('Если вы девушка нажмите "OK",  если вы мужчина нажмите "Cancel"')) {
//            $('#position_inp').val('manager_f')
//        } else {
//            $('#position_inp').val('manager_m')
//        }
        console.log($('#position_inp').val())
    })


// закрытие модала и указание гендера менеджера
    $('#man_b').on('click', function() {
        $('#position_inp').val('manager_m')
        $('#myModal').css('display', 'none')
    })

    $('#woman_b').on('click', function() {
        $('#position_inp').val('manager_f')
        $('#myModal').css('display', 'none')
    })

// подъем дивов должностей
   $('.icon').hover(function () {
   var dr = 'dwa'
   var tex = ''
   if ($(this).attr( "id") == 'call_f') {
        dr = '#c53acc'
        tex = 'оператор'
   }else if ($(this).attr( "id") == 'call_m'){
        dr = '#1681e2'
        tex = 'оператор'
   }else if($(this).attr( "id") == 'manager') {
        dr = '#27ae60'
        tex = 'менеджер'
   }
        $(this).animate({boxShadow: '0px 14px 15px 1px #696868', marginTop: '18px'}, 200)
        $(this).css('border', '1px solid ' + dr);
        $('#position_info_div').css('display', 'block')
        $('#position_info').html(tex)
        $('#position_info').animate({color: dr}, 400)
         }, function() {
         var rg = $(this).attr( "id")
         console.log(rg)
            $(this).animate({boxShadow: '0px 2px 3px 0px #696868', marginTop: '23px'}, 200)
            $('#position_info').animate({color: '#eee'}, 300)
            info(rg)
   });



// картинака для копирования из фейсбук
    $('#chek_info').on('click', function() {
        $('.basic').animate({marginTop: '20px'}, 800)
        $('.basic').animate({height: '610px'}, 400)
        setTimeout(function() {
            $('#img_img').slideDown()
        }, 800);

    })

//// открытие модала
//    $('#myform').on('submit', function(ev) {
//    $('#my-modal').modal({
//        show: 'false'
//    });


//    $('')
// кнопка перехода из логина в начало
    $('#back_but_1').on('click', function() {
        $('#info_login').slideUp()
        setTimeout(function() {
            $('#login_div').animate({width: 'toggle'}, 300);
            setTimeout(function() {
                $('#name_info').animate({width: 'toggle'}, 300);
            }, 400);
        }, 400)
        $('#back_div1').animate({width: 'toggle'}, 300);
        setTimeout(function() {
            $('#next_div1').animate({ width: "100%"}, 500 );
            setTimeout(function() {
                $('#but_ah_ba_1').css('display', 'none')
                $('#next_div1').css({width: '50%'})
                $('#next_but').css({width: '100%', marginLeft: '0'})
                $('#but_ah_ba_0').css('display', 'block')
            }, 600);
        }, 50)

    })


// кнопка перехода из фото в логин
    $('#back_but_2').on('click', function() {
        $('#chek_info').animate({color: '#eee'}, 500)
        $('#imag_info').slideUp();
        $('#but_ah_ba_2').css('display', 'none')
        $('#but_ah_ba_1').css('display', 'block')
        setTimeout(function() {
            $('#image_div').animate({width: 'toggle'}, 300);

            setTimeout(function() {
                $('#image_div').css('display', 'none')
                $('#login_div').animate({width: 'toggle'}, 300);
                setTimeout(function() {
                    $('#info_login').slideDown()
                }, 300)
            }, 300)
        }, 600)

    });

// кнопка перхода из должности в фото
    $('#back_but_3').on('click', function() {
        $('#but_ah_ba_3').css('display', 'none')
        $('#but_ah_ba_2').css('display', 'block')
        $('#manager').animate({width: 'toggle'}, 300);
            setTimeout(function() {
                $('#call_m').animate({width: 'toggle'}, 300);
                setTimeout(function() {
                    $('#call_f').animate({width: 'toggle'}, 300);
                    setTimeout(function() {
                        $('#position_div').css('display', 'none');
                        $('.basic').animate({height: '400px'}, 400)
                        $('.basic').animate({marginTop: '80px'}, 800)
                        setTimeout(function() {
                            $('#image_div').animate({width: 'toggle'}, 300);
                            setTimeout(function() {
                                $('#imag_info').slideDown();
                                $('#chek_info').parent().css('display', 'block')
                                setTimeout(function() {
                                    var count = 0
                                    var timerId = setInterval(function() {
                                        console.log(count)
                                        count += 1
                                        if (count == 5) {
                                            $('#chek_info').animate({color: 'rgb(214, 214, 214)'}, 1100)
                                            clearInterval(timerId); }
                                        else {
                                            $('#chek_info').animate({color: 'rgb(214, 214, 214)'}, 1100)
                                            setTimeout(function() {
                                                $('#chek_info').animate({color: '#eee'}, 1100)
                                            }, 1100);
                                        }
                                    }, 2500)
                                }, 1000);
                            }, 400);
                        }, 700)
                    }, 300)
                })
            })
    })



// переход с пароля на должность
    $('#back_but_4').on('click', function() {
        $('#sub_but').animate({color: '#428bca'}, 300)
        setTimeout(function() {
            $('#but_ah_ba_4').css('display', 'none')
            $('#but_ah_ba_3').css('display', 'block')
            $('#password_div').animate({width: 'toggle'}, 300);
                        setTimeout(function() {
                            $('.basic').animate({marginTop: '40px'}, 800)
                            $('.basic').animate({height: '480px'}, 400)
                            $('#position_div').css('display', 'block');
                            $('#call_f').animate({width: 'toggle'}, 300);
                            setTimeout(function() {
                                $('#call_m').animate({width: 'toggle'}, 300);
                                setTimeout(function() {
                                    $('#manager').animate({width: 'toggle'}, 300);
                                    $('#next_but_3').animate({color: 'white'}, 300)
                                }, 200);
                            },200)
                        }, 400)
                    }, 500)
    })

});



