import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AntdIcon from 'antd/lib/icon';

/**
 * Font icon, compatible with antd icon
 */
class Icon extends PureComponent {
  render() {
    const {
      prefixCls,
      type,
      className,
      children,
      font,
      antd,
      spin,
      ...props
    } = this.props;
    const cn = classnames(
      prefixCls,
      {
        [font]: font,
        [`${font  }-${  type}`]: font && type,
        spin
      },
      className
    );
    if (/^&#x.+;$/.test(type)) {
      return <i className={cn} {...props}>{type}</i>
    }
    return antd ? (
      <AntdIcon type={type} className={className} spin={spin} {...props}>
        {children}
      </AntdIcon>
    ) : (
      <i className={cn} {...props}>
        {children}
      </i>
    );
  }
}

Icon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  font: PropTypes.string,
  antd: PropTypes.bool,
  spin: PropTypes.bool
};

Icon.defaultProps = {
  prefixCls: 'antui-icon',
  className: '',
  font: 'ad'
};

export default Icon;
