import React from 'react';
import './styles.css';

export default ({ url, theme }) => {
  const PARENT_CONTAINER = "browser-in-browser-poiuytrewasdfghj";
  const IFRAME_ID = "browser-in-browser-mokmijnuhb";
  const URL_HEADING_ID = "browser-in-browser-zdrtxcgyvhu";
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  const defaultUrl = url || "http://localhost:8080/src/dummy.html";

  const iframeWindow = () => document.getElementById(IFRAME_ID).contentWindow;

  const setUrlInHeader = () => {
    let headerHeading = document.getElementById(URL_HEADING_ID);
    const frameUrl = iframeWindow().location.href;
    if (headerHeading.innerHTML !== frameUrl) headerHeading.innerHTML = frameUrl;
  }

  const back = () => {
    iframeWindow().history.back();
    setTimeout(setUrlInHeader, 5);
  }

  const forward = () => {
    iframeWindow().history.forward();
    setTimeout(setUrlInHeader, 5);
  }

  const reload = () => iframeWindow().location.reload();

  const contentWindowClickHandler = () => {
    setTimeout(setUrlInHeader, 5);
  }

  const onFrameLoad = () => {
    setUrlInHeader();
    document.getElementById(PARENT_CONTAINER).style.display = 'block';
    document.getElementById(IFRAME_ID).contentDocument.body.addEventListener('click', contentWindowClickHandler);
  }

  const openInNewWindow = () =>
    window.open(iframeWindow().location.href);

  return (
    <div id={PARENT_CONTAINER} className="container" style={{ display: 'none' }}>
      <div className={`header header-${themeClass}`}>
        <button onClick={back} className={`btn al-itm-c mr-rt-4 rotated-180 fs-18 ${themeClass}`}>&#x2794;</button>
        <button onClick={forward} className={`btn al-itm-c mr-rt-4 fs-18 ${themeClass}`}>&#x2794;</button>
        <button onClick={reload} className={`btn mr-rt-4 fs-24 rotated-90 ${themeClass}`}>&#x21bb;</button>
        <div className={`url-bar mr-rt-4 mr-lt-4 ${themeClass}`}>
          <h1 id={URL_HEADING_ID} className={`txt-elip`} ></h1>
        </div>
        <button onClick={openInNewWindow} className={`btn fs-22 mr-lt-4 new-window ${themeClass}`}>&#x2610;</button>
      </div>
      <iframe
        id={IFRAME_ID}
        title="editor"
        src={defaultUrl}
        width="100%"
        onLoad={onFrameLoad}
        frameBorder="0"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        allowFullScreen
        className="windowFrame"
      />
    </div>
  )
};