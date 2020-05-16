import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import mq from '../utils/MediaQueries';

const Modal = ({
  children,
  closeCb,
  maskColor,
  show,
  theme,
  themeBody,
  themeClose,
  title,
  width,
}) => {
  const [device, deviceSetter] = useState(mq());

  useEffect(() => {
    if (show === true) {
      window.document.getElementsByTagName('html')[0].className +=
        ' nwc--noscroll';
    } else {
      window.document.getElementsByTagName('html')[0].className -=
        ' nwc--noscroll';
    }
  }, [show]);

  if (show !== true) return false;

  const modalBody = {
    marginTop: 15,
    position: 'fixed',
    zIndex: 99999,
    maxHeight: '95%',
    overflow: 'scroll',
    textAlign: 'left',
    left: device === 'xs' || device === 'sm' ? '3%' : `${(100 - width) / 2}%`,
    top: 0,
  };

  const modalClose = {
    float: 'right',
    width: 40,
    height: 40,
    lineHeight: '18px',
    marginTop: -7,
  };

  const modalMask = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: maskColor,
    zIndex: 9999,
  };

  return (
    <aside data-test="component-modal" id="nwc--modal" className={theme}>
      <section
        id="nwc--modal-body"
        className={themeBody}
        style={{
          ...modalBody,
          width: device === 'xs' || device === 'sm' ? '94%' : `${width}%`,
        }}
      >
        {(title !== null || closeCb !== null) && (
          <header>
            <button
              type="button"
              onClick={() => closeCb()}
              style={modalClose}
              className={themeClose}
            >
              &times;
            </button>
            <span data-test="component-modal-title">{title}</span>
          </header>
        )}
        <br />
        {children}
        <br />
      </section>
      <aside
        id="nwc--modal-mask"
        style={modalMask}
        onClick={() => {
          if (closeCb !== null) closeCb();
        }}
      />
    </aside>
  );
};

Modal.defaultProps = {
  closeCb: null,
  maskColor: 'rgba(0,0,0,0.7)',
  show: false,
  theme: null,
  themeBody: 'bg--light shadow--lg radius--sm padding--md',
  themeClose: 'font--cta border--none padding--none font--24 radius--lg',
  title: null,
  width: 80,
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  closeCb: PropTypes.func,
  maskColor: PropTypes.string,
  show: PropTypes.bool,
  theme: PropTypes.string,
  themeBody: PropTypes.string,
  themeClose: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
};

export default Modal;

/**
 * @property {object} children - Vadlid JSX object that you want displayed in the modal
 * @property {func} closeCb - A callback to run when the close button or the modal mask is clicked
 * @property {string} maskColor - The color of the alpha mask, in rgba format (will be black if none supplied)
 * @property  {bool} show - If the modal should be shown or not
 * @property {string} theme - Classes to be applied to the wrapper of the modal
 * @property {string} themeBody - Classes to be applied to the body of the modal
 * @property {string} themeClose - Classes to be applied to the close button of the modal
 * @property {string} title - The title displayed on the modal
 * @property {number} width - Width, in percent, of the modal, mobile will also 94% unless you override with css
 */
