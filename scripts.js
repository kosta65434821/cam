document.addEventListener("DOMContentLoaded", function(){
  var WebApp = window.Telegram.WebApp;
  try {
    //WebApp.showAlert(`Добро пожаловать, ${WebApp.initDataUnsafe.user.username}.`);
    Webcam.set({
      width: 350,
      height: 350
    });
    Webcam.attach('#camera');
  } catch (e) {
    alert(e);
  };
});

function f1(event) {
  alert(123);
  WebApp.showAlert(`Добро пожаловать, @${WebApp.initDataUnsafe.user.username}.`);
};
