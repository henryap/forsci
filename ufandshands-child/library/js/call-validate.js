$(document).ready(function(){

       $.validator.addMethod("fname", function(value, element) {
        if (element.value == "First Name*" || element.value == "Please enter your first name."){return false;}else{return true;}},
        "Please enter your first name."
        );

        $.validator.addMethod("lname", function(value, element) {
        if (element.value == "Last Name*" || element.value == "Please enter your last name."){return false;}else{return true;}},
        "Please enter your last name."
        );

        $.validator.addMethod("phone", function(value, element) {
        if (element.value == "Phone Number" || element.value == "Please enter a valid phone number."){return false;}else{return true;}},
        "Please enter a valid phone number."
        );

        $.validator.addMethod("message", function(value, element) {
        if (element.value == "Message*" || element.value == "Please enter your message."){return false;}else{return true;}},
        "Please enter your message."
        );

        $(".main-banner .banner_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
                required: {
                  depends:function(){
                    $(this).val($.trim($(this).val()));
                    return true;
                }
                },
				email: true
				},
            program_type: {
                required: true
            },
            program_name: {
                required: true
            }
        },
            messages: {
				first_name: "Please enter your first name.",
				last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number."
            }, submitHandler: function(rmi_one){
                var first_name = $('input[name="first_name"]').val();
                Cookies.set('first_name', first_name, { expires: 60 });
                /*console.log(Cookies.get('first_name'));*/

                var last_name = $('input[name="last_name"]').val();
                Cookies.set('last_name', last_name, { expires: 60 });
                /*console.log(Cookies.get('last_name'));*/

                var email = $('input[name="email"]').val();
                Cookies.set('email', email, { expires: 60 });
                /*console.log(Cookies.get('email'));*/

                var phone = $('input[name="phone"]').val();
                Cookies.set('phone', phone, { expires: 60 });
                /*console.log(Cookies.get('phone'));*/

                var program = $('#interest option:selected').val();
                Cookies.set('program', program, { expires: 60 });
                /*console.log(Cookies.get('program'));*/

                form.submit();
            }
        });

        $(".modal_form .banner_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
        },
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
                required: {
                  depends:function(){
                    $(this).val($.trim($(this).val()));
                    return true;
                }
                },
                email: true
                },
            program_type:{
                required: true
            }
        },
            messages: {
                first_name: "Please enter your first name.",
                last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number."
            }
        });

    	    $(".contact_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
                required: true,
                email: true
                },
            message: {
                required: true,
                message: true,
                minlength: 20
             }
        },
            messages: {
                first_name: "Please enter your first name.",
                email: "Please enter a valid email address.",
                message: "Please enter your message."
             }
        });

        $("#mandatory_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
                required: true,
                email: true
                },
            phone: {
                required: true,
                phone: true,
                minlength: 10
            },
            Semester_Term__c: {
                required: true
            },
            Program_Name__c: {
                required: true
            },
            program_type: {
                required: true
            }
        },
            messages: {
                first_name: "Please enter your first name.",
                last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number."
            }
        });

        $("#intent_form_ms").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
				required: true,
				email: true
				},
            phone: {
                required: true,
                phone: true,
                minlength: 10
            },
            Semester_Term__c: {
                required: true
            },
            Program_Name__c: {
                required: true
            },
            program_type: {
                required: true
            }
        },
            messages: {
				first_name: "Please enter your first name.",
				last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number."
            }
        });

    $("#concurrent_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
				required: true,
				email: true
				},
            semester: {
                required: true
            },
            expected_graduation_semester: {
                required: true
            },
            program_name: {
                required: true
            },
            concurrent_program_name: {
                required: true
            }
        },
            messages: {
				first_name: "Please enter your first name.",
				last_name: "Please enter your last name.",
                email: "Please enter a valid email address."
            }
        });

    $("#drop_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
				required: true,
				email: true
				},
            dropped_courses: {
                required: true,
                minlength: 3
            },
            dropped_reason: {
                required: true
            }
        },
            messages: {
				first_name: "Please enter your first name.",
				last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                dropped_courses: "Please enter dropped courses.",
                dropped_reason_other: "Please enter a reason."
            }
        });

    $("#completion_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
				required: true,
				email: true
				}
        },
            messages: {
				first_name: "Please enter your first name.",
				last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
            }
        });

    $("#investigator_sub").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            email: {
                required: true,
                email: true
                }
        },
            messages: {
                email: "Please enter a valid email address.",
            }
        });

});
