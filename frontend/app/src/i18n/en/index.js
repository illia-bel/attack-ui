// This is just an example,
// so you can safely delete all default props below

export default {
  attackPage: {
    pageTitle: 'DDOS Dashboard',
    stopBtnLabel: 'Stop',
    actionsHint: 'Stop/Start can take up to 1 minute',

    startBtnLabel: 'Start',
    statusTitle: 'Status',
    ddosAttackConfigureBtnLabel: 'Attack setting',

    attackActiveStatusLabel: 'Active',
    attackStoppedStatusLabel: 'Stopped',

    resultsCardTitle: 'Results',

    table: {
      target: 'Target',
      success: 'Success requests',
      errors: 'Errors count',
      checkAvailability: 'Check availability',
    },

    totalResults: {
      error: 'Errors',
      success: 'Successful requests',
    },
  },

  attackConfigPage: {
    pageTitle: 'DDOS Configuration',
    connectionsTitle: 'Connections',
    reqCountFieldLabel: 'Request limit per interval',
    reqCountFieldHint: 'Recommended quantity - 100',

    streamsCountLabel: 'Streams count',
    streamsCountHint: 'In development',

    resetConfigBtnLabel: 'Reset',
    startAttackBtnLabel: 'Start attack',

    intervalTimeFieldLabel: 'Interval length',
    intervalTimeFieldHint: 'In milliseconds',

    removeAllTargetsBtnLabel: 'Remove All Targets',

    targetsCardTitle: 'Targets',
    addTargetFieldLabel: 'Link/ip to target',
    addTargetFieldHint:
      'You can paste any text with links to targets and we will automatically find them',
    addTargetBtnLabel: 'Add',
    targetsAddListTitle: 'Targets to be added',
    targetTooltipText: 'Click to open in a new tab',

    invalidTargetNotify:
      'It doesn`t look like a url or ip address',
    targetaAreadyAddedNotify: 'Target already added',
    targetAddedNotify: 'Target added',

    errorReqDefaultNotify:
      'Error requesting default targets',

    attackStartedDialog: {
      title: 'Attack started',
      description:
        'Until you press the "Stop" button or close the tab, the attack will be active. Startup may take up to 1 minute',
      okBtnLabel: 'Ok',
    },
  },

  donatePage: {
    pageTitle: 'Help the project',
    number: 'Number',
    copied: 'copied',
  },

  updatesNotify: {
    title: 'New Version',
    message:
      'We have released a new version of the application. The attack will resume immediately after the update',
    okBtnLabel: 'Update now',
    cancelBtnLabel: 'Later',
  },

  nav: {
    ddosDasboardLabel: 'DDOS Dashboard',
    ddosConfigLabel: 'DDOS Config',
    telegram: 'Telegram',
    donatePage: 'Help the project',
  },
  ipNotify: {
    title:
      'Use VPN with Russian or Belarusian IP for more effective attack',
    ipLabel: 'Your IP',
    countryLabel: 'IP Country',
    reloadBtnLabel: 'Reload',
    updatedAtLabel: 'Last updated at',
  },

  denialOfResponsibilityWarning: {
    message:
      'This site is a project for load testing your own projects. The administration does not bear any responsibility for the illegal use of this resource',
    okBtnLabel: 'Ok',
  },
}
