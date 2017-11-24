// jQuery
$(document).ready(function() {


  $(document).on('click', '#signout-btn', logout); //登出

  // $(document).on('click', '#search-btn', filterChart);



  $(document).on('click', '.tablinks' , clickMsg);
  $(document).on('click', '.addTopics', addTopics);
  $(document).on('click', '#modal-submit', modalSubmit); //新增


    if(window.location.pathname === '/message'){
    setTimeout(loadAutoReply, 1000);
  }


});
  function modalSubmit() {
  let d = Date.now()
  let name = $('#modal-task-name').val();
  let datetime = $('#datetime').val();
  let text = $('#modal-text').val();

  writeUserData(auth.currentUser.uid, name, datetime, text, auth.currentUser.email.toString());

  //塞入資料庫並重整
  $('#quickAdd').modal('hide');
  $('#modal-task-name').val('');
  $('#datetime').val('');
  $('#modal-text').val('');
  alert('Saved!')


  loadAutoReply();
}


  function writeUserData(userId, name, text) {
  database.ref('message/' + userId).push({
    taskName: name,
    // datetime: datetime,
    text: text,
    owner: auth.currentUser.email,
  });
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
        $("#"+target).show().siblings().hide();
    }


    function addTopics(){
        var target = $(this).attr('rel');
        $("#"+target).show()


    }


    function loadAutoReply(){
        $('#autoreply-list').empty();

        let userId = auth.currentUser.uid;
        database.ref('message/' + userId).on('value', snap => {
        let dataArray = [];
        let testVal = snap.val();
        let myIds = Object.keys(testVal);

        for(var i=0;i < myIds.length;i++){
          dataArray.push(snap.child(myIds[i]).val());

            $('#autoreply-list').append(
              '<tr>' +
                '<td id="' + myIds[i] + '" hidden>' + myIds[i] + '</td>' +
                '<td>' + dataArray[i].taskName + '</td>' +
                '<td class="category">' + dataArray[i].datetime + '</td>' +
                '<td>' + dataArray[i].text + '</td>' +
                '<td class="owner">' + dataArray[i].owner + '</td>' +
                '<td>' +
                '<button type="button" id="editBtn" data-toggle="modal" data-target="#editModal">Edit</button>' +
                ' ' +
                '<button type="button" id="viewBtn" data-toggle="modal" data-target="#viewModal">View</button>' +
                ' ' +
                '<button type="button" id="deleBtn">Delete</button>' +
                '</td>' +
              '</tr>'
        );
      }
    });
}

function logout(){
  auth.signOut()
  .then(response => {
    window.location.assign("/login");
  })
}
