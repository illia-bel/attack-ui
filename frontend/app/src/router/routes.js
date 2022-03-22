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
        meta: {
          seo: {
            title: 'Home',
          },
        },
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
            component: () => import('pages/ddos/DdosConfig'),
            meta: {
              seo: {
                title: 'Config ddos',
              },
            },
          },
          {
            name: 'DdosAttack',
            path: 'ddos/start',
            component: () => import('pages/ddos/DdosAttack'),
            meta: {
              seo: {
                title: 'Dashboard ddos',
              },
            },
          },
          {
            name: 'DdosDock',
            path: 'dock/ddos',
            component: () => import('pages/ddos/dock/DdosDock'),
            meta: {
              seo: {
                title: 'Dock ddos',
              },
            },
          },
        ],
      },

      /**
       * Donate page
       */
      {
        name: 'DonatePage',
        path: '/donate',
        component: () => import('pages/Donate/Donate'),
        meta: {
          seo: {
            title: 'Donate',
          },
        },
      },

      /**
       * Russian Data Pages
       */
      {
        name: 'RussianDataLayout',
        path: '/ru-data',
        component: () => import('layouts/RussianDataLayout'),
        children: [
          // RussianEmails
          {
            name: 'RussianEmails',
            path: 'emails',
            component: () => import('pages/RussianData/RussianEmails'),
            meta: {
              seo: {
                title: 'Russian Emails',
              },
            },
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
      console.log('to.fullPath.substring(1) = ', to.fullPath.substring(1))
      window.open(to.fullPath.substring(1))
    },
    meta: {
      seo: {
        title: 'Error 404',
      },
    },
  },
]

export default routes
