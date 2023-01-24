import React from 'react';
import './styles.css';

export default ({ url, theme, children }) => {
  const PARENT_CONTAINER = "browser-in-browser-poiuytrewasdfghj";
  const IFRAME_ID = "browser-in-browser-mokmijnuhb";
  const URL_HEADING_ID = "browser-in-browser-zdrtxcgyvhu";
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  const defaultUrl = url || "/";

  const iframeWindow = () => document.getElementById(IFRAME_ID).contentWindow;

  const setUrlInHeader = () => {
    if (!children) {
      let headerHeading = document.getElementById(URL_HEADING_ID);
      const frameUrl = iframeWindow().location.href;
      if (headerHeading.innerHTML !== frameUrl) headerHeading.innerHTML = frameUrl;
    }
  }

  const back = () => {
    if (!children) {
      iframeWindow().history.back();
      setTimeout(setUrlInHeader, 5);
    }
  }

  const forward = () => {
    if (!children) {
      iframeWindow().history.forward();
      setTimeout(setUrlInHeader, 5);
    }
  }

  const reload = () => !children ? iframeWindow().location.reload() : null;

  const contentWindowClickHandler = () => {
    !children ? setTimeout(setUrlInHeader, 5) : null;
  }

  const onFrameLoad = () => {
    if (!children) {
      setUrlInHeader();
      document.getElementById(PARENT_CONTAINER).style.display = 'block';
      document.getElementById(IFRAME_ID).contentDocument.body.addEventListener('click', contentWindowClickHandler);
    }
  }

  const openInNewWindow = () => !children ? 
    window.open(iframeWindow().location.href) : null;

  return (
    <div id={PARENT_CONTAINER} className="container">
      <div className={`header ${themeClass}`}>
        <button onClick={back} className='btn al-itm-c mr-rt-4 fs-18'>
          <svg width="18" height="18" viewBox="-8 -20 100 100" fill="none">
            <path className="fill" d="M5 32C2.23858 32 0 34.2386 0 37C0 39.7614 2.23858 42 5 42L5 32ZM80.5355 40.5355C82.4882 38.5829 82.4882 35.4171 80.5355 33.4645L48.7157 1.64466C46.7631 -0.307961 43.5973 -0.307961 41.6447 1.64466C39.692 3.59728 39.692 6.76311 41.6447 8.71573L69.9289 37L41.6447 65.2843C39.692 67.2369 39.692 70.4027 41.6447 72.3553C43.5973 74.308 46.7631 74.308 48.7157 72.3553L80.5355 40.5355ZM5 42L77 42V32L5 32L5 42Z" fill="white" />
          </svg>
        </button>
        <button onClick={forward} className='btn al-itm-c mr-rt-4 fs-18'>
          <svg width="18" height="18" viewBox="-8 -20 100 100" fill="none">
            <path className="fill" d="M1.46447 33.4645C-0.488155 35.4171 -0.488155 38.5829 1.46447 40.5355L33.2843 72.3553C35.2369 74.308 38.4027 74.308 40.3553 72.3553C42.308 70.4027 42.308 67.2369 40.3553 65.2843L12.0711 37L40.3553 8.71573C42.308 6.76311 42.308 3.59728 40.3553 1.64466C38.4027 -0.307961 35.2369 -0.307961 33.2843 1.64466L1.46447 33.4645ZM77 42C79.7614 42 82 39.7614 82 37C82 34.2386 79.7614 32 77 32V42ZM5 42H77V32H5V42Z" fill="white" />
          </svg>
        </button>
        <button onClick={reload} className='btn mr-rt-4 fs-24'>
          <svg width="18" height="18" viewBox="-8 -12 100 100" fill="none">
            <path className="stroke" d="M67.8868 61.1503C63.2215 67.3017 56.6531 71.7379 49.2045 73.7682C41.7558 75.7986 33.8448 75.3092 26.7032 72.3761C19.5617 69.4431 13.5903 64.231 9.71874 57.5515C5.84723 50.8719 4.29288 43.0997 5.29771 35.4449C6.30253 27.7902 9.81013 20.6825 15.2744 15.2284C20.7387 9.77433 27.8529 6.28001 35.5096 5.2895C43.1662 4.29898 50.9355 5.86785 57.6078 9.75184C64.2801 13.6358 69.481 19.617 72.4007 26.764" stroke="white" strokeWidth="10" strokeLinecap="round" />
            <path className="fill" d="M72.8459 48.1315C72.0633 48.9379 70.7699 48.9414 69.9829 48.1391L51.3044 29.0979C50.0649 27.8344 50.9568 25.7021 52.7267 25.6974L89.9815 25.5974C91.7514 25.5927 92.6548 27.7201 91.4221 28.9903L72.8459 48.1315Z" fill="white" />
          </svg>
        </button>
        <div className='url-bar mr-rt-4 mr-lt-4'>
          <span id={URL_HEADING_ID} className="txt-elip">http://localhost:8080</span>
        </div>
        <button onClick={openInNewWindow} className='btn fs-22 mr-lt-4'>
          <svg viewBox="0 -10 100 100" width="18" height="18" fill="none">
            <path className="fill" fill="white" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
            <polygon className="fill" fill="white" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
          </svg>
        </button>
      </div>
      {!children ? <iframe
        id={IFRAME_ID}
        title="editor"
        src={defaultUrl}
        width="100%"
        loading='lazy'
        onLoad={onFrameLoad}
        allowFullScreen
        className="windowFrame"
      /> : children}
    </div>
  )
};