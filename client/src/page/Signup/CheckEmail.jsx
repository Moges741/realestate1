import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../auth/supabase";

const CheckEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Confirm your email</h2>
      <p>
        We’ve sent a confirmation link to your email address.
        <br />
        Please check your inbox and click the link to continue.
      </p>
    </div>
  );
};

export default CheckEmail;
