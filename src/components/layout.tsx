import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex-col items-center justify-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
