import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  content: React.ReactNode; // Allows for flexible content
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, header, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute select-none inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            drag="y" // Enable vertical drag
            dragConstraints={{ top: 0, bottom: 0 }} // Restrict dragging upwards
            onDragEnd={(event, info) => {
              if (info.offset.y > 150) {
                onClose(); // Close the popup if dragged down enough
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full relative max-w-md h-4/5 bg-white rounded-t-lg"
          >
            {/* Header */}
            <div className="flex flex-col items-center gap-4 px-6 py-4">
              <hr className="w-[50px] border-2 rounded-full border-gray-400" />
              {header && <h3 className="font-bold text-lg">{header}</h3>}
            </div>

            {/* Dynamic Content */}
            <div className="h-full">{content}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;