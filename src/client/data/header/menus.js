export default [
  {
    key: 'home',
    submenu: null,
  },
  {
    key: 'services',
    submenus: [
      {
        key: 'ecommerce',
        submenus: [
          {
            key: 'magento',
            url: 'services/megento',
          },
          {
            key: 'woocommerce',
            url: '/services/woocommerce',
          },
          {
            key: 'shopify',
            url: '/services/shopify',
          },
          {
            key: 'wordpress',
            url: '/services/wordpress',
          },
          {
            key: 'drupal',
            url: '/services/drupal',
          },
        ],
      },
      {
        key: 'webdevlopment',
        submenus: [
          {
            key: 'react',
          },
          {
            key: 'angular',
          },
          {
            key: 'vuejs',
          },
          {
            key: 'nodejs',
          },
        ],
      },
      {
        key: 'mobiledevelopment',
        submenus: [
          {
            key: 'ios',
          },
          {
            key: 'android',
          },
          {
            key: 'reactnative',
          },
          {
            key: 'pwa',
          },
        ],
      },
    ],
  },
  {
    key: 'blog',
    submenu: null,
  },
  {
    key: 'aboutus',
    submenu: null,
  },
  {
    key: 'getstarted',
    type: 'button',
    variant: 'primary',
  },
];
