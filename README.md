## Embedded Browser Component for React Apps

To install package

```
npm install embedded-browser-react
```

```
import React from 'react';
import ReactDOM from 'react-dom';
import PreviewBrowser from 'embedded-browser-react';
 
ReactDOM.render(<PreviewBrowser url="" theme="dark" />, document.body);
```

PreviewBrowser component acceps 2 props 

* url - the url of page to be displayed in the embeded browser
* theme - dark/light. default is light 
