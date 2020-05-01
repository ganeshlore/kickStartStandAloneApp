(function () {

    const { remote } = require("electron");
    var win = remote.BrowserWindow.getFocusedWindow();

    var title = document.querySelector("title").innerHTML;
    document.querySelector("#titleshown").innerHTML = title;

    var minimize = document.querySelector("#minimize");
    var maximize = document.querySelector("#maximize");
    var quit = document.querySelector("#quit");

    minimize.addEventListener("click", () => {
    win.minimize();
    });

    maximize.addEventListener("click", () => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
    });

    quit.addEventListener("click", () => {
    win.close();
    });

})();