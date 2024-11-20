// import Login from "@/components/Auth/Login/Login";
import dynamic from "next/dynamic";

const ForgetPassword = dynamic(() => import('../../../components/Auth/ForgetPassword'), {ssr: false})

const ForgetPasswordPage = () => {
  return (
    <>
      <ForgetPassword/>
    </>
  );
};

export default ForgetPasswordPage;