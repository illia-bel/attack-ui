export default function () {
  return {
    targetsList: [],
    config: {
      user: {},
      default: {
        reqCount: 100, // per sec
        intervalLength: 300, // ms

        isTargetsAutoUpdateEnabled : true,
        targetsAutoUpdateInterval  : 60, // minutes
        targetsFileUrl             : 'targets.json',
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

    targetsAutoUpdateIntervalId: null,
  }
}
