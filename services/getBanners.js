// export const getBanners = async () => {
//   try {
//     const response = await fetch(`${process.env.API_URL}/banners`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching banners:', error);
//     return {error: true, message: error.message, data: {banners: [], count: 0}};
//   }
// };


export const getBanners = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/banners`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching banners:', error);
    return {error: true, message: error.message, data: {banners: [], count: 0}};
  }
};