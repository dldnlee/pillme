

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  content: React.ReactNode; // Allows for flexible content
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, header, content }) => {
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
      className="absolute select-none inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <animated.div
        {...bind()}
        style={{ y }}
        className="w-full relative max-w-md h-4/5 bg-white rounded-t-lg"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4 px-6 py-4">
          <hr className="w-[50px] border-2 rounded-full border-gray-400" />
          <h3 className="font-bold text-lg">{header}</h3>
        </div>

        {/* Dynamic Content */}
        <div className="overflow-y-auto h-full">{content}</div>

        {/* Close Button */}
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800"
        >
          Close
        </button> */}
      </animated.div>
    </animated.div>
  );
};

export default PopUp;