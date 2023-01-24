## Embedded Browser Component for React Apps

![embedded-browser-react](https://github.com/m-sakthi/embedded-browser-react/blob/master/src/screenshot.png?raw=true)

To install package

```
npm install embedded-browser-react
```

```
import React from 'react';
import ReactDOM from 'react-dom';
import PreviewBrowser from 'embedded-browser-react';

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<PreviewBrowser url="" theme="dark" />);
```

PreviewBrowser component acceps 2 props 

* url - the url of page to be displayed in the embeded browser
* theme - dark/light. default is light 

