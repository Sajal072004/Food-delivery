import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import "./verify.css";

const Verify = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    alert('Verify component mounted'); // Add this line to confirm component mount

    if (success === "true" && orderId) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  }, [navigate, success, orderId]);

  return (
    <div className='verify'>
      <div className="spinner"></div> 
    </div>
  );
};

export default Verify;
