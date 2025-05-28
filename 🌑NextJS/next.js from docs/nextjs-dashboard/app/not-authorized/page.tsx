'use client'
import React from 'react';

const NotAuthorized: React.FC = () => {
  return (
    <div>
      <h1>🚫 Access Denied</h1>
      <p>This page is for admins only.</p>
    </div>
  );
};

export default NotAuthorized;
