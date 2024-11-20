import {SlCalender} from "react-icons/sl";
import Image from "next/image";
import {formatDate} from "@/app/utils/formatDate";

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
              <SlCalender/> {formatDate(post.created_at) ?? 'N/A'}
            </a>
          </li>
        </ul>
        <div className="blog-img">
          <Image
            style={{height: '100%', width: '100%'}}
            className="rounded"
            src={post.image ? `${process.env.NEXT_PUBLIC_API_URL}/public${post.image}` : '/assets/images/blog/blog_img1.jpg'}
            alt={post.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/images/blog/blog_img1.jpg';
            }}
            crossOrigin='anonymous'
            width={752} height={569}
          />
        </div>
        <div className="blog-content">
          <div className="blog-text"
               dangerouslySetInnerHTML={{__html: post?.content ?? 'N/A'}}
          />
        </div>
      </div>

    </>
  );
};

export default BlogContents;
