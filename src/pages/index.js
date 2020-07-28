import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import cx from 'classnames';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function setViewportProperty(doc) {
    var prevClientHeight;
    function handleResize() {
      var clientHeight = doc.clientHeight;
      if (clientHeight === prevClientHeight) return;
      requestAnimationFrame(function updateViewportHeight() {
        doc.style.setProperty('--vh', clientHeight * 0.01 + 'px');
        prevClientHeight = clientHeight;
      });
    }
    handleResize();
    return handleResize;
  }

  useEffect(() => {
    window.addEventListener(
      'resize',
      setViewportProperty(document.documentElement),
    );
  });

  return (
    <div className='font-inter font-bold text-xl xl:text-2xl'>
      <Helmet>
        <title>PostCSS Viewport Height Correction test</title>
      </Helmet>
      <div className='flex flex-col justify-between min-h-screen p-8 bg-blue-100'>
        <div className='text-black text-center'>Welcome to 100vh world!</div>
        <div className='flex justify-center'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='w-full max-w-md p-4 bg-blue-500 rounded font-bold text-white'
          >
            Do the thing!
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center min-h-screen p-4 bg-blue-900'>
        <div className='text-white text-center'>
          This panel should begin immediately upon scrolling.
        </div>
      </div>
      <div
        className={cx(
          isMenuOpen ? 'translate-x-0' : '-translate-x-full',
          'fixed left-0 top-0 z-50 flex flex-col justify-between w-4/5 lg:w-1/2 h-screen p-8 bg-purple-700 transform transition duration-500 ease-in-out',
        )}
      >
        <div className='text-white text-center'>
          Does this menu overflow the screen?
        </div>
        <div className='flex justify-center'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='w-full max-w-md mt-8 p-4 bg-pink-500 rounded font-bold text-white'
          >
            Undo the thing...
          </button>
        </div>
        <div className='absolute left-0 bottom-0 text-xs text-pink-200 px-1'>
          Can you see me?
        </div>
      </div>
    </div>
  );
};

export default Index;
