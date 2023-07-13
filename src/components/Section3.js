import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import ExploreCard from '@/containers/ExploreCard';
import { TitleText } from '@/containers/CustomTexts';
import { TypingText } from '@/containers/CustomTexts';
import Layout3 from './Layout3';

const Section3 = () => {
    const [active, setActive] = useState('world-3');

    return (
        <Layout3>
      <section className={`${styles.paddings}`} id="explore">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText title="" textStyles="text-center" />
          <TitleText
            title={<>use your voice. <br className="md:block hidden" /> </>}
            textStyles="text-center"
          />
        
          <div className="mt-[10px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {exploreWorlds.map((world, index) => (
             <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
          
        </motion.div>
      </section>
      </Layout3>
    );
  };
  

export default Section3