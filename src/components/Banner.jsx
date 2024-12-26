
import { easeOut, motion } from "framer-motion";
import img3 from '../assets/banner_3.jpeg'
const Banner = () => {

  return (
    <div className="" >
      <div className="rounded-b-lg w-full h-[220px] sm:h-[300px] md:h-[410px] relative">
        {/* Background Image */}
        <img
          src={img3}
          alt="Banner Background"
          className="w-full h-full object-cover rounded-b-lg"
        />

        {/* Overlay with Text............... */}
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center p-4">
          <motion.h1
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, ease: easeOut, repeat: Infinity }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white"
          >
            Express{" "}
            <motion.span
              animate={{
                color: ["#ecff33", "#33ffe3", "#ff6133", "#ecff33"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-emerald-400"
            >
              Yourself
            </motion.span>{" "}
            Freely!
          </motion.h1>
          <p className="mt-3 text-white text-sm md:text-lg w-[90%] md:w-[60%] mx-auto">
            Dive into a world of stories, ideas, and inspiration crafted for
            curious minds.
          </p>
        </div>
      </div>
    </div>
  );
};
// const Banner= () => {
//   return (
//     <div className='container px-6 py-10 mx-auto'>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className='mySwiper'
//       >
//         <SwiperSlide>
//           <Slide
//             image={img1}
//             text='Get Your Web Development Projects Done in minutes'
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Slide
//             image={img2}
//             text='Get Your Graphics Design Projects Done in minutes'
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Slide
//             image={img3}
//             text='Start Your Digital Marketing Campaigns up n running'
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   )
// };
export default Banner;