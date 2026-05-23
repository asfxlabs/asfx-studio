const {
  app,
  BrowserWindow,
  ipcMain,
  Menu
} = require("electron");

const remoteMain =
  require("@electron/remote/main");



remoteMain.initialize();

ipcMain.handle(
  "get-file-path",
  async (event, file) => {

    return file.path;
  }
);

ipcMain.on(
  "debug-log",
  (event, message) => {

    console.log(message);

  }
);

ipcMain.on(
  "debug-error",
  (event, message) => {

    console.error(message);

  }
);

let mainWindow;
let debugWindow;

let logBuffer = [];

const originalLog = console.log;
const originalError = console.error;

console.log = (...args) => {
  const message = args.join(" ");
  logBuffer.push(message);
  originalLog(...args);

  if (debugWindow) {
    debugWindow.webContents.executeJavaScript(
      `window.addLog(${JSON.stringify(message)})`
    );
  }
};

console.error = (...args) => {
  const message = "[ERROR] " + args.join(" ");
  logBuffer.push(message);
  originalError(...args);

  if (debugWindow) {
    debugWindow.webContents.executeJavaScript(
      `window.addLog(${JSON.stringify(message)})`
    );
  }
};

function createWindow() {

  mainWindow = new BrowserWindow({

    width: 1200,

    height: 800,

    backgroundColor: "#1e1e1e",

    webPreferences: {

      nodeIntegration: true,

      contextIsolation: false,

      sandbox: false,

      webSecurity: false,

      allowRunningInsecureContent: true
    }
  });

  remoteMain.enable(
    mainWindow.webContents
  );

  mainWindow.loadFile(
    "index.html"
  );

  // MENU

  const menu =
    Menu.buildFromTemplate([

      {
        label: "File",

        submenu: [

          {
            role: "quit"
          }

        ]
      },

      {
        label: "Edit",

        submenu: [

          { role: "undo" },
          { role: "redo" },
          { type: "separator" },
          { role: "cut" },
          { role: "copy" },
          { role: "paste" }

        ]
      },

      {
  label: "View",

  submenu: [

    {

      label: "Debug Console",

      click() {

        createDebugWindow();

      }
    },

    {

      label: "Reload",

      click() {

        if (debugWindow) {

          debugWindow.close();
        }

        mainWindow.reload();

      }
    }

  ]
},

      {
        label: "Window",

        submenu: [

          { role: "minimize" },
          { role: "close" }

        ]
      }

    ]);

  Menu.setApplicationMenu(menu);

  // MIRROR LOGS

  // MIRROR LOGS

const originalLog =
  console.log;

const originalError =
  console.error;

console.log = (...args) => {

  originalLog(...args);

  if (debugWindow) {

    debugWindow.webContents.executeJavaScript(
      `window.addLog(${JSON.stringify(
        args.join(" ")
      )})`
    );
  }
};

console.error = (...args) => {

  originalError(...args);

  if (debugWindow) {

    debugWindow.webContents.executeJavaScript(
      `window.addLog("[ERROR] " + ${JSON.stringify(
        args.join(" ")
      )})`
    );
  }
};

}

function createDebugWindow() {
  if (debugWindow) {
    debugWindow.focus();
    return;
  }

  debugWindow = new BrowserWindow({
    width: 900,
    height: 500,
    title: "ASFX Debug Console",
    backgroundColor: "#111111",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  debugWindow.loadURL(`data:text/html,
    <html>
    <body style="background:#111;color:#00ff88;font-family:Consolas;padding:10px;white-space:pre-wrap;overflow-y:auto;">
      <div id="log"></div>
      <script>
        window.addLog = (text) => {
          const div = document.getElementById("log");
          div.innerText += text + "\\n";
          window.scrollTo(0, document.body.scrollHeight);
        };
        // Populate with buffer from main process
        require('electron').ipcRenderer.invoke('get-log-buffer').then(buffer => {
          buffer.forEach(line => window.addLog(line));
        });
      </script>
    </body>
    </html>
  `);

  debugWindow.on("closed", () => {
    debugWindow = null;
  });
}

ipcMain.handle("get-log-buffer", async () => {
  return logBuffer;
});

app.whenReady().then(() => {

  createWindow();

});