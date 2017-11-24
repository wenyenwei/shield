// jQuery
$(document).ready(function() {


  $(document).on('click', '#signout-btn', logout); //登出

  // $(document).on('click', '#search-btn', filterChart);



    $(document).on('click', '.tablinks' , clickMsg);


});


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
        $("#"+target).show().siblings().hide();
        console.log('clickMsg executed')
    }




function logout(){
  auth.signOut()
  .then(response => {
    window.location.assign("/login");
  })
}
