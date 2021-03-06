import React from "react";
import './Wave.css';

const Wave = ({navbarLightMode, waveType}) => {

  let wave;
  if (!navbarLightMode) {
    if (waveType === 1) {
      wave =
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
                  d="M0,64L60,64C120,64,240,64,360,85.3C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </>
    } else if (waveType === 2) {
      wave =
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
                  d="M0,64L60,64C120,64,240,64,360,85.3C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </>
    } else if (waveType === 3) {
      wave =
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
                  d="M0,192L60,192C120,192,240,192,360,165.3C480,139,600,85,720,80C840,75,960,117,1080,154.7C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </>
    } else if (waveType === 4) {
      wave =
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
                  d="M0,192L60,192C120,192,240,192,360,165.3C480,139,600,85,720,80C840,75,960,117,1080,154.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </>
    }
  } else {
    if (waveType === 1) {
      wave =
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#282828" fill-opacity="1"
                  d="M0,64L60,64C120,64,240,64,360,85.3C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </>
    } else if (waveType === 2) {
      wave =
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#282828" fill-opacity="1"
                  d="M0,64L60,64C120,64,240,64,360,85.3C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </>
    } else if (waveType === 3) {
      wave =
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#282828" fill-opacity="1"
                  d="M0,192L60,192C120,192,240,192,360,165.3C480,139,600,85,720,80C840,75,960,117,1080,154.7C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </>
    } else if (waveType === 4) {
      wave =
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#282828" fill-opacity="1"
                  d="M0,192L60,192C120,192,240,192,360,165.3C480,139,600,85,720,80C840,75,960,117,1080,154.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </>
    }
  }

  return (
    <div className={navbarLightMode ? 'wave lightMode' : 'wave'}>
      {wave}
    </div>
  )
}

export default Wave;