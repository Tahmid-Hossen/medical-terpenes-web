import BlogContentPage from "@/components/Blogs/BlogContentPage";

const BlogDetails = ({blog, blogId}) => {

  return (
    <>
      <BlogContentPage blog={blog} blogId={blogId}/>
    </>
  );
};

export default BlogDetails;