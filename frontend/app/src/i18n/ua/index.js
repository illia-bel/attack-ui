// This is just an example,
// so you can safely delete all default props below

export default {
  attackPage: {
    pageTitle: 'Панель керування DDOS',

    stopBtnLabel: 'Зупинити',
    startBtnLabel: 'Почати',
    ddosAttackConfigureBtnLabel: 'Налаштувати атаку',

    actionsHint: 'Зупинка/Початок може тривати до 1 хвилини',

    statusTitle: 'Статус',
    attackActiveStatusLabel: 'Атака в процесі',
    attackStoppedStatusLabel: 'Зупинено',

    resultsCardTitle: 'Результати атаки',
    deleteSelectedTargets: 'Видалити вибрані цілі',

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
    reqCountValidationHint: 'Мінимальна кількість запитів: 1',

    streamsCountLabel: 'Кількість потоків',
    streamsCountHint: 'У розробці',

    intervalTimeFieldLabel: 'Довжина інтервалу',
    intervalTimeFieldHint: 'У мілісекундах',
    intervalTimeValidationHint: 'Мінімальна довжина інтервалу: 1',

    resetConfigBtnLabel: 'Відновити за замовчуванням',
    startAttackBtnLabel: 'Почати атаку',

    removeAllTargetsBtnLabel: 'Видалити всі цілі',

    targetsCardTitle: 'Цілі',
    addTargetFieldLabel: 'Посилання або IP',
    addTargetFieldHint: 'Ви можете вставити будь-який текст із посиланнями на цілі і ми автоматично знайдемо їх',
    addTargetBtnLabel: 'Додати',
    targetsAddListTitle: 'Cписок цілей, які будуть додані',
    targetTooltipText: 'Натисніть, щоб відкрити нову вкладку',

    invalidTargetNotify: 'Це не схоже на URL або IP адресу',
    tarjetaAreadyAddedNotify: 'Мета вже додана',
    targetAddedNotify: 'Ціль додана',

    errorReqDefaultNotify: 'Помилка за запитом стандартних цілей',

    attackStartedDialog: {
      title: 'Атака почалася',
      description:
        'Поки ви не натиснете кнопку "Стоп" або не закриєте вкладку, атака буде активною. Запуск може тривати до 1 хвилини',
      okBtnLabel: 'Ок',
    },

    targetsAutoUpdate: {
      title: 'Автооновлення цілей',
      notification: 'Ціли було успішно оновлено',
      forceUpdateBtnLabel: 'Оновити зараз',

      isEnabledFieldLabel: 'Увімкнено',
      isEnabledFieldHint: 'Автоматично оновлювати список цілей',

      intervalFieldLabel: 'Інтервал оновлення',
      intervalFieldHint: 'Інтервал між скачуваннями (за замовчанням: 60)',
      intervalValidationHint: 'Мінімальний період оновлення: 5 хвилин',

      targetsFileUrlLabel: 'Посилання на файл',
      targetsFileUrlHint: "Лінк на файл '.json' (масив)",
    },
  },

  donatePage: {
    pageTitle: 'Допомогти проекту',
    number: 'Номер',
    copied: 'скопійований',
  },

  russianEmailsPage: {
    pageTitle: 'Список E-mail російських сервісів та компаній',
    dataSourceLabel: 'Джерело',
  },

  russianDataPage: {
    copyData: 'Копіювати список',
    listSeparator: 'Розділювач списку',
    dataIsCopied: 'Скопійовано',
    openJsonBtn: 'Показати в JSON',
  },

  updatesNotify: {
    title: 'Нова версія',
    message: 'Ми випустили нову версію програми. Атака відновиться відразу після оновлення',
    okBtnLabel: 'Оновити зараз',
    cancelBtnLabel: 'Пізніше',
  },

  nav: {
    ddos: {
      subnavLabel: 'DDOS Атака',
      dasboardLabel: 'Управління',
      configLabel: 'Налаштування',
    },

    russianData: {
      subnavLabel: 'Дані росіян',
      emailsLabel: 'Список email',
    },

    telegram: 'Ми в Telegram',
    donatePage: 'Допомогти проекту',
    github: 'Код на GitHub',
  },
  ipNotify: {
    title: 'Використовуйте VPN з російським або білоруським IP для більш ефективної атаки',
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
  donateDialog: {
    title: 'Ви можете допомогти проекту',
    message:
      'Для цього зовсім не обов`язково вміти писати код. Досить просто пожертвувати будь-яку суму зручним способом, натиснувши на "Допомогти проекту"',
    closeBtnText: 'Відмовитися',
    donateBtnText: 'Допомога проекту',
  },
}
