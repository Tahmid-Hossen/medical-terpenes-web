import React from 'react';

const TagsWidget = ({tag}) => {
  return (
    <button
      className="btn-sm btn-radius staggered-animation">
      {tag}
    </button>
  );
};

export default TagsWidget;