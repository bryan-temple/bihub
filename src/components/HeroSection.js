import React from 'react';
import * as motion from "framer-motion/client"
import OutlinedText from './OutlinedText';

import Image from "next/image";


export default function HeroSection() {
  return (
    <div className=" bg-white p-4 md:p-6">
      <div className="max-w-8xl mx-auto grid grid-rows-[auto,1fr] gap-8 h-full mt-56 ">
        {/* Top section with menu and tagline */}
          <motion.h1 
            className="text-xl sm:text-3xl md:text-5xl lg:text-[52px] font-light mb-[8rem] p-2 text-navy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            <motion.p className='text-xl sm:text-2xl md:text-3xl text-orange font-medium mb-4'>We offer</motion.p>
            <motion.p className="max-w-full">Accessible and Innovative Web Solutions</motion.p>
            <motion.p className=''> for your Digital Presence</motion.p>

          </motion.h1>
       

        {/* Bottom section with image */}
        <div className=" w-full flex justify-center items-center">
          <div className='w-full max-w-7xl'>

          <motion.div 
            className="  relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image 
              src="/developer-image.jpg" 
              alt="Developer working on code"
              width={500}
              height={200}
              className="w-full"

            />
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

















// const OutlinedText = ({ text }) => (
//   <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-transparent" style={{ WebkitTextStroke: '1px #e5e5e5' }}>
//     {text}
//   </div>
// );

// export default function HeroSection() {
//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-center p-4">
//       <div className="max-w-8xl w-full mx-auto">
//         <motion.h1 
//           className="text-4xl md:text-6xl font-light mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, staggerChildren: 0.1 }}
//         >
//           <motion.p>We offer</motion.p>
//           <motion.p className="text-orange-500">Accessible</motion.p>
//           <motion.p>and Innovative</motion.p>
//           <motion.p>web solutions for your</motion.p>
//           <motion.p>Digital Presence</motion.p>
//         </motion.h1>
        
//           <OutlinedText text="Bihub" />
//         <div className="relative h-30 mt-12">
//           <motion.div 
//             className="absolute inset-0 overflow-hidden"
//             initial={{ height: 0 }}
//             animate={{ height: '100%' }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//           >
//             <Image 
//               src="/developer-image.jpg" 
//               alt="Developer working on code"
//               layout="fill"
//               objectFit="cover"
//               quality={100}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-50" />
            
//           </motion.div>
          
//         </div>
//         {/* <OutlinedText text="Bihub" /> */}

//       </div>
//     </div>
//   );
// }
// export default function HeroSection() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center p-4">
//       <div className="max-w-8xl w-full mx-auto">
//         <motion.h1 
//           className="text-4xl md:text-6xl font-light mb-[6rem]"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, staggerChildren: 0.1 }}
//         >
//           <motion.p>We offer</motion.p>
//           <motion.p className="text-orange-500">Accessible</motion.p>
//           <motion.p>and Innovative</motion.p>
//           <motion.p>web solutions for your</motion.p>
//           <motion.p>Digital Presence</motion.p>
//         </motion.h1>
        
//           <OutlinedText text="Bihub" outlineColor="#112e40" style=""/>
//         <div className="relative h-80 md:h-[500px]   ">
//           <motion.div 
//             className="absolute inset-0 overflow-hidden"
//             initial={{ height: 0 }}
//             animate={{ height: '100%' }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//           >
//             <Image 
//               src="/developer-image.jpg" 
//               alt="Developer working on code"
//               className=' mt-5'
//               fill
//               objectFit="fill"
//               quality={100}
//             />
//             {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-50" /> */}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function HeroSection() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center p-4 bg-white">
//       <div className="max-w-7xl w-full mx-auto">
//         <motion.h1 
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-12 md:mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, staggerChildren: 0.1 }}
//         >
//           <motion.p className="mb-1">We offer</motion.p>
//           <motion.p className="text-orange-500 mb-1">Accessible</motion.p>
//           <motion.p className="mb-1">and Innovative</motion.p>
//           <motion.p className="mb-1">web solutions for your</motion.p>
//           <motion.p>Digital Presence</motion.p>
//         </motion.h1>
        
//         <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
//           <OutlinedText text="Bihub" outlineColor="rgba(17, 46, 64, 0.25)" />
//           <motion.div 
//             className="absolute inset-0 overflow-hidden"
//             initial={{ height: 0 }}
//             animate={{ height: '100%' }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//           >
//             <Image 
//               src="/developer-image.jpg" 
//               alt="Developer working on code"
//               fill
//               style={{ objectFit: 'cover', objectPosition: 'center' }}
//               quality={100}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30" />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default function HeroSection() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center p-4 bg-white">
//       <div className="max-w-8xl w-full mx-auto">
//         <motion.h1 
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-12 md:mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, staggerChildren: 0.1 }}
//         >
//           <motion.p className="mb-1">We offer</motion.p>
//           <motion.p className="text-orange-500 mb-1">Accessible</motion.p>
//           <motion.p className="mb-1">and Innovative</motion.p>
//           <motion.p className="mb-1">web solutions for your</motion.p>
//           <motion.p>Digital Presence</motion.p>
//         </motion.h1>
        
//         <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
//           <motion.div 
//             className="absolute inset-0"
//             initial={{ height: 0 }}
//             animate={{ height: '100%' }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//           >
//             <Image 
//               src="/developer-image.jpg" 
//               alt="Developer working on code"
//               fill
//               style={{ objectFit: 'cover', objectPosition: 'center' }}
//               quality={100}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30" />
//           </motion.div>
//           <div className="absolute inset-0 z-10">
//             <OutlinedText text="Bihub" outlineColor="rgba(17, 46, 64, 0.25)" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default function HeroSection() {
//   return (
//     <div className="min-h-screen bg-white p-6 sm:px-6 lg:px-8">
//       <div className="max-w-8xl mx-auto grid grid-rows-[auto,1fr] gap-8 h-full">
//         {/* Top section with menu and tagline */}
//         <div className="flex flex-col">
//           <div className="flex justify-between items-center mb-8">
//             <button className="text-orange-500">Menu</button>
//             <Image src="/logo.png" alt="BiHub Logo" width={40} height={40} />
//           </div>
//           <motion.h1 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, staggerChildren: 0.1 }}
//           >
//             <motion.p>We offer</motion.p>
//             <motion.p className="text-orange-500">Accessible</motion.p>
//             <motion.p>and Innovative</motion.p>
//             <motion.p>web solutions for your</motion.p>
//             <motion.p className="text-blue-900 font-medium">Digital Presence</motion.p>
//           </motion.h1>
//         </div>

//         {/* Bottom section with image and Bihub text */}
//           <div className="absolute inset-0  z-10">
//             <OutlinedText text="Bihub" outlineColor="rgba(17, 46, 64, 0.25)" />
//           </div>
//         <div className="relative w-full h-full min-h-[400px]">
//           <motion.div 
//             className="absolute inset-0 z-20"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             <Image 
//               src="/developer-image.jpg" 
//               alt="Developer working on code"
//               fill
//               style={{ objectFit: 'cover', objectPosition: 'center' }}
//               quality={100}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }




