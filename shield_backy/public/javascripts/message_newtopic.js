// jQuery
$(document).ready(function() {


  $(document).on('click', '#signout-btn', logout); //登出

  // $(document).on('click', '#search-btn', filterChart);



    $(document).on('click', '.tablinks' , clickMsg);
    $(document).on('click', '#emojis' , clickEmo);
    $(document).on('click', '#setlimit', clickMsg);

    // $(document).on('click', '.tablinks' , showEmo);



});


  function clickEmo(){
      $('#textinput').val(rel);
  }

  $(document).on('mouseover', '#message', subMessage);//Message 導覽標籤 subtags

  function subMessage(){
    if ($('.subTag').is(':visible')){
      $('.subTag').fadeOut();
    }else{
    $('.subTag').fadeIn();
  }
  }



      function clickMsg(){
        var target = $(this).attr('rel');
      if ($("#"+target).is(':visible')){
      $("#"+target).hide();
    }else{
    $("#"+target).show();
  }

      }
    




function logout(){
  auth.signOut()
  .then(response => {
    window.location.assign("/login");
  })
}
