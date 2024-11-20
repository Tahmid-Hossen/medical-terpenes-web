// import Faq from "@/components/Faq/Faq";
import dynamic from "next/dynamic";

const Faq = dynamic(() => import('../../../components/Faq/Faq'), {ssr: false})


const FaqPage = () => {
  return (
    <>
      <Faq/>
    </>
  );
};

export default FaqPage;