import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import location from "@/app/assets/icons/location.svg";
import phone from "@/app/assets/icons/phone.svg";
import ConnectPharmacy from '@/app/components/ConnectPharmacy';
import Link from 'next/link';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegListAlt } from "react-icons/fa";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  address: string;
  number: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, address, number }) => {
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
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.y > 150) {
                onClose();
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full relative max-w-md h-4/5 bg-white rounded-t-lg p-4"
          >
            <div className="flex flex-col items-center gap-4 px-6">
              <hr className="w-[50px] border-2 rounded-full border-gray-400" />
              <ConnectPharmacy />
              
              {/* Pickup Info */}
              <div className="w-full border-b">
                <h3 className="font-bold py-1">{title}</h3>
                <div className="flex gap-2 text-xs">
                  <Image src={location} alt="" />
                  <p>{address}</p>
                </div>
                <div className="flex gap-2 text-xs">
                  <Image src={phone} alt="" />
                  <p>{number}</p>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <iframe
                  className="w-full h-[300px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.401553308366!2d126.92485753955076!3d37.55977100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989012a611d1%3A0xc5593fcec0823803!2sSinchon!5e0!3m2!1sen!2skr!4v1731042449409!5m2!1sen!2skr"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Button Container */}
              <div className="absolute bottom-0 left-0 px-10 pb-10 pt-4 flex gap-4 border-t w-full font-light text-black text-center">
                <Link
                  href="/prescription"
                  className="flex w-full items-center justify-center gap-1 py-3 bg-tertiary rounded-lg font-semibold hover:bg-tertiary/50"
                >
                  <p>장바구니 담기</p>
                  <HiOutlineShoppingBag />
                </Link>
                <Link
                  href="/prescription"
                  className="flex w-full items-center justify-center gap-1 py-3 bg-tertiary rounded-lg font-semibold hover:bg-tertiary/50"
                >
                  <p>처방전 미리보기</p>
                  <FaRegListAlt />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;