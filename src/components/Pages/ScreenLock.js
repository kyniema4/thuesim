import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import intl from "react-intl-universal";
import { Layout, Button } from 'antd';

import { routerLinks } from "../../routes/constant";
import pattern from '../../assets/images/pattern.png';
import PatternLock from '../PatternLock';
import Clock from '../Clock';
import Mask from '../Mask';
import messages from './messages';
import CSSAnimate from '../CSSAnimate';
const { Content } = Layout;

/**
 * Lock screen interface
 */
class ScreenLock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPattern: false,
      patternError: null
    };
  }

  onChange = lock => {
    if (lock) {
      this.context.router.history.replace(routerLinks['Dashboard']);
    } else {
      this.setState({
        patternError: true
      });
    }
  };

  togglePattern = () => {
    const { showPattern } = this.state;
    this.setState({
      showPattern: !showPattern
    });
  };

  render() {
    const { title } = this.props;
    const { patternError, showPattern } = this.state;
    return (
      <Layout className="full-layout screen-lock-page">
        <Content>
          <div className="container">
            <div className="pattern-logo">
              <img src='/images/logo1.png' alt="logo" />
              <b>LANIF</b>
              <span>Admin</span>
            </div>
            <div className="patter-container">
              <div className="patter-title">{title || intl.formatMessage(messages.welcomeBack)}</div>
              <p>{intl.formatMessage(messages.useUnlock)}</p>
              <CSSAnimate
                className="animated-short"
                type={patternError ? 'shake' : ''}
                callback={() => this.setState({ patternError: false })}
              >
                <PatternLock lock="14753" onChange={this.onChange} />
              </CSSAnimate>
            </div>
            <div className="patter-tip">
              <Button
                type="primary"
                icon="question-circle"
                onClick={this.togglePattern}
              >
                {intl.formatMessage(messages.patternHint)}
              </Button>
            </div>
          </div>
          <Clock />
        </Content>
        <Mask visible={showPattern} onClose={this.togglePattern}>
          <CSSAnimate
            className="animated-short pattern-tip-modal"
            type={showPattern ? 'flipInY' : 'fadeOutUp'}
          >
            <img src={pattern} alt="14753" />
          </CSSAnimate>
        </Mask>
      </Layout>
    );
  }
}


ScreenLock.propTypes = {
  title: PropTypes.string,
};

ScreenLock.contextTypes = {
  router: PropTypes.object
};

export default ScreenLock;
