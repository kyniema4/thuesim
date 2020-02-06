import './style/index.less';
import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
// import intl from "react-intl-universal";
// import messages from './messages';
const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

const DropDrapBox = ({ id, left, top, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'box' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  )
};


DropDrapBox.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  hideSourceOnDrag: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

DropDrapBox.defaultProps = {
  hideSourceOnDrag: true,
};

export default DropDrapBox;
