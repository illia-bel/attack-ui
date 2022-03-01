export default function () {
  return {
    targetsList: [],
    config: {
      user: {},
      default: {
        reqCount: 100, // per sec
        intervalLength: 300, // ms
      },
    },

    /*
     'google.com': {
        success: 0,
        error: 0,
      }
    */
    resultsBrowserAttack: {},
    commonResultsBrowserAttack: {
      success: 0,
      error: 0,
    },
    browserAttackStatus: false,
    browserAttackIntervalId: null,
  }
}
