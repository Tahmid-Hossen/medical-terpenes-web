import BannerTerpenes from "@/components/Banner/CategoryBanner";
import {getBanners} from "@/services/getBanners";

import FirstBannerTerpenesData from "@/data/banner/first-terpenes-banner.json";
import SecondBannerTerpenesData from "@/data/banner/second-terpenes-banner.json";
import ThirdBannerTerpenesDataOne from "@/data/banner/third-terpenes-banner-one.json";
import ThirdBannerTerpenesDataTwo from "@/data/banner/third-terpenes-banner-two.json";

import BannerTerpenesTwo from "@/components/Banner/BannerTerpenesTwo";
import BannerTerpenesThree from "@/components/Banner/BannerTerpenesThree";
import Testimonial from "@/components/IconBox/Testimonial";
import FreeConsultation from "@/components/Banner/FreeConsultation";
import ExploreOurProducts from "@/components/IconBox/ExploreOurProducts";
import ProductTableData from "@/components/ProductTableData/ProductTableData";
import CountdownMain from "@/components/Countdown/CountdownMain";
import DeliverySection from "@/components/DeliverySection/DeliverySection";
import BlogPostGridHome from "@/components/Blog/BlogPostGridHome";
import VideoBanner from "@/components/VideoSection/VideoBanner";
import FaqHome from "@/components/Others/FaqHome";
import HeroSliderHome from "@/components/Sliders/HeroSliderHome";
import {getCategories} from "@/services/getCategories";
// import HeroSliderHome from "@/components/Sliders/HeroSliderHome";
// import {getCategories} from "@/services/getCategories";


export default async function Home() {
  const bannerData = await getBanners();
  const categoriesData = await getCategories();
  return (
    <>
      {/*<HeroSliderHome heroSliderData={bannerData?.data?.banners}/>*/}
      <HeroSliderHome heroSliderData={bannerData?.data?.banners}/>
      <BannerTerpenes categoriesData={categoriesData?.data?.categories} bannerData={FirstBannerTerpenesData}/>
      <BannerTerpenesTwo bannerData={SecondBannerTerpenesData}/>
      <BannerTerpenesThree bannerData={ThirdBannerTerpenesDataOne} bannerDataTwo={ThirdBannerTerpenesDataTwo}/>
      <Testimonial/>
      <FreeConsultation/>
      <ExploreOurProducts/>
      <ProductTableData/>
      <CountdownMain
        backgroundImage='/assets/images/banner/furniture_banner3.jpg'
        title='Ultra Candy Best Offer For Our Customers'
        subtitle="Ultra Candy sales are booming, thanks to its sweet aroma reminiscent of sugary treats. Loved for both its delightful taste and potential therapeutic benefits, it's become a favorite among cannabis enthusiasts, captivating both recreational users and those seeking relief "
        url='/shop/terpenes'
        dateTime='November 07, 2024 12:12:00'/>

      <DeliverySection/>
      <BlogPostGridHome subtitle="Read Our Latest News" title="News & Article"/>

      <FaqHome/>
      <VideoBanner/>
    </>
  );
}
