"use client";
import Image from "next/image";
import p1 from "../../../public/portofoliu/portofoliu.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Intro = () => {
  return (
    <div className='mb-12 xl:mb-24'>
      <div className='w-full h-64 xl:h-[28rem] relative overflow-hidden'>
        <Image
          src={p1}
          alt='Imagine portofoliu TNG Grup'
          fill={true}
          priority={true}
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/60 border-b border-accent' />
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='absolute inset-0 z-10 flex flex-col gap-y-4 items-center justify-center'
        >
          <h3 className='text-4xl gap-y-2 text-accent flex flex-col xl:flex-row items-start justify-center xl:gap-x-2'>
            Portofoliul Nostru
          </h3>
          <h3 className='font-normal text-xl xl:text-2xl text-white/80 flex flex-row items-center justify-center'>
            <div>
              Eficiență<span className='text-accent text-2xl'>.</span>
            </div>
            <div>
              Sustenabilitate<span className='text-accent text-2xl'>.</span>
            </div>
            <div>Calitate</div>
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
