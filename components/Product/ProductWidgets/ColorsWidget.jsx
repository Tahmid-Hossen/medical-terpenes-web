const ColorsWidget = ({color}) => {
  return (
    <li>
      <button style={{backgroundColor: color.colorCode}}></button>
    </li>
  );
};

export default ColorsWidget;