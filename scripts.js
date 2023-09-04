document.addEventListener("DOMContentLoaded", function(){
  try {
    var WebApp = window.Telegram.WebApp;
    WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
    alert(123);
  } catch (e) {
    alert(e);
  };
});

function f1() {
  alert(123);
  WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
};
