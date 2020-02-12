import './style/index.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { Typography } from 'antd';
import intl from "react-intl-universal";
import messages from './messages';

const { Title, Paragraph } = Typography;

const Footer = ({ className }) => (

  <div className={className}>
    <Paragraph>
        <a href="https://www.facebook.com" className="footer-text"> © {(new Date().getFullYear())} SimCode!</a>
    </Paragraph>
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: 'component-footer',
};

export default Footer;
