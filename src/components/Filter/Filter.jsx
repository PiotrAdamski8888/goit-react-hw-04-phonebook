import PropTypes from 'prop-types';
export const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={onFilterChange}
    />
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
