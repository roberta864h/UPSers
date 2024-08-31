import React from 'react';
import './Receipt.css';

function Receipt() {
  const handleGenerateReceipt = () => {
    // handle receipt generation
  };

  return (
    <div className="receipt">
      <button onClick={handleGenerateReceipt}>Generate Receipt</button>
    </div>
  );
}

export default Receipt;
