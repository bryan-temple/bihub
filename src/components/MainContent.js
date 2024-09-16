import * as motion from "framer-motion/client"
import Image from 'next/image';

export default function MainContent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className=""
    >
      <Image
        src="/developer-image.jpg"
        alt="Developer working on code"
        width={500}
        height={300}
        className="w-full"
      />
      {/* <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center p-4 bg-white bg-opacity-80  bottom-0 left-0 right-0"
      >
        BiHub Technology is dedicated to creating User-centric digital
        products that prioritize accessibility and inclusivity
      </motion.p> */}
    </motion.section>
  );
}
