import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {SlCalender} from "react-icons/sl";
import {BsDot} from "react-icons/bs";
import {formatDate} from "@/app/utils/formatDate";

const BlogCard = ({post}) => {
  return (
    <div className='blog-post d-flex flex-column'>
      <div className='blog-post__image'>
        <Link href={`/blogs/${post._id}`}>
          <Image
            width={408}
            height={230}
            src={`${post?.image ? `${process.env.NEXT_PUBLIC_API_URL}/public${post?.image}` : `/assets/images/blog/bloghome3.png`} `}
            alt={post.title}
            className='img-fluid'
            style={{width: '408px', height: '230px'}}
          />
        </Link>
      </div>
      <div className='blog-post__content d-flex flex-column flex-fill justify-content-between'>
        <div className='blog-text'>
          <h5 className='blog-title'>
            <Link href={`/blogs/${post._id}`}>
              {post.title}
            </Link>
          </h5>
          <div className='blog-paragraph'
               dangerouslySetInnerHTML={{__html: post.content.slice(0, 150) + '...'}}/>
        </div>
        <div>
          <Link href={`/blogs/${post._id}`}>
            <button
              className="radius-btn w-30 border-0 px-3 py-1 my-4 btn-radius staggered-animation custom-btn">
              Read More
            </button>
          </Link>
          <hr className='m-0'/>
          <ul className='blog-meta blog-post-grid-home-area__custom-blog-meta'>
            <li>
              <Link href={`/blogs/${post._id}`}>
                {/* <SlCalender /> {new Date(post.created_at).toLocaleDateString()} */}
                <SlCalender/> {formatDate(post.created_at) ?? 'N/A'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;