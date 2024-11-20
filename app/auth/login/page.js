// import Login from "@/components/Auth/Login/Login";
import dynamic from "next/dynamic";

const Login = dynamic(() => import('../../../components/Auth/Login/Login'), {ssr: false})

const LoginPage = () => {
  return (
    <>
      <Login/>
    </>
  );
};

export default LoginPage;