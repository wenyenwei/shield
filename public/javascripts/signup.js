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
const database = firebase.database();

// jQuery
$(document).ready(function() {

  $(document).on('click', '#register-btn', register); //註冊
  // $(document).on('click', '#google-reg', googleReg); //Google註冊
  // $(document).on('click', '#facebook-reg', facebookReg); //Facebook註冊

});

function register(){
  let fname = document.getElementById('first-name').value;
  let lname = document.getElementById('last-name').value;
  let email = document.getElementById('register-email').value;
  let password = document.getElementById('register-password').value;
  let full_name = fname + ' ' + lname;
  // console.log(email, password);
  if(fname === ''){
    showError('Please type in your first name');
  } else if(lname === ''){
    showError('Please type in your last name');
  } else {
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      database.ref('users/' + auth.currentUser.uid).push({
        name: full_name,
        email: auth.currentUser.email
      });
      window.location.assign("/");
    })
    .catch(error => {
      // console.log(error);
      showError(error.message);
    });
  }


};

function googleReg() {

}

function facebookReg() {

}

function showError(msg) {
  $('#reg-error').hide();
  $('#reg-error').text('');
  $('#reg-error').append(msg);
  $('#reg-error').show();
}
