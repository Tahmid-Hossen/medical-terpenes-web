import BlogDetails from "@/components/Blogs/BlogDetails";
import {getBlogDetails} from "@/services/getBlogDetails";

const BlogDetailsPage = async ({params: {id}}) => {
  const blog = await getBlogDetails(id)
  return (
    <div>
      <BlogDetails blog={blog?.data} blogId={id}/>
    </div>
  );
};

export default BlogDetailsPage;