// import Login from "@/components/Auth/Login/Login";
import dynamic from "next/dynamic";

const PasswordReset = dynamic(() => import('../../../../components/Auth/PasswordReset'), {ssr: false})

const PasswordResetPage = ({params: {token}}) => {
  return (
    <>
      <PasswordReset resetToken={token}/>
    </>
  );
};

export default PasswordResetPage;