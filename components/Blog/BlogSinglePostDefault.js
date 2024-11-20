import {Fragment} from "react";

import {SlCalender} from "react-icons/sl";
import {BsDot} from "react-icons/bs";
import Image from "next/image";

const BlogContents = ({post}) => {
  return (
    <>
      <div className="single-post">
        <h2 className="blog-title">
          {post.title}
        </h2>
        <ul className="blog-meta">
          <li>
            <a href="#">
              <SlCalender/> {post.publish_date ?? 'N/A'}
            </a>
          </li>
          <li>
            <a href="#">
              <BsDot color='#000' size={28}/> Published at {post.publish_time ?? 'N/A'}.
            </a>
          </li>

        </ul>
        <div className="blog-img">
          <Image
            // style={{ height: '300px'}}
            className="rounded"
            src={post.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/public${post.image}` : '/assets/images/blog/blog_img1.jpg'}
            alt={post.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/images/blog/blog_img1.jpg';
            }}
            crossOrigin='anonymous'
            width={100}
            height={100}
          />
        </div>
        <div className="blog-content">
          <div className="blog-text">
            <p>
              {post.content ?? 'N/A'}
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default BlogContents;
