alert(123);
var WebApp = window.Telegram.WebApp;
await WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);