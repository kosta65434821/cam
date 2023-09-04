document.addEventListener("DOMContentLoaded", function(){
  try {
    var WebApp = window.Telegram.WebApp;
    alert(WebApp.WebAppUser);
    WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
    alert(123);
  } catch (e) {
    alert(e);
  };
});

function f1(event) {
  alert(123);
  WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
};
