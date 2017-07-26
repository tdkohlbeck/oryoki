const camera = require('./../../camera')
const recorder = require('./../../recorder')

module.exports = function () {
  const recorderStatus = recorder.getStatus()

  const submenu = [
    {
      label: 'Save Screenshot',
      accelerator: 'CmdOrCtrl+`',
      click (i, win) {
        camera.requestSaveScreenshot(win)
      }
    },
    {
      label: 'Copy Screenshot',
      accelerator: 'CmdOrCtrl+Shift+C',
      click (i, win) {
        camera.copyScreenshot(win)
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Start Recording',
      enabled: recorderStatus == 'idle',
      accelerator: 'CmdOrCtrl+Shift+P',
      click (i, win) {
        recorder.startRecording(win)
      }
    },
    {
      label: 'Stop Recording',
      enabled: recorderStatus == 'recording',
      accelerator: 'CmdOrCtrl+Alt+Shift+P',
      click () {
        recorder.stopRecording()
      }
    }
  ]

  return {
    label: 'Tools',
    submenu
  }
}