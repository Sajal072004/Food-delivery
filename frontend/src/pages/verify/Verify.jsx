import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./verify.css";

const Verify = () => {
  const navigate = useNavigate();
  navigate("/");

  useEffect(() => {
    // Directly navigate to /myorders without any verification
    navigate("/myorders");
  }, [navigate]);

  return (
    <div className='verify'>
      <div className="spinner"></div> 
    </div>
  );
};

export default Verify;
