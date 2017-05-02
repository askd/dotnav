import React from 'react';
import PropTypes from 'prop-types';

export default class Dotnav extends React.Component {
  render() {
    const { withArrows, count, index, classes, handleChange } = this.props;

    if (count < 2) return null;

    return (
      <nav className = { classes.root }>
        { withArrows && <button
          type = 'button'
          className = { classes.arrowPrev }
          onClick = { () => handleChange((index <= 0) ? count - 1 : index - 1) }
        /> }
        <ul className = { classes.dots }>
          { Array.from({ length: count }, (_, i) =>
            <li
              key = { i }
              className = { index === i ? classes.dotActive : classes.dot }
              onClick = { () => handleChange(i) }
            />
          )}
        </ul>
        { withArrows && <button
          type = 'button'
          className = { classes.arrowNext }
          onClick = { () => handleChange((index >= count - 1) ? 0 : index + 1) }
        /> }
      </nav>
    );
  }
}

Dotnav.propTypes = {
  withArrows: PropTypes.bool,
  count: PropTypes.number,
  index: PropTypes.number,
  handleChange: PropTypes.func,
  classes: PropTypes.shape({
    root: PropTypes.string,
    dots: PropTypes.string,
    dot: PropTypes.string,
    dotActive: PropTypes.string,
    arrowPrev: PropTypes.string,
    arrowNext: PropTypes.string,
  }),
};

Dotnav.defaultProps = {
  withArrows: false,
  count: 0,
  index: 0,
  handleChange: () => {},
  classes: {
    root: 'dotnav',
    dots: 'dotnav-dots',
    dot: 'dotnav-dot',
    dotActive: 'dotnav-dot dotnav-dot_active',
    arrowPrev: 'dotnav-arrow dotnav-arrow_prev',
    arrowNext: 'dotnav-arrow dotnav-arrow_next',
  },
};
