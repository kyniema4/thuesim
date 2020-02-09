import React, { Component } from 'react';
import cx from "classnames";
import PropTypes from 'prop-types';
import './style/ripple.less';

/**
 * imitation material design ripple effect
 * */
class Ripple extends Component {
  onClick = e => {
    this.createRipple(e);
  };

  createRipple = e => {
    const btnWidth = this.element.clientWidth;
    const rect = this.element.getBoundingClientRect();
    const btnOffsetTop = rect.top;
    const btnOffsetLeft = rect.left;
    const posMouseX = e.pageX;
    const posMouseY = e.pageY;
    const rippleX = posMouseX - btnOffsetLeft;
    const rippleY = posMouseY - btnOffsetTop;

    const rippleAnimate = document.createElement('div');
    rippleAnimate.className = 'ripple-animate';
    const baseStyle = `
      top: ${rippleY - btnWidth}px;
      left: ${rippleX - btnWidth}px;
      width: ${btnWidth * 2}px;
      height: ${btnWidth * 2}px;
    `;
    rippleAnimate.style.cssText = baseStyle;
    this.element.appendChild(rippleAnimate);

    setTimeout(() => {
      requestAnimationFrame(() => {
        rippleAnimate.style.cssText =
          `${baseStyle
          } transform: scale(1); -webkit-transition: scale(1); opacity: 0;`;
      });
    }, 50); // If the delay is not added, the animation will not take effect, and the reason is not found.

    setTimeout(() => {
      rippleAnimate.remove();
    }, 750);
  };

  render() {
    const { children, type, ghost, ...otherProps } = this.props;
    return (
      <a
        ref={node => { this.element = node }}
        className={cx('ripple-btn', type, { ghost })}
        {...otherProps}
        role="presentation"
        onClick={e => this.onClick(e)}
      >
        <span>{children}</span>
      </a>
    );
  }
}

Ripple.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  ghost: PropTypes.bool,
};

export default Ripple;
