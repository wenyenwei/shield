// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqzIra9YkeE0HZZBSwXrjh4GemO7yVdmI",
  authDomain: "shield-88fd0.firebaseapp.com",
  databaseURL: "https://shield-88fd0.firebaseio.com",
  projectId: "shield-88fd0",
  storageBucket: "shield-88fd0.appspot.com",
  messagingSenderId: "376341346069"
};

firebase.initializeApp(config);

//initialize firebase components
const auth = firebase.auth();


auth.onAuthStateChanged(user => {
  if(user){
    console.log('user has signed in');
  } else {
    console.log('need to sign in');
    window.location = '/login';
  }
});


// jQuery
$(document).ready(function() {
    $("#a").hide();//隱藏選單

  $(document).on('click', '#signout-btn', logout); //登出

  $(document).on('click', '#search-btn', filterChart);
    
    $("#search-input").click(function(){$("#a").show()});//選單
    $(document).on('click', '#search-input', getH);//總覽    
    $(document).on('click', '#get_h', getH);//總覽
    $(document).on('click', '#get_a', getA);//瀏覽人數
    $(document).on('click', '#get_b', getB);//收入分析
    $(document).on('click', '#get_c', getC);//回饋
    $(document).on('click', '#get_d', getD);//通知
    $(document).on('click', '#get_e', getE);//收入比例
    $(document).on('click', '#get_g', getG);//聊天室
    
    $("#a").click(function(){$(this).hide();});//隱藏選單

    });

//Click elsewhere to close 選單
window.addEventListener('mouseup', function(event){
	var box = document.getElementById('a');
	if (event.target != box && event.target.parentNode != box){
        box.style.display = 'none';
    }
});

//搜尋篩選要檢視的chart
function filterChart(){
  let getInputVal = $('#search-input').val().toLowerCase();
  console.log(getInputVal);
  if(getInputVal !== '總覽'){
    $('.panel-default').css("display","none");

    if($('.name').is('#' + getInputVal)){
      $('#' + getInputVal).parent().parent().css("display","block");
    }

    // $('.name').each(() => {
    //   var text = $(this).text().toLowerCase();
    //   console.log(text);
    //   if(text.indexOf(getInputVal) != -1){
    //     $(this).parent().parent().show();
    //   }
    // });
  } else {
    $('.panel-default').css("display","block");
  }

};

//自動填入篩選
function getH() {
$('#search-input').val('總覽');
};

function getA() {
$('#search-input').val('瀏覽人數');
};

function getB() {
$('#search-input').val('收入分析');
};

function getC() {
$('#search-input').val('回饋');
};

function getD() {
$('#search-input').val('通知');
};

function getE() {
$('#search-input').val('收入比例');
};

function getG() {
$('#search-input').val('聊天室');
};

function logout(){
  auth.signOut()
  .then(response => {
    window.location.assign("/login");
  })
}

