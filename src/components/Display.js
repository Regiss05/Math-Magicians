import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.PureComponent {
  render = () => {
    const { display } = this.props;
    return (
      <div className="display">
        <h1 className="pixel font display-txt">{display}</h1>
      </div>
    );
  }
}

Display.propTypes = {
  display: PropTypes.string,
};

Display.defaultProps = {
  display: '0',
};

export default Display;
