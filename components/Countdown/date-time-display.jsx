import PropTypes from "prop-types";
import clsx from "clsx";

const DateTimeDisplay = ({value, type, showType = true}) => {
  return (
    <span className={clsx("single-countdown", !showType && "hide-type")}>
      <span className="single-countdown__time">{value}</span>
      <span className="single-countdown__text">{showType ? type : ":"}</span>
    </span>
  );
};

DateTimeDisplay.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  showType: PropTypes.bool
};

export default DateTimeDisplay;