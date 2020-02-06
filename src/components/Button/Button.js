import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from 'antd';
import './style/index.less';

const ButtonGroup = Button.Group;
/**
 *  Button
 */
class uiButton extends React.Component {
  static Group = ButtonGroup;

  render() {
    const { tooltip, prefixCls, ...otherProps } = this.props;
    return tooltip ? (
      <Tooltip overlayClassName={prefixCls} title={tooltip === true ? otherProps.title : tooltip}>
        <Button {...otherProps} />
      </Tooltip>
    ) : (
      <Button {...otherProps} />
    );
  }
}

uiButton.propTypes = {
  prefixCls: PropTypes.string,
  tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.node])
};

uiButton.defaultProps = {
  prefixCls: 'antui-button-tooltip',
};
export default uiButton;
