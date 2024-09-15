import * as motion from "framer-motion/client"
import Image from 'next/image';
import NavBar from "./Navbar";


export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex p-4 flex-col-2 space-between justify-center bg-red-500"
    >
      <Image src="/logo.png" alt="BiHub Logo" width={50} height={50} />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-orange-500"
      >
        Menu <NavBar />
      </motion.button>
      
    </motion.header>
  );
}
