// This is just an example,
// so you can safely delete all default props below

export default {
  attackPage: {
    pageTitle: 'Панель управления DDOS',

    stopBtnLabel: 'Остановить',
    startBtnLabel: 'Начать',
    ddosAttackConfigureBtnLabel: 'Настроить атаку',

    actionsHint:
      'Остановка/Начало могут занять до 1 минуты',

    statusTitle: 'Статус',
    attackActiveStatusLabel: 'Атака в процессе',
    attackStoppedStatusLabel: 'Остановлена',

    resultsCardTitle: 'Результаты атаки',

    deleteSelectedTargets: 'Удалить выбранные цели',
    table: {
      target: 'Цель',
      success: 'Успешных запросов',
      errors: 'Ошибок',
      checkAvailability: 'Проверить доступность',
    },

    totalResults: {
      error: 'Ошибок',
      success: 'Успешных запросов',
    },
  },

  attackConfigPage: {
    pageTitle: 'Настройка DDOS',
    connectionsTitle: 'Запросы',
    reqCountFieldLabel: 'Лимит запросов за интервал',
    reqCountFieldHint: 'Рекомендуемое количество - 100',

    streamsCountLabel: 'Количство потоков',
    streamsCountHint: 'В разработке',

    resetConfigBtnLabel: 'Восстановить по умолчанию',
    startAttackBtnLabel: 'Начать атаку',

    intervalTimeFieldLabel: 'Длина интервала',
    intervalTimeFieldHint: 'В миллисекундах',

    removeAllTargetsBtnLabel: 'Удалить все цели',

    targetsCardTitle: 'Цели',
    addTargetFieldLabel: 'Ссылка или IP',
    addTargetFieldHint:
      'Вы можете вставить любой текст со ссылками на цели и мы автоматически найдем их',
    addTargetBtnLabel: 'Добавить',
    targetsAddListTitle: 'Цели которые будут добавлены',
    targetTooltipText:
      'Нажмите, чтобы открыть в новой вкладке',

    invalidTargetNotify:
      'Это не похоже на URL или IP адрес',
    targetaAreadyAddedNotify: 'Цель уже добавлена',
    targetAddedNotify: 'Цель добавлена',

    errorReqDefaultNotify:
      'Ошибка при запросе целей по умолчанию',

    attackStartedDialog: {
      title: 'Атака началась',
      description:
        'Пока вы не нажмете кнопку "Стоп" или не закроете вкладку, атака будет активной. Запуск может занять до 1 минуты',
      okBtnLabel: 'Ок',
    },
  },
  donatePage: {
    pageTitle: 'Помощь проекту',
    number: 'Номер',
    copied: 'скопирован',
  },

  updatesNotify: {
    title: 'Новая версия',
    message:
      'Мы выпустили новую версию приложения. Атака возобновиться сразу же после обновления',
    okBtnLabel: 'Обновить сейчас',
    cancelBtnLabel: 'Позже',
  },

  nav: {
    ddos: {
      subnavLabel: 'DDOS Атака',
      dasboardLabel: 'Управление',
      configLabel: 'Настройка',
    },

    telegram: 'Мы в Telegram',
    donatePage: 'Помочь проекту',
  },
  ipNotify: {
    title:
      'Используйте VPN с российским или белорусским IP для более эффективной атаки',
    ipLabel: 'Ваш IP',
    countryLabel: 'IP нахожиться в',
    reloadBtnLabel: 'Обновить',
    updatedAtLabel: 'Последнее обновление в',
  },

  denialOfResponsibilityWarning: {
    message:
      'Этот сайт является проектом для нагрузочного тестирования ваших собственных проектов. Администрация не несет никакой ответственности за незаконное использование данного ресурса',
    okBtnLabel: 'Ок',
  },
}
