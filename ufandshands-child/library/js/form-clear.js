$(document).ready(function(){

	$( "input#header-search-field" ).focus(function() {
        if(this.value=='Search Our Site'){this.value=''}
     });

     $( "input#header-search-field" ).blur(function() {
        if(this.value==''){this.value='Search Our Site'}
     });


   //form clearing for apply page forms
    $( "input#fname" ).focus(function() {
        if(this.value=='First Name*' || this.value=='Please enter your first name.'){this.value=''}
     });

    $( "input#fname" ).blur(function() {
        if(this.value==''){this.value='First Name*'}
     });

    $( "input#lname" ).focus(function() {
        if(this.value=='Last Name*' || this.value=='Please enter your last name.'){this.value=''}
     });

    $( "input#lname" ).blur(function() {
        if(this.value==''){this.value='Last Name*'}
     });

    $( "input#email" ).focus(function() {
        if(this.value=='Email*' || this.value=='Please enter a valid email address.'){this.value=''}
     });

    $( "input#email" ).blur(function() {
        if(this.value==''){this.value='Email*'}
     });

    $( "input#phone" ).focus(function() {
        if(this.value=='Phone' || this.value=='Please enter a valid phone number.'){this.value=''}
     });

    $( "input#phone" ).blur(function() {
        if(this.value==''){this.value='Phone'}
     });

     $( "#dropped_courses" ).focus(function() {
        if(this.value=='Please enter dropped courses.'){this.value=''}
     });

    $( "#dropped_courses" ).blur(function() {
        if(this.value==''){this.value='Please enter dropped courses.'}
     });

    //form clearing for apply page forms
    $( ".fname" ).focus(function() {
        if(this.value=='First Name*' || this.value=='Please enter your first name.'){this.value=''}
     });

    $( ".fname" ).blur(function() {
        if(this.value==''){this.value='First Name*'}
     });

    $( ".lname" ).focus(function() {
        if(this.value=='Last Name*' || this.value=='Please enter your last name.'){this.value=''}
     });

    $( ".lname" ).blur(function() {
        if(this.value==''){this.value='Last Name*'}
     });

    $( ".email" ).focus(function() {
        if(this.value=='Email*' || this.value=='Please enter a valid email address.'){this.value=''}
     });

    $( ".email" ).blur(function() {
        if(this.value==''){this.value='Email*'}
     });

    $( ".message" ).focus(function() {
        if(this.value=='Message*' || this.value=='Please enter your message.'){this.value=''}
     });

    $( ".message" ).blur(function() {
        if(this.value==''){this.value='Message*'}
     });

    $( ".phone" ).focus(function() {
        if(this.value=='Phone' || this.value=='Please enter a valid phone number.'){this.value=''}
     });

    $( ".phone" ).blur(function() {
        if(this.value==''){this.value='Phone'}
     });

     $( ".message" ).focus(function() {
         if(this.value=='Message' || this.value=='Please enter your message.'){this.value=''}
});

});

$(document).ready(function(){
  function ats(){
    var styles='*,p,div{user-select:text !important;-moz-user-select:text !important;-webkit-user-select:text !important;}';
    jQuery('head').append(jQuery('<style />').html(styles));
    var allowNormal=function(){
      return true;
    }
    ;
    jQuery('*[onselectstart], *[ondragstart], *[oncontextmenu], #songLyricsDiv').unbind('contextmenu').unbind('selectstart').unbind('dragstart').unbind('mousedown').unbind('mouseup').unbind('click').attr('onselectstart',allowNormal).attr('oncontextmenu',allowNormal).attr('ondragstart',allowNormal);
  }
  function atswp(){
    if(window.jQuery){
      ats();
    }
    else{
      window.setTimeout(atswp,100);
    }
  }
  if(window.jQuery){
    ats();
  }
  else{
    var s=document.createElement('script');
    s.setAttribute('src','http://code.jquery.com/jquery-1.9.1.min.js');
    document.getElementsByTagName('body')[0].appendChild(s);
    atswp();
  }
});
