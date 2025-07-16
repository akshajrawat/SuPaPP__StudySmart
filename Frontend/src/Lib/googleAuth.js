import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../Store/Slice/authSlice";

const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await dispatch(googleLogin(tokenResponse)).unwrap();
        navigate("/Supapp");
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  });

  return login;
};

export default useGoogleAuth;
