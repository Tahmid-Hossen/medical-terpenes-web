export const getBlogDetails = async (blogId) => {
  try {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post-details/${blogId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching banners:', error);
    return {error: true, message: error.message, data: {blog: [], count: 0}};
  }
};