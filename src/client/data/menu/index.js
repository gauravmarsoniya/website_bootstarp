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
          },
          {
            key: 'WOOCOMMERCE',
          },
          {
            key: 'SHOPIFY',
          },
          {
            key: 'WORDPRESS',
          },
          {
            key: 'DRUPAL',
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
