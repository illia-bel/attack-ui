// This is just an example,
// so you can safely delete all default props below

export default {
  attackPage: {
    pageTitle: 'Панель управління DDOS',
    stopBtnLabel: 'Зупинити',
    startBtnLabel: 'Почати',

    actionsHint:
      'Зупинка/Початок може тривати до 1 хвилини',

    statusTitle: 'Статус',
    attackActiveStatusLabel: 'Атака в процесі',
    attackStoppedStatusLabel: 'Зупинено',

    resultsCardTitle: 'Результати атаки',

    table: {
      target: 'Мета',
      success: 'Успішних запитів',
      errors: 'Помилок',
    },

    totalResults: {
      error: 'Помилок',
      success: 'Успішних запитів',
    },
  },

  attackConfigPage: {
    pageTitle: 'Налаштування DDOS',
    connectionsTitle: 'Запити',
    reqCountFieldLabel: 'Запитів до сайту за секунду',
    reqCountFieldHint: 'Рекомендована кількість - 100',

    streamsCountLabel: 'Кількість потоків',
    streamsCountHint: 'У розробці',

    resetConfigBtnLabel: 'Відновити за замовчуванням',
    startAttackBtnLabel: 'Почати атаку',

    removeAllTargetsBtnLabel: 'Видалити всі цілі',

    targetsCardTitle: 'Цілі',
    addTargetFieldLabel: 'Посилання або IP',
    addTargetBtnLabel: 'Додати',
    targetTooltipText:
      'Натисніть, щоб відкрити нову вкладку',

    invalidTargetNotify: 'Це не схоже на URL або IP адресу',
    tarjetaAreadyAddedNotify: 'Мета вже додана',
    targetAddedNotify: 'Мета додана',

    errorReqDefaultNotify:
      'Помилка за запитом стандартних цілей',

    attackStartedDialog: {
      title: 'Атака почалася',
      description:
        'Поки ви не натиснете кнопку "Стоп" або не закриєте вкладку, атака буде активною. Запуск може тривати до 1 хвилини',
      okBtnLabel: 'Окей',
    },
  },

  nav: {
    ddosDasboardLabel: 'Керування DDOS',
    ddosConfigLabel: 'Налаштування DDOS',
  },
  ipNotify: {
    title:
      'Використовуйте VPN з російським або білоруським IP для більш ефективної атаки',
    ipLabel: 'Ваш IP',
    countryLabel: 'IP знаходиться в',
    reloadBtnLabel: 'Оновити',
    updatedAtLabel: 'Останнє оновлення',
  },
}
