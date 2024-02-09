// components/layout/AboutLayout.tsx

import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import AboutHeader from './AboutHeader'

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default AboutLayout;
