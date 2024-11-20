"use client"

const WidgetsWrapper = ({children, title}) => {
  return (
    <div className="widget">
      <h5 className="widget__title">{title}</h5>
      {children}
    </div>
  );
};

export default WidgetsWrapper;