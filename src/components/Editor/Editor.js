import React, { PureComponent } from 'react';
import E from 'wangeditor';
import PropTypes from 'prop-types';
import defaultConfig from './config';
import './style/index.less';

class Editor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value
      });
      this.onChange(nextProps.value);
    }
  }

  componentDidMount() {
    const { value, otherProps } = this.props;
    this.editor = new E(this.editorDom);
    this.editor.customConfig = {
      ...defaultConfig,
      onchange: this.onChange,
      ...otherProps
    };
    this.editor.create();
    this.editor.txt.html(value);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ('value' in this.props && prevState.value !== this.state.value) {
      this.editor.txt.html(this.state.value || '');
    }
  }

  onChange = html => {
    const { onChange } = this.props;
    if (onChange) onChange(html);
  };

  render() {
    return (
      <div
        className="antui-editor"
        ref={node => {
          this.editorDom = node;
        }}
      />
    );
  }
}

Editor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  otherProps: PropTypes.any,
};

export default Editor;
