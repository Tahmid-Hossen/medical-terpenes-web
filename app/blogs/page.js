// import Blogs from "@/components/Blogs/Blogs";
import dynamic from "next/dynamic";
import {getBlogs} from "@/services/getBlogs";

const Blogs = dynamic(() => import('../../components/Blogs/Blogs'), {ssr: false})

const BlogsPage = async () => {
  const blogs = await getBlogs()
  return (
    <>
      <Blogs blogs={blogs?.data?.posts}/>
    </>
  );
};

export default BlogsPage;
