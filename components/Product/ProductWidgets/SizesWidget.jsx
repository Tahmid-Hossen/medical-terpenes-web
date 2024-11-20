import React from 'react';

const SizesWidget = ({size}) => {
  return (
    <>
      <li>
        <button>
          {size}
        </button>
      </li>
    </>
  );
};

export default SizesWidget;