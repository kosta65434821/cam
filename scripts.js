document.addEventListener("DOMContentLoaded", function(){
  alert(123);
  var WebApp = window.Telegram.WebApp;
  WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
});
