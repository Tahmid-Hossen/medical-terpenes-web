import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import Link from "next/link";

const RecentPostWidget = ({blog}) => {
  return (
    <li>
      <Link href={`/blogs/${blog?._id}`}>
        <IoIosArrowForward/>
        <span className="categories-name">{blog?.title}</span>
        {/*<span className="categories-num">({blog.count})</span>*/}
      </Link>
    </li>
  );
};

export default RecentPostWidget;