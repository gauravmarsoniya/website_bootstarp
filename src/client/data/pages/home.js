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
  FaRegClock,
  FaRegHandshake,
  FaGlobe,
  FaRegUser,
} from 'react-icons/fa';

import {
  SiFlutter,
  SiIonic,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
} from 'react-icons/si';

import ecomDevImage from '@client/assets/magento-developer.png';

export default {
  services: {
    title: 'Our Robust Suite Of IT Consulting Services',
    description:
      'We provide full-tech solutions to retain the attention of the target audience and leave a long-term impression on the business.',
    items: [
      {
        key: 'ECOMMERCE',
        title: 'E-Commerce and CMS Solutions',
        image: ecomDevImage,
        description:
          'Our tailor-made enterprise e-commerce solutions comprise a range of products and IT services that gives a dynamic boost to your business.',
        links: [
          { key: 'MAGENTO' },
          { key: 'WOOCOMMERCE' },
          { key: 'SHOPIFY' },
          { key: 'WORDPRESS' },
          { key: 'DRUPAL' },
        ],
      },
      {
        key: 'WEBDEVLOPMENT',
        title: 'Web Development',
        image: ecomDevImage,
        description:
          'Our certified web developers work across the latest technologies to develop scalable websites and web applications for your business growth.',
        links: [
          { key: 'REACT' },
          { key: 'ANGULAR' },
          { key: 'VUEJS' },
          { key: 'NODEJS' },
          { key: 'LARAVEL' },
        ],
      },
      {
        key: 'MOBILEDEVELOPMENT',
        title: 'Mobile App Development',
        image: ecomDevImage,
        description:
          'As the best mobile app development company, we are experts in developing native and cross-platform mobile apps suitable for all business verticals.',
        links: [
          { key: 'IOS' },
          { key: 'ANDROID' },
          { key: 'REACTNATIVE' },
          { key: 'PWA' },
        ],
      },
      {
        key: 'UIUX',
        title: 'UI & UX and Graphic Design',
        image: ecomDevImage,
        description:
          'As the best mobile app development company, we are experts in developing native and cross-platform mobile apps suitable for all business verticals.',
        links: [
          { key: '[Some text]' },
          { key: '[Some text]' },
          { key: '[Some text]' },
          { key: '[Some text]' },
        ],
      },
    ],
  },
  features: {
    items: [
      {
        icon: <FaRegClock className={'text-primary'} />,
        title: 'On-Time Delivery',
        text: 'We take pride in our 100% record of delivering all projects on time and we are motivated to keep that record.',
      },
      {
        icon: <FaRegUser className={'text-primary'} />,
        title: 'Strong Technical Expertise',
        text: 'Our versatility is the key as we hold teams in all major technologies & business verticals.',
      },
      {
        icon: <FaRegHandshake className={'text-primary'} />,
        title: 'Seamless Collaboration',
        text: 'Our flexible nature helps us integrate and use the tools and methodologies our clients are comfortable with.',
      },
      {
        icon: <FaGlobe className={'text-primary'} />,
        title: 'Available in All Time Zones',
        text: 'We Support all major time zones such as PST, CST, MST, BST, EST among others.',
      },
    ],
  },
  technologies: {
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
  },
};
