import React, { ReactNode } from "react";

interface GlowingBackgroundWrapperProps {
  children: ReactNode;
}

const GlowingBackgroundWrapper: React.FC<GlowingBackgroundWrapperProps> = ({ children }) => {
  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 bg-black overflow-hidden text-white -z-10">
        {/* Top Left Circle */}
        <div className="absolute top-[-150px] left-[-150px] h-[350px] w-[350px] bg-[#a020f0] rounded-full blur-[160px]"></div>

        {/* Top Right Circle */}
        <div className="absolute top-[-150px] right-[-150px] h-[350px] w-[350px] bg-[#a020f0] rounded-full blur-[160px]"></div>

        {/* Bottom Left Circle */}
        <div className="absolute bottom-[-150px] left-[-150px] h-[350px] w-[350px] bg-[#a020f0] rounded-full blur-[160px]"></div>

        {/* Bottom Right Circle */}
        <div className="absolute bottom-[-150px] right-[-150px] h-[350px] w-[350px] bg-[#a020f0] rounded-full blur-[160px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen w-full text-white">
        {children}
      </div>
    </>
  );
};

export default GlowingBackgroundWrapper;
