import ecomDevImage from '@client/assets/ecom-dev.png';
import webDevImage from '@client/assets/web-dev.png';
import appDevImage from '@client/assets/app-dev.png';

export default {
  title: 'Our Expertise In',
  description:
    'We provide full-tech solutions to retain the attention of the target audience and leave a long-term impression on the business.',
  items: [
    {
      key: 'ECOMMERCE',
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
      image: webDevImage,
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
      image: appDevImage,
      description:
        'As the best mobile app development company, we are experts in developing native and cross-platform mobile apps suitable for all business verticals.',
      links: [
        { key: 'IOS' },
        { key: 'ANDROID' },
        { key: 'REACTNATIVE' },
        { key: 'PWA' },
      ],
    },
  ],
};
