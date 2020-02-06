import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';


class BaseComponent extends React.Component {
  /**
   * In the absence of the dispatch function, if you want to jump within the component, you can use the router to jump
   */
  notice = config.notice; // notification

  /**
   * History api route jump
   */
  get history() {
    return this.context.router.history;
  }
}

BaseComponent.contextTypes = {
  router: PropTypes.object
};


export default BaseComponent;
