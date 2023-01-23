import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaDrupal,
  FaReact,
  FaAngular,
  FaVuejs,
  FaHtml5,
  FaPhp,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiFlutter,
  SiIonic,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
} from 'react-icons/si';

export default {
  title: 'Technologies We Work',
  description:
    'Authoritatively reinvent client-centric e-markets via fully tested process improvements. Objectively restore strategic initiatives through fully researched.',
  items: [
    <FaMagento size={48} color={'#f46f25'} />,
    <FaWordpress size={48} color='#00749C' />,
    <FaShopify size={48} color={'#96bf48'} />,
    <FaDrupal size={48} color={'#25AAE1'} />,
    <FaReact size={48} color='#61DBFB' />,
    <FaAngular size={48} color='#dd1b16' />,
    <FaVuejs size={48} color='#42b883' />,
    <FaHtml5 size={48} color='#e34c26' />,
    <FaPhp size={48} color='#8993be' />,
    <FaPython size={48} />,
    <FaNodeJs size={48} />,
    <SiFlutter size={48} />,
    <SiIonic size={48} color='#498AFF' />,
    <SiMongodb size={48} color='#3FA037' />,
    <SiMysql size={48} />,
    <SiPostgresql size={48} color='#336791' />,
    <SiFirebase size={48} />,
  ],

  pluginProps: {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      '@0.00': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 12,
        spaceBetween: 10,
      },
      '@1.50': {
        slidesPerView: 16,
        spaceBetween: 10,
      },
    },
    loop: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
  },
};
