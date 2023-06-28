# fakeOS

## A project that emulates macOS Ventura with HTML, SCSS and JavaScript

- There is a menubar with selectable buttons that open modals for each menu, this menubar also includes a real-time clock that updates with the clock on the users computer
- There is a desktop with selectable icons that open modals for their respective app
- There is a dock, with selectable icons to open their respective modals as well. Each icon has a dot indicator to show when it is open.
- Each app modal can be closed with the mac close button at the top left of the modal
- The textedit app includes a Text Area which holds it's input until the page is reloaded, even if modal is closed
- the Reminders app has an input for new reminders and these are added to the reminder list when the user presses enter.
  - each reminder can be removed by pressing the circle button on the left of it.
- modal widths scale with size of viewport, down to a certain point where they break. This is a future fix I am planning to make.
