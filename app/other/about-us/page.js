// import About from "@/components/About/About";
import dynamic from "next/dynamic";

const About = dynamic(() => import('../../../components/About/About'), {ssr: false})


const AboutUsPage = () => {
  return (
    <>
      <About/>
    </>
  );
};

export default AboutUsPage;