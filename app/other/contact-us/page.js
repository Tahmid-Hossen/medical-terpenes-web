// import ContactUs from "@/components/ContactUs/ContactUs";
import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import('../../../components/ContactUs/ContactUs'), {ssr: false})


const ContactPage = () => {
  return (
    <>
      <ContactUs/>
    </>
  );
};

export default ContactPage;