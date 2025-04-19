
import React from "react";
import { motion } from "framer-motion";


function ResumeBtn() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // put it in the public folder
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
        className="flex items-center justify-center mt-4"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '3rem',
            marginBottom: 0,
        }}
    >
    <motion.a
      className="button-primary"
      onClick={handleDownload}
      style={{cursor: "pointer"}}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Resume
    </motion.a>
    </div>
  );
}

export default ResumeBtn;
