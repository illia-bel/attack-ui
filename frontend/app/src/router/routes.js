const routes = [
  {
    name: 'MainLayout',
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      {
        name: 'Index',
        path: '/',
        component: () => import('pages/Index'),
      },

      /**
       * Attacks Pages
       */
      {
        name: 'AttackLayout',
        path: '/attack',
        component: () => import('layouts/AttackLayout'),
        redirect: { name: 'Index' },
        children: [
          {
            name: 'DdosAttack',
            path: 'ddos',
            component: () =>
              import('pages/ddos/DdosAttack'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404'),
  },
]

export default routes
