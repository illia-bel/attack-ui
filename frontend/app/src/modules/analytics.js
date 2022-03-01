import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

/* Initialize analytics */
export const analytics = Analytics({
  app: 'attack-ui',
  version: 100,
  plugins: [
    googleAnalytics({
      trackingId: 'G-NK7LWBDXMY',
    }),
  ],
})
