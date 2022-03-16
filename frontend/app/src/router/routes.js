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
        redirect: { name: 'DdosConfig' },
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
            name: 'DdosConfig',
            path: 'ddos/config',
            component: () =>
              import('pages/ddos/DdosConfig'),
          },
          {
            name: 'DdosAttack',
            path: 'ddos/start',
            component: () =>
              import('pages/ddos/DdosAttack'),
          },
          {
            name: 'DdosDock',
            path: 'dock/ddos',
            component: () =>
              import('pages/ddos/dock/DdosDock'),
          },
        ],
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404'),
    beforeEnter: (to, from, next) => {
      if (to.path.indexOf('http') === -1) {
        next()
        return
      }

      window.open(to.fullPath.substring(1))
    },
  },
]

export default routes
