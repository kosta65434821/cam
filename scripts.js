document.addEventListener("DOMContentLoaded", function(){
  var WebApp = window.Telegram.WebApp;
  WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
  alert(123);
});
