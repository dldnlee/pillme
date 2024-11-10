// SlideDownPopup.tsx

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import Image from "next/image";
import location from "@/app/assets/icons/location.svg";
import phone from "@/app/assets/icons/phone.svg";
import ConnectPharmacy from '@/app/components/ConnectPharmacy';
// import mapImage from '@/app/assets/map_image.png'; // Replace with your actual map image path or URL

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  address: string;
  number: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, address, number }) => {
  const [{ y }, api] = useSpring(() => ({ y: isOpen ? 0 : 1000 }));

  const bind = useDrag(
    ({ movement: [, my], memo = y.get(), last }) => {
      if (last) {
        if (my > 150) {
          onClose();
        } else {
          api.start({ y: 0 });
        }
      } else {
        api.start({ y: memo + my });
      }
      return memo;
    },
    { axis: 'y' }
  );

  React.useEffect(() => {
    api.start({ y: isOpen ? 0 : 1000 });
  }, [isOpen, api]);

  return (
    <animated.div
      className="absolute select-none inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 "
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <animated.div
        {...bind()}
        style={{ y }}
        className="w-full relative max-w-md h-4/5 bg-white rounded-t-lg p-4"
      >
        <div className="flex flex-col items-center gap-4 py-2 px-6">
          <ConnectPharmacy />
          {/* Pickup Info */}
          <div className='w-full border-b'>
            <h3 className="font-bold py-1">{title}</h3>
            <div className="flex gap-2 text-xs">
              <Image src={location} alt=""/>
              <p>{address}</p>
            </div>
            <div className="flex gap-2 text-xs">
              <Image src={phone} alt=""/>
              <p>{number}</p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <iframe
            className="w-full h-[300px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.401553308366!2d126.92485753955076!3d37.55977100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989012a611d1%3A0xc5593fcec0823803!2sSinchon!5e0!3m2!1sen!2skr!4v1731042449409!5m2!1sen!2skr" width="600" height="450" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Button Container */}
          <div className="absolute bottom-20 left-0 px-10 flex gap-4 mt-4 w-full text-black">
            <button className="flex-1 py-2 bg-tertiary rounded-lg font-semibold">
              장바구니 담기
            </button>
            <button className="flex-1 py-2 bg-tertiary rounded-lg font-semibold">
              처방전 미리보기
            </button>
          </div>

        </div>
      </animated.div>
    </animated.div>
  );
};

export default Popup;
