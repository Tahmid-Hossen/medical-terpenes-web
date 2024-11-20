import { toast } from "react-toastify";

export const baseUrl='http://localhost:4000'
// api.js

export async function fetchImage(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error fetching image:', error);
    return '/assets/images/blog/blog_img1.jpg'; // fallback image
  }
}

export const fetchBanners = async () => {
  try {
      const response = await fetch(`${baseUrl}/banners`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("🚀 ~ fetchBanners ~ data:", data)
      return data;
  } catch (error) {
      console.error('Error fetching banners:', error);
      return { error: true, message: error.message, data: { banners: [], count: 0 } };
  }
};

export const fetchPosts = async () => {
  try {
      const response = await fetch(`${baseUrl}/get-all-post`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching posts:', error);
      return { error: true, message: error.message, data: { posts: [], count: 0 } };
  }
};

export const fetchAllCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Categories:', error);
    return { error: true, message: error.message, data: { categories: [], count: 0 } };
  }
};
