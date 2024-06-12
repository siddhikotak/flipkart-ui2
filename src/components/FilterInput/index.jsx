import PropTypes from "prop-types";
import "./style.css";
function FilterInput(props) {
  const { value, onInputChange, placeholder } = props;

  return (
    <div style={{ height: "40px", padding: 10 }}>
      <div className="bold">Filter By Title / Order ID</div>
      <input
        className="filter-input"
        tabIndex={-1}
        aria-label={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FilterInput;
