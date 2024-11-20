// import WholesaleRegistration from "@/components/Others/WholesaleRegistration";
import dynamic from "next/dynamic";

const WholesaleRegistration = dynamic(() => import("../../components/Others/WholesaleRegistration"), {
  ssr: false,
});


const WholesalePage = () => {
  return (
    <>
      <WholesaleRegistration/>
    </>
  );
};

export default WholesalePage;