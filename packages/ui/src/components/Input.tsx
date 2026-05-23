import React from 'react';
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ border: '1px solid #dce7ef', borderRadius: 12, padding: '0.7rem 0.9rem' }} />;
}
