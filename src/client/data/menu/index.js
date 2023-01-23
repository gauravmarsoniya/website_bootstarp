export default [
  {
    key: 'HOME',
    submenu: null,
  },
  {
    key: 'SERVICE',
    submenus: [
      {
        key: 'ECOMMERCE',
        submenus: [
          {
            key: 'MAGENTO',
            url: 'services/megento',
          },
          {
            key: 'WOOCOMMERCE',
            url: '/services/woocommerce',
          },
          {
            key: 'SHOPIFY',
            url: '/services/shopify',
          },
          {
            key: 'WORDPRESS',
            url: '/services/wordpress',
          },
          {
            key: 'DRUPAL',
            url: '/services/drupal',
          },
        ],
      },
      {
        key: 'WEBDEVLOPMENT',
        submenus: [
          {
            key: 'REACT',
          },
          {
            key: 'ANGULAR',
          },
          {
            key: 'VUEJS',
          },
          {
            key: 'NODEJS',
          },
        ],
      },
      {
        key: 'MOBILEDEVELOPMENT',
        submenus: [
          {
            key: 'IOS',
          },
          {
            key: 'ANDROID',
          },
          {
            key: 'REACTNATIVE',
          },
          {
            key: 'PWA',
          },
        ],
      },
    ],
  },
  {
    key: 'BLOG',
    submenu: null,
  },
  {
    key: 'ABOUTUS',
    submenu: null,
  },
  {
    key: 'GETSTARTED',
    type: 'button',
    variant: 'primary',
  },
];
