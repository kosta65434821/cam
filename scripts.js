document.addEventListener("DOMContentLoaded", function(){
  var WebApp = window.Telegram.WebApp;
  alert(WebApp.initDataUnsafe.user);
  try {
    WebApp.showAlert(`Добро пожаловать, ${WebApp.initDataUnsafe.user.first_name}.`);
    alert(123);
  } catch (e) {
    alert(e);
  };
});

function f1(event) {
  alert(123);
  WebApp.showAlert(`Добро пожаловать, @${WebApp.initDataUnsafe.user.username}.`);
};
