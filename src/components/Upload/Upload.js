import React, { PureComponent } from 'react';
import { Upload } from 'antd';
import PropTypes from 'prop-types';
import $$ from 'cmn-utils';
import config from '../../config';
// Get parameters from the global configuration
const request = config.request || {};

/**
 * Enable Upload to take the global proxy and carry global header information
 */
class uiUpload extends PureComponent {
  render() {
    const { headers, action, ...otherProps } = this.props;

    let newheaders = { ...headers };

    const uploadProps = { ...otherProps };

    if (request && request.withHeaders) {
      if ($$.isFunction(request.withHeaders)) {
        newheaders = { ...request.withHeaders(), ...newheaders };
      } else if ($$.isObject(request.withHeaders)) {
        newheaders = { ...request.withHeaders, ...newheaders };
      }
      uploadProps.headers = newheaders;
    }

    let nextURL = (request.prefix || '') + action;
    if (/^(http|https|ftp):\/\//.test(action)) {
      nextURL = action;
    }

    if (action) {
      uploadProps.action = nextURL;
    }

    return <Upload {...uploadProps} />;
  }
}

uiUpload.propTypes = {
  headers: PropTypes.object,
  action: PropTypes.string,
};

export default uiUpload;
