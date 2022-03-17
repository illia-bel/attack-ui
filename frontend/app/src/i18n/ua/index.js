// This is just an example,
// so you can safely delete all default props below

export default {
  attackPage: {
    pageTitle: 'Панель керування DDOS',

    stopBtnLabel: 'Зупинити',
    startBtnLabel: 'Почати',
    ddosAttackConfigureBtnLabel: 'Налаштувати атаку',

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
      checkAvailability: 'Перевірити доступність',
    },

    totalResults: {
      error: 'Помилок',
      success: 'Успішних запитів',
    },
  },

  attackConfigPage: {
    pageTitle: 'Налаштування DDOS',
    connectionsTitle: 'Запити',
    reqCountFieldLabel: 'Ліміт запитів за інтервал',
    reqCountFieldHint: 'Рекомендована кількість - 100',

    streamsCountLabel: 'Кількість потоків',
    streamsCountHint: 'У розробці',

    intervalTimeFieldLabel: 'Довжина інтервалу',
    intervalTimeFieldHint: 'У мілісекундах',

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
      okBtnLabel: 'Ок',
    },
  },

  donatePage: {
    pageTitle: 'Допомогти проекту',
    number: 'Номер',
    copied: 'скопійований',
  },

  updatesNotify: {
    title: 'Нова версія',
    message:
      'Ми випустили нову версію програми. Атака відновиться відразу після оновлення',
    okBtnLabel: 'Оновити зараз',
    cancelBtnLabel: 'Пізніше',
  },

  nav: {
    ddosDasboardLabel: 'Керування DDOS',
    ddosConfigLabel: 'Налаштування DDOS',
    telegram: 'Ми в Telegram',
    donatePage: 'Допомогти проекту',
  },
  ipNotify: {
    title:
      'Використовуйте VPN з російським або білоруським IP для більш ефективної атаки',
    ipLabel: 'Ваш IP',
    countryLabel: 'IP знаходиться в',
    reloadBtnLabel: 'Оновити',
    updatedAtLabel: 'Останнє оновлення',
  },

  denialOfResponsibilityWarning: {
    message:
      'Цей сайт є проектом для тестування ваших власних проектів. Адміністрація не несе жодної відповідальності за незаконне використання цього ресурсу',
    okBtnLabel: 'Ок',
  },
}
