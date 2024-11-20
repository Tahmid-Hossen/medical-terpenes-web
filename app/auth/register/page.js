// import Register from "@/components/Auth/Register/Register";
import dynamic from "next/dynamic";

const Register = dynamic(() => import('../../../components/Auth/Register/Register'), {ssr: false})

const RegisterPage = () => {
  return (
    <>
      <Register/>
    </>
  );
};

export default RegisterPage;