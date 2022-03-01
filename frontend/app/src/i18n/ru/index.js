// This is just an example,
// so you can safely delete all default props below

export default {
  attackPage: {
    pageTitle: 'Панель управления DDOS',
    stopBtnLabel: 'Остановить',
    startBtnLabel: 'Начать',

    actionsHint:
      'Остановка/Начало могут занять до 1 минуты',

    statusTitle: 'Статус',
    attackActiveStatusLabel: 'Атака в процессе',
    attackStoppedStatusLabel: 'Остановлена',

    resultsCardTitle: 'Результаты атаки',

    table: {
      target: 'Цель',
      success: 'Успешных запросов',
      errors: 'Ошибок',
    },
  },

  attackConfigPage: {
    pageTitle: 'Настройка DDOS',
    connectionsTitle: 'Запросы',
    reqCountFieldLabel: 'Запросов к  сайту в секунду',
    reqCountFieldHint: 'Рекомендуемое количество - 100',

    streamsCountLabel: 'Количство потоков',
    streamsCountHint: 'В разработке',

    resetConfigBtnLabel: 'Восстановить по умолчанию',
    startAttackBtnLabel: 'Начать атаку',

    removeAllTargetsBtnLabel: 'Удалить все цели',

    targetsCardTitle: 'Цели',
    addTargetFieldLabel: 'Ссылка или IP',
    addTargetBtnLabel: 'Добавить',
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
      okBtnLabel: 'Окей',
    },
  },

  nav: {
    ddosDasboardLabel: 'Управление DDOS',
    ddosConfigLabel: 'Настройка DDOS',
  },
  ipNotify: {
    title:
      'Используйте VPN с российским или белорусским IP для более эффективной атаки',
    ipLabel: 'Ваш IP',
    countryLabel: 'IP нахожиться в',
    reloadBtnLabel: 'Обновить',
    updatedAtLabel: 'Последнее обновление в',
  },
}
