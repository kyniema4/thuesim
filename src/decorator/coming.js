import React, { PureComponent } from 'react';
import Coming from '../components/Pages/Coming';

/**
 * Adding this decorator to a class indicates that the class is an unfinished function.
 * Will be displayed as a friendly page that comes ready to install, you can set the countdown time
 * @param {*} options Coming component options
 */
const coming = options => WrappedComponent => class extends PureComponent {
  render() {
    return (
      <Coming {...options}>
        <WrappedComponent {...this.props} />
      </Coming>
    );
  }
};

export default coming;
