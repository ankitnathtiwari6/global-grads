import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <>
      {/* Add padding to main content to prevent overlap */}
      <style jsx global>{`
        @media (max-width: 768px) {
          main {
            padding-bottom: 4rem;
          }
        }
      `}</style>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 md:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center gap-4">
            <a
              href="tel:+919696902475"
              className="flex-1 flex items-center justify-center bg-[#dd1d2d] text-white px-4 py-2 rounded-lg hover:bg-[#dd1d2d]/90 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-medium">Call Now</span>
            </a>
            <a
              href="https://wa.me/919696902475"
              className="flex-1 flex items-center justify-center bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#25D366]/90 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileBottomBar;
