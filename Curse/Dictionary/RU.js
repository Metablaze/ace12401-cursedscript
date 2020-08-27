﻿var cursedRU = {
    "System": "Система",
    "Curse": "Проклятие",
    "Tip": "Совет",
    "Error": "Ошибка",
    "Reminder": "Напоминание",
    "Error: W02": "(Проклятие пыталось послать шепот длиннее 1000 символов, который сервер не может обработать. Пожалуйста, просмотрите ваши конфигурации, чтобы не допустить этого. Сообщение было обрезано. Ошибка: W02)",
    "Error: C01": "(Проклятие попыталось отправить сообщение длиной более 1000 символов, которое сервер не может обработать. Пожалуйста, следите за своими настройками, чтобы этого не происходило. Сообщение было урезано. Ошибка: C01)",
    "WhisperSent": "Шепот к {0}",
    "LarpWarn": "LARP комната обнаружена: проклятие не работает в этой комнате",
    "OnRestart": "Ваши текущие проклятия были применены без наказаний.",
    "ERROR S011": "ОШИБКА S011: обнаружен спам, проклятие отправило слишком много сообщений слишком быстро, и оно было отключено. Пожалуйста, исправьте проблему перед повторным включением скрипта. Если это была ошибка, пожалуйста, свяжитесь с Ace__#5558 в Discord",
    "IntenseOn": "Интенсивный режим (опасненько).",
    "WeeklyReset": "Новая неделя началась, ваш автоматический счетчик страйков был сброшен.",
    "DCPreventionOn": "Предотвращение дисконекта включено, носителя отправили обратно в комнату, в которой она ранее была заперта. Если это не комната, в которой вы должны быть заперты, пожалуйста, отключите проклятие, перезайдите в игру и войдите в другую комнату, прежде чем снова активировать проклятие, избегайте беспокойства других.",
    "HoodMigration": "Ваш проклятый капюшон не был повторно надет при переходе на более новую версию, используйте команду curseitem, чтобы повторно надеть его.",
    "InvalidCurse": "Недействительное проклятие было найдено и снято, это может быть вызвано новой версией клуба, если предмет был снят или перемещен в другую группу.",
    "BlockedCurse": "Была предпринята попытка активировать проклятие для группы в которой элемент заблокирован, проклятие для данной группы было снято. Разблокируйте следующий предмет, если хотите проклясть его: {0} {1}",
    "Error P04": "Ошибка P04: проклятие было деактивировано, поскольку была попытка применить более одного проклятия к одной и той же группе. Пожалуйста, сообщите об этой проблеме и как это произошло. Измените ваши настройки соответствующим образом, чтобы предотвратить эту ошибку. (Пожалуйста, отключите конфликтующие проклятия)",
    "WarnEnforce": "Напоминание: Вы должны быть на коленях, когда впервые видите кого-то в этой комнате. (Кто-то включил принуждения)",
    "KneelAnger": " %PLAYER% злит проклятие на ней, когда она забывает встать на колени.",
    "CurseArise": "Проклятие появляется на  %PLAYER%'s {0}",
    "CurseLift": "Проклятие на  %PLAYER%'s {0} исчезает",
    "ClothesArise": "Проклятие появляется на  %PLAYER%'s одежде",
    "ClothesLift": "Проклятие на %PLAYER%'s одежде исчезает",
    "RestoredItem": "{0} было восстановлено ({1})",
    "RemovedItem": "{0} исчезло ({1})",
    "ERRORT100": "ОШИБКА T100: вы накопили слишком много нарушений. Пожалуйста, попросите владельца проклятия очистить ваш список нарушений, чтобы освободить место для новых (команда cleartrangressions). Ваши самые старые нарушения в вашей записи теперь будут удалены один за другим",
    "NotSaved": "Ваши конфиги проклятия не были сохранены. Проверьте консоль на наличие ошибок и при необходимости сообщите о проблеме.",
    "SaveColorDone": "Ваши текущие цвета в каждом слоте предмета были сохранены.",
    "ErrorSC07": "Произошла ошибка при попытке сохранить ваши цвета. Ошибка: SC07",
    "DeckShuffledAuto": "Колода была перетасована, потому что она была пуста.",
    "DeckShuffledRequest": "Колода была перетасована, по запросу дилера.",
    "DeckDrawnGlobal": "Вы взяли следующую карты: {0}",
    "DeckDrawnWhisper": "(Следующая карта была взята: {0})",
    "NeedIntenseOn": "(Будет работать, только если включен интенсивный режим.)",
    "OwnerModeOn": "(Носитель проклятия запустил его в режиме владельца.Это означает, что никто не может взаимодействовать с его проклятием.)",
    "WarnOptinOff": "(Команда opt-in {0} отключена. Носитель должен включить его, если он хочет.)",
    "WarnOptinWearer": 'Если вы хотите включить команду optin, вам нужно выполнить "{0} togglecommand {1}". Opt-in команда обычно более ограничивающий или хлопотный вариант. Подумайте дважды, прежде чем включить эту команду.',
    "WarnBlacklist": "(Команда {0} отключена. Владелец должен удалить ее из своего черного списка, если он хочет.)",
    "WarnBlacklistWearer": 'Если вы хотите снова включить команду, вам нужно выполнить "{0} togglecommand {1}".',
    "AFKTimerTrigger": "(Был АФК более 5 минут и получил соответствующее наказание.)",
    "DraggedOutWearerCapture": "Ваш похититель отправил вас в комнату {0}, сообщения выше этого - из предыдущей комнаты.",
    "DraggedOutAction": "%PLAYER% была вытащена ее похитителем.",
    "LeashAction": "%PLAYER% была призвана ее хозяйкой.",
    "LeashWearer": "Ваша хозяйка отправила вас в комнату {0}, сообщения выше этого - из предыдущей комнаты.",
    "PunishOrgasm": "Проклятие на %PLAYER% наказывает ее за оргазм, когда ее хозяйка запретила ей.",
    "NoRescueGambling": "Зал азартных игр не доступен пока у вас активана команда norescue. Что бы войти в него вам нужно временно отключить проклятье. ->Going back to the main hall <-",
    "NoRescueNursery": "Детская не доступна пока у вас активана команда norescue. Что бы войти в него вам нужно временно отключить проклятье. ->Going back to the main hall <-",
    "LockSubOn": "Не может брать новых сабмиссивов.",
    "LockLoverOn": "Не может иметь новых возлюбленных.",
    "LockLoverOff": "Может иметь новых возлюбленных.",
    "LockOwnerOn": "Проклятие на %PLAYER% не дает покинуть свою хозяйку.",
    "LockOwnerOff": "Проклятие на %PLAYER% разрешает ей прервать ошейник если она захочет.",
    "LooseOwnerOn": "(Club owners теперь разрешено использовать встроенные правила клуба. ВНИМАНИЕ: Эти официальные встроенные правила клуба не связаны с проклятием, это означает, что отключение проклятия не приведет к отключению правил клуба, таких как конфискация пультов, замки или блокировка изменений в гардеробе.)",
    "LooseOwnerOff": "(Curse owners больше не могут использовать встроенные правила клуба.)",
    "AllShowStrikes": "%PLAYER% набрал в общей сложности {0} страйков.",
    "AllShowTransgressions": "Преступлений было: {0}",
    "AllShowlistoffcommands": "Следующие команды отключены: {0} ",
    "asylumtimeleft": "%PLAYER% должна просидеть еще {0} часов в лечебнице",
    "OtherWhisperHelpMessage1": '(Чтобы проклясть меня, спросите меня о командах ... есть еще доступные в зависимости от ваших разрешений [blacklist, public, mistress, owner].Команды вызываются {0}, как "{1} respect")',
    "OtherWhisperHelpMessage2": "(Чтобы узнать все команды или использовать его для себя, проверьте эту ссылку: https://github.com/ace-1331/ace12401-cursedscript/wiki/Functions )",
    "AllReadOwnerNote": "(Записка прилагается к ней от ее хозяйки: {0})",
    "AllNoteSent": "(Записка была отправлена хозяйкам.)",
    "AllReadOrgasmCount": "(Имела {0} оргазмов с момента последнего сброса.)",
    "AllInvalidLanguage": '(Неправильный язык. Сейчас только "fr", "ru", "ger" и "en" доступны. Любой может внести свой вклад, чтобы добавить больше!)',
    "AllSetDictionary": "(Словарь установлен на {0}.)",
    "PublicPunish": "Проклятие на %PLAYER% наказывает ее по просьбе {0}",
    "PublicReward": "Проклятие на %PLAYER% вознаграждает ее по просьбе {0}",
    "PublicEdge": "Проклятие на %PLAYER% возбуждает ее по просьбе {0}",
    "PublicCaptureAction": "%PLAYER% была похищена силами {0}",
    "PublicCaptureWhisper": "В течение следующих 5 минут носитель проклятия не может покинуть комнату и может быть доставлен в любую комнату,  звуковым сигналом.",
    "PublicCaptureSomeoneElse": "Кто-то еще захватил носителя проклятия за последние 5 минут, повторите попытку позже.",
    "PublicCaptureAlready": "Вы уже захватили носителя проклятия.",
    "PublicCaptureDisabled": "Режим похищения выключен.",
    "FullBlindfoldOn": "(Все повязки на глазах полностью ослепят владельца.)",
    "FullBlindfoldOff": "(Повязки на глаза снова стали обычными.)",
    "IsClassicOn": "Проклятие будет действовать так же, как и раньше. (Сообщения показывающие нарушения, будут отправлены, но наказания все еще будут применены.)",
    "IsClassicOff": "Проклятие больше не будет действовать, как раньше. (Сообщения показывающие нарушения, НЕ будут отправлены.)",
    "ShowTitles": "Текущие титулы: {0}",
    "ShowNicknames": "Текущие псевдонимы: {0}",
    "InvalidItemGroup": "-->Неверная группа предметов. Проверьте в вики список доступных групп.",
    "CurseItemInvalidArgs": "(Неверные аргументы. Укажите группу элементов и количество часов, в течение которых проклятие должно оставаться активным.)",
    "FullLengthOn": "Ваша вместимость в чат теперь будет в 5 раз больше. (Длиной 1000 символов)",
    "FullLengthOff": "Ваша вместимость в чат снова будет нормальной. (200 символов в длину)",
    "TipReset": "Теперь вы можете увидеть все советы снова.",
    "PunishmentColorDisabled": "Больше не будут использоватся установленные цвета.",
    "GeneralInvalidArgs": "Неверные аргументы.",
    "ToggleCommandInvalid": "Неверная команда -> укажите команду с on/off",
    "RemovedBlacklistCommand": "Команда {0} была удалена из вашего черного списка.",
    "LoginHelpOn": "Вы больше не увидите справочное сообщение при входе в систему.",
    "LoginHelpOff": "Вы увидите сообщение помощи при каждом входе в систему снова.",
    "forwardallon": "Твое проклятие передаст тебе все шепоты.",
    "forwardalloff": "Ваше проклятие больше не будет пересылать ненужные шепоты.",
    "hidedisplayon": "Вы больше не увидите, у кого есть проклятие.",
    "hidedisplayoff": "Теперь вы увидите, у кого есть проклятие.",
    "restraintvanishon": "Ваше проклятие удалит предметы, когда проклятие на них снято.",
    "restraintvanishoff": "Ваше проклятие больше не будет удалять предметы, когда проклятие на них снято.",
    "wardrobev2on": "Включен расширенный гардероб. (Изменения будут применены при следующей перезагрузке.)",
    "wardrobev2off": "Выключен расширенный гардероб. (Изменения будут применены при следующей перезагрузке.)",
    "hasCaptureModeon": "Теперь вы можете быть похищены кем-либо.",
    "hasCaptureModeoff": "Вы больше не можете быть захвачены.",
    "eatcommandon": "Больше не будет отображать шепот, содержащий действительные команды.",
    "eatcommandoff": "Возобновит отображение шепота, содержащего действительные команды.",
    "issilenton": "Ваше проклятие больше не будет отображать публичные сообщения",
    "issilentoff": "Ваше проклятие возобновит публичное отображение сообщений",
     "MissingPresetName": "(Отсутствующие аргументы. [preset name])",
    "NotFoundPreset": "(Пресет не найден)",
    "ErrorSelfOwn": "(Вы не можете владеть собой же.)",
    "RestrainPlayEnabled": "(Ваша хозяйка отключила эту команду.)",
    "ErrorClubOwn": "(Невозможно удалить вашу официальную хозяйку.)",
    "OptinCommandToggleOn": "Команда {0} была включена",
    "OptinCommandToggleOff": "Команда {0} была отключена",
    "ToggleOwnerHub": "Проклятие теперь в owner hub режиме. Никто не может взаимодействовать с вашим проклятием.",
    "ToggleCommand": " {0} команда была заблокирована.",
    "WearerShowStrikes": "Вы накопили {0} страйков.",
    "WearerShowBlacklist": "Ваш чёрный список: #{0}",
    "WearerTalkInvalid": "Неверные аргументы. вам нужно указать идентификатор цели и идентификатор предложения, например «#name talk miss yes», где miss - это идентификатор цели, а yes - идентификатор предложения.",
    "SelfOwnerAdd": "({0}) теперь новая хозяйка для %PLAYER% ",
    "SelfOwnerRemove": "Удалена хозяйка: {0}",
    "ErrorSelfMistress": "(Вы не можете быть сама себе госпожой.)",
    "SelfMistressAdd": "({0}) теперь новая госпожа для %PLAYER% ",
    "SelfMistressRemove": "Удалена госпожа: {0}",
    "QuickbanError": "Действие недействительно, вы не администратор.",
    "QuickbanSucceed": "Бан лист комнаты был обновлён.",
    "InvalidCommandChar": "Неверная команда персонажа: {0}",
    "ValidCommandChar": "Ваша команда персонажа была изменена на: {0}",
    "WearerNameChange": "Идентификатор носителя проклятия был изменен на: {0}",
    "WearerBlacklistAdd": "Добавлена в черный список: {0}",
    "WearerBlacklistRemove": "Удалена из черного списка: {0}",
    "WearerShowTargets": "Вот ваши допустимые Targets --> {0}",
    "WearerShowSentences": "Вот ваши допустимые предложения --> {0}",
    "SelfMsgCheckNotifyGagOOC": "(Пытался использовать OOC в кляпе)",
    "SelfMsgCheckWearerWarnGagOOC": "ВНИМАНИЕ: Вы не можете использовать OOC в обычных сообщениях чата с кляпом.",
    "SelfMsgCheckCommandCallError": "(Вызов команды был обнаружен, но не опознан. Проверьте на опечатки и проверьте свою версию, если это было предназначено. Это сообщение будет обработано в обычном режиме.)",
    "SelfMsgCheckNotifyForceSay": "(Не сказал предложение добровольно.)",
    "SelfMsgCheckWarnForceSay": "ВНИМАНИЕ: Вы были наказаны за то, что не произнесли ожидаемое предложение добровольно: {0}",
    "SelfMsgCheckNotifyRestrained": "(Пыталась говорить свободно, когда ее речь была ограниченой.)",
    "SelfMsgCheckWarnRestrained": "ВНИМАНИЕ: Вы пытались говорить свободно, пока ваша речь ограничена.",
    "SelfMsgCheckNotifyDisrespect": "(Пытался быть неуважительным)",
    "SelfMsgCheckWarnDisrespect": "ВНИМАНИЕ: Требуется уважение к {0}.",
    "SelfMsgCheckNotifyWord": "(Используются запрещенные слова: {0})",
    "SelfMsgCheckWarnWord": "ВНИМАНИЕ: используются запретные слова: {0}",
    "SelfMsgCheckNotifySound": "(Пыталась издавать недопустимые звуки)",
    "SelfMsgCheckWarnSound": "ВНИМАНИЕ: Вы издавали недопустимые звуки. (Разрешенный звук: {0})",
    "SelfMsgCheckNotifyContraction": "(Пыталась использовать сокращения)",
    "SelfMsgCheckWarnContraction": "ВНИМАНИЕ: Вы не можете использовать сокращения!",
    "SelfMsgCheckNotifyDollLong": "(Пытался использовать слишком много слов (правило doll talk))",
    "SelfMsgCheckWarnDollLong": "ВНИМАНИЕ: Вам не разрешено использовать более 5 слов! (правило doll talk)",
    "SelfMsgCheckNotifyDollMany": "(Пытался использовать длинные слова (правило doll talk))",
    "SelfMsgCheckWarnDollMany": "ВНИМАНИЕ: Вам не разрешено использовать слова, содержащие более 6 букв! (правило doll talk)",
    "PunishmentTriggered": "Проклятие на %PLAYER% наказывает ее.",
    "ErrorInvalidPunishment": "Обнаружена и удалена недействительная мера наказания, это может быть вызвано новой версией клуба, если предмет был удален или перемещен в другую группу.",
    "AppearanceCheckKneel": "Проклятие на %PLAYER% заставляет ее опуститься на колени.",
    "AppearanceCheckRestore1": "Проклятие на %PLAYER% восстанавливает ее проклятый предмет.",
    "AppearanceCheckRestoreMany": "Проклятие на %PLAYER% восстанавливает ее проклятые предметы.",
    "AppearanceCheckRemove1": "Проклятие на %PLAYER% убирает запрещенный предмет.",
    "AppearanceCheckRemoveMany": "Проклятие на %PLAYER% убирает запрещенный предметы.",
    "AppearanceCheckVibe": "Проклятие на %PLAYER% возвращает ее вибраторы к необходимой интенсивности.",
    "MsgCheckActiveMsg": "(Активно проклятие. Мой идентификатор: {0})",
    "MsgCheckErrorNonWhisper": "--> Команда отменена. Пожалуйста, используйте команды шепотом, чтобы предотвратить спам.",
    "TxtCommand": "команда:",
    "TxtOutput": "Выход:",
    "MsgCheckCommandInvalid": "(Неверная команда: возможно, команда была запрошена, но не найдено ни одной подходящей команды. Проверьте на опечатки, или проверьте версию и настройки проклятия. Информация о человеке, отправившем команду: Club owner: {0}, Curse owner: {1}, Mistress: {2}, Public access: {3}, Full public access: {4})",
    "MsgCheckAngerMute": "%PLAYER% злит проклятие, говоря, когда ей не позволено.",
    "MsgCheckFreezeReset": "Сброс таймера замирания.",
    "MsgCheckFreezeAction": "%PLAYER% замирает, как говорится ее триггерное слово.",
    "MsgCheckUnfreezeAction": "%PLAYER% размораживается, как ее триггер слово повторяется",
    "MistressInvalidProvideOnOff": "(Неверные аргументы. Убедитесь, что вы включили или выключили.)",
    "MistressSavedColor": "(Цвета сохранены.)",
    "MistressContractionOn": "(Больше не может использовать сокращения.)",
    "MistressContractionOff": "(Снова может использовать сокращения.)",
    "MistressCurseItemInvalidGroup": "(Неверные аргументы. Укажите группу предметов.)",
    "MistressChangeStrikeAdd": "У %PLAYER% добавлено {0} страйков к ее счетчику страйков.",
    "MistressChangeStrikeRemove": "%PLAYER% получила {0} страйков, вычтенных из ее счетчика страйков.",
    "MistressDeacPresOn": "-->Проклятие деактивировано, пока рядом госпожа",
    "MistressDeacPresOff": "-->Проклятие активируется, пока рядом госпожа",
    "MistressDolltalkOn": "Проклятие на %PLAYER% мешает ей говорить в деталях.",
    "MistressDolltalkOff": "Проклятие на %PLAYER% позволяет ей говорить нормально.",
    "MistressNormalMuteOn": "Проклятие на  %PLAYER% запрещает ей говорить.",
    "MistressNormalMuteOff": "Проклятие на %PLAYER% позволяет ей снова использовать ее слова.",
    "MistressNewBanWord": "Новое запрещенное слово: {0}",
    "MistressRemoveBanWord": "слово {0} разрешено",
    "MistressBeggingOn": "(Попрошайничество заблокировано.)",
    "MistressBeggingOff": "(Попрошайничество разрешено.)",
    "Mistress1stBlock": "(Запрещено говорить от первого лица.)",
    "Mistress1stAllow": "(Разрешено говорить от первого лица.)",
    "MistressRename": "Новый никнейм для {0}: {1}",
    "MistressPresetSave": "Пресет сохранен: {0}",
    "MistressPresetLoadWarning": "(Эта функция позволяет легко загружать часто используемый набор проклятых предметов вместо того, чтобы снова и снова рассылать одну и ту же команду. Она не предназначена для использования в качестве функции быстрого связывания. Пожалуйста, не используйте ее как таковую.)",
    "MistressPresetLoadMsg": "Проклятие на %PLAYER% восстанавливает ее проклятое состояние ({0})",
    "MistressOldCommandCurseItem": "(Команда устарела в пользу curseitem.)",
    "MistressBasePublicOn": "(Открытый доступ включен.)",
    "MistressBasePublicOff": "(Открытый доступ отключен.)",
    "MistressPermaKneelOn": "Проклятие мешает %PLAYER% встать.",
    "MistressPermaKneelOff": "Проклятие снова позволяет %PLAYER% встать.",
    "MistressCurseSpeechsOn": "Проклятие возникает на губах у %PLAYER%",
    "MistressCurseSpeechsOff": "Проклятие покидает губы %PLAYER%",
    "MistressCurseVibesOn": "Проклятие возникает на вибро игрушках у %PLAYER%",
    "MistressCurseVibesOff": "Проклятие исчезает с вибро игрушек у %PLAYER%",
    "MistressCurseVibesInt-1": "%PLAYER%'s вибраторы были выключены.",
    "MistressCurseVibesInt0": "%PLAYER%'s вибраторы были настроены на низкую интенсивность.",
    "MistressCurseVibesInt1": "%PLAYER%'s вибраторы были настроены на среднюю интенсивность.",
    "MistressCurseVibesInt2": "%PLAYER%'s вибраторы были настроены на высокую интенсивность.",
    "MistressCurseVibesInt3": "%PLAYER%'s вибраторы были настроены на максимальную интенсивность.",
    "MistressCurseVibesError": "(Неверный вызов команды: укажите скорость [off, low, normal, high, max].)",
    "MistressDeafImmWhisperWarn": "(Если вы хотели добавить/удалить кого-то в список, используйте ту же команду и укажите номер участника.)",
    "MistressDeafImmWhisperList": "Голос следующих людей не будет заглушен: {0}",
    "PrivateShowEnforced": "Enforced список: {0}",
    "PrivateShowMistress": "Mistresses: #{0}",
    "PrivateShowOwner": "Owners: #{0}",
    "PrivateShowSpeechRestriction": "Вот ограничения речи --> Members to respect: {0}, Banned words: {1}, Contractions Ban: {2} , Muted: {3} , Sound: {4}, Entry message: {5}, Restrained speech mode: {6}, Doll talk: {7}, OOC while gagged: {8}, must retype messages: {9}.",
    "OwnerTriggerWordSet": "Триггерное слово носителя было установлено на: {0}",
    "OwnerTriggerWordRemove": "Триггерное слово носителя было удалено",
    "OwnerTriggerDurationError": "(Недействительные аргументы. Укажите количество минут, в течение которых должно длиться действие триггерного слова.)",
    "OwnerTriggerDurationSet": "Продолжительность эффекта триггерного слова носителя изменена на: {0} минут",
    "OwnerPunRestrainErr1": "(Недействительные аргументы. Укажите этап (от 1 до 10) и группу ограничений для сканирования на предмет текущего ограничения.)",
    "OwnerPunRestrainErr2": "(Недействительные аргументы. Этап наказания должен быть числом от 1 до 10.)",
    "OwnerPunRestrainErr3": "(Недействительные аргументы. Целевая группа не ограничивает.)",
    "FullSlowOff": "(Носитель больше не замедлен постоянно)",
    "FullSlowOn": "(Носитель теперь медленный постоянно)",
    "forcedRestraintsSettingOff": "(Носитель больше не будет вынужден сохранять все ограничения при повторном входе.)",
    "forcedRestraintsSettingOn": "(Носитель будет вынужден сохранять все ограничения при повторном входе.)",
    "listedtip0": "Если вы хотите пройти процесс настройки и получить различную информацию о том, как работает проклятие, сделайте #name tip, где '#name' - ваш идентификатор вызова. Каждый раз, когда вы отправляете это сообщение в чате, вы получаете новую подсказку.",
    "listedtip1": "Если вы сомневаетесь, вы можете сделать '#name help', где '#name' - ваш идентификатор вызова, чтобы увидеть список доступных функций в вашей текущей версии. Будьте в курсе последних событий и свяжитесь с Аce, если возникнут проблемы с вашим проклятием. В этом списке все функции: https://github.com/ace-1331/ace12401-cursedscript/wiki/Functions",
    "listedtip2": "Когда включен интенсивный режим, можно использовать более строгие или инвазивные функции. Обычно это включает изменение экранов в игре или блокировку основных функций. Обязательно доверяйте своим владельцам, если собираетесь использовать интенсивный режим.",
    "listedtip3": "Вы можете занести в черный список кого-то, кто взаимодействует с вашим проклятием, с помощью '#name blacklist 00000', где 00000 - это их номер. Это не поместит их в ваш обычный черный список. Проклятие уже не позволяет участникам из черного списка и призракам взаимодействовать с ним.",
    "listedtip4": "Вы можете добавить госпожу к своему проклятию с помощью '#name mistress 00000', где 00000 - их номер. Ваша хозяйка может помешать вам сделать это.",
    "listedtip5": "Вы можете добавить хозяйку к своему проклятию с помощью '#name owner 00000', где 00000 - их номер. Ваша хозяйка может помешать вам сделать это. Кроме того, ваша клубная хозяйка добавляется по умолчанию и не может быть удалена.",
    "listedtip6": "Вы можете использовать '#name savecolors', чтобы сохранить текущие цвета. Проклятие повторно наложит предметы с сохраненными цветами. Цвет каждого слота будет сохранен, каждый вызов этой команды будет перезаписывать каждый слот.",
    "listedtip7": "Вы можете изменить свой идентификатор вызова с помощью '#name identifier [newidentifier]', где '[newidentifier]' заменяется тем, что вы хотите. Это полезно, если у вас очень длинное или распостранённое имя.",
    "listedtip8": "Есть колода карт! Вы можете использовать '#name shuffle' и '#name draw 1' для взятия карт. Вы также можете прошептать карты в случае, если вы дилер с '#name draw 1 0000', где 0000 - их номер участника.",
    "listedtip9": "Если вы хотите, чтобы правила ограничения речи отправляли сообщения, содержащие нарушения, вы можете использовать '#name isclassic'. Это помогает, если главная цель проклятия - отслеживать страйки, а не полностью блокировать плохие сообщения.",
    "listedtip10": "Вы можете заставить свое проклятие отправлять каждое сообщение шепотом вам и вашей госпоже/хозяйке, а не через действия для всей комнаты с помощью '#name issilent'. Это помогает скрыть, что вы используете скрипт, или не беспокоить других в загруженной комнате.",
    "listedtip11": "Вы можете скрыть значок 'C' над проклятыми игроками с помощью '#name hidedisplay'",
    "listedtip12": "Вы можете автоматически снять свои ограничения, когда проклятие будет снято с помощью '#name restraintvanish'. Это делает его более удобным в определенных сценариях.",
    "listedtip13": "Вы можете отфильтровать команды проклятия от других из вашего чата при получении с '#name eatcommands'. Это помогает не отвлекаться",
    "listedtip14": "Улучшено меню внешнего вида с экранами выбора, отменой, черным списком, улучшенным средством выбора оттенка и шкафом для импорта / экспорта. Чтобы включить его, вы можете использовать '#name wardrobev2'. Это может быть исправлено в будущих обновлениях, если многое изменится, отключите его, если это вызовет проблемы. https://github.com/ace-1331/ace12401-cursedscript/wiki/Appearance-v2-by-Noname",
    "listedtip15": "Меню расширения динамическое! Всегда смотрите на него, чтобы увидеть, не пропустите ли вы новое обновление. Проклятие может разрушиться с появлением новых версий клуба, поэтому важно оставаться в курсе последних событий.",
    "listedtip16": "Любой предмет может быть проклят госпожой или хозяйкой проклятия. Вы не можете сами накладывать проклятия. Существует несколько уровней разрешений для доступа к различным элементам. Ваша клубная хозяйка сохраняет всю власть, позволяя вам играть более чем с одним человеком. Для подробного объяснения системы разрешений: https://github.com/ace-1331/ace12401-cursedscript/wiki/Access-levels-and-curse-activation",
    "listedtip17": "Вы можете отключить автоматические наказания, чтобы проклятие не накладывало ограничений, когда нет необходимости.",
    "listedtip18": "Если вы когда-нибудь застряли, вы можете пойти в кроличью нору на главном экране, чтобы сбросить проклятие. Вы также можете перейти туда, чтобы включить интенсивный режим или почувствовать вкус проклятий. В кроличьей норе также есть интерфейс для просмотра большей части информации о вашем проклятии.",
    "listedtip19": "Есть система ников. Псевдонимы отображаются только на вашей стороне и имеют приоритеты в зависимости от того, кем они были присвоены. Подробные инструкции по никнеймам: https://github.com/ace-1331/ace12401-cursedscript/wiki/Nicknames",
    "listedtip20": "Существуют различные отчеты для получения дополнительной информации о ваших текущих настройках. Такие вещи, как Speechreport, showmistress, showblacklist, showowners, shownicknames, configreport и т.Д. Дадут вам более подробную информацию о том, что вам нужно сделать в настоящее время, если вы забыли об активных проклятиях",
    "listedtip21": "Вы можете включить проклятие само по себе после входа в систему, активировав 'wear permanently' в меню расширений.",
    "listedtip22": "Для получения дополнительной информации о конфигурациях: https://github.com/ace-1331/ace12401-cursedscript/wiki/Configurations",
    "listedtip23": "Большинство команд/проклятий - это переключатели. Это означает, что отправка его в первый раз включит проклятие, затем отправка снова отключит проклятие.",
    "listedtip24": "Вы должны стоять на коленях, пока активирован проклятый ошейник. Одина из ваших госпожей или хозяек должна выключить его, чтобы снять проклятие.",
    "listedtip25": "Проклятый предмет был удален с вашего персонажа и впоследствии применен повторно. Чтобы удалить проклятый предмет, проклятие должно быть снято одной из вашей хозяек или госпожой.",
    "listedtip26": "Предмет был применен к слоту, содержащему  'пустое' проклятие. Предмет был удален с вашего персонажа. Чтобы применить предмет в этом слоте,  проклятие должно быть снято одной из вашей хозяек или госпожой.",
    "listedtip27": "В настоящее время вы носите проклятие вибраторов, это не позволяет вашим вибраторам работать на более низкой интенсивности. Чтобы снять проклятие, вам нужна одна из вашей хозяек или госпожа.",
    "listedtip28": "Проклятие не поддерживает комнаты LARP, оно отключается по умолчанию, вам не нужно ничего делать самостоятельно. Пожалуйста, помните о людях вокруг вас при использовании проклятия.",
    "listedtip29": "Проклятие будет справедливым, когда вы отключите его для одиночной игры, LARP или выполнения RP, оно восстановит ваше состояние, не наказывая вас, как только вы его повторно активируете.",
    "listedtip30": "Вы видите это напоминание, потому что ваша хозяйка активировала напоминания с заданным интервалом. Вам нужна хозяйка, чтобы сняла это проклятие.",
    "listedtip31": "Проклятие включено постоянно по запросу из меню расширений. Это означает, что вы всегда будете носить проклятие при входе в систему, независимо от вашего персонажа. При необходимости вы всегда можете отключить проклятие вручную. Следите за обновлениями, так как новые клубные версии могут быть несовместимы с вашей текущей версией проклятия.",
    "listedtip32": "Вы получили сообщение от проклятия. Эти сообщения похожи на шепот, потому что вы единственный, кто их видит. Метка имени используется для различения сообщений (Совет, Система, Проклятие, Напоминание, прочее.)",
    "listedtip33": "Проклятие просто послало кому-то шепот. В большинстве случаев они являются копией информации, которую вы видите, чтобы держать вашу хозяйку в курсе изменений вашего проклятия. Вы не увидите этого шепота. Если вы хотите видеть каждое сообщение в целях тестирования, вы можете использовать команду 'forwardall'",
    "listedtip34": "Та, кого принуждет (enforced), - это та, перед кем вы должны встать на колени, когда впервые видите ее в комнате. Вы также должны ссылаться на них с соответствующими заголовками, например miss/mistress.",
    "listedtip35": "Проклятие никогда не применит предмет, если зона заблокирована замками хозяйки, зона заблокирована другими предметами или предмет находится в вашем черном списке.",
    "listedtip36": "Горничная не смогла освободить вас, потому что одна из ваших хозяек отключила горничных для вас. Вам нужна одна из ваших хозяек, чтобы снять это проклятие.",
    "listedtip37": "Есть функция поводка! Если этот параметр включен, вас вытащит из чатов  любая хозяйка проклятия, которая подаст вам тройной звуковой сигнал, приведет вас в другую комнату. Хозяйка должна активировать его с помощью '#name leash'",
    "listedtip38": "Ваша клубная хозяйка активировала проклятие, которое в настоящее время не позволяет вам заводить новых любовников.",
    "listedtip39": "Ваша клубная хозяйка активировала проклятие, которое в настоящее время не позволяет вам заводить новых рабынь.",
    "listedtip40": "Значок 'C' над головой персонажа означает, что он также использует проклятие.",
    "listedtip41": "Вы только что переступили порог от слишком большого количества нарушений. Каждый раз, когда правило нарушается, ваш счетчик страйков увеличивается в зависимости от серьезности нарушения. Существуют различные стадии, и чем больше вы нарушаете, тем больше вы будете связаны, когда будете наказаны проклятием. Счетчик сбрасывается каждую неделю. Ваша хозяйка может отключить эту систему или взаимодействовать с ней, чтобы добавлять страйки в ваш счетчик. Используйте команду справки, чтобы увидеть все доступные команды.",
    "listedtip42": "The restrained speech system is quite complicated. It allows the ability to restrain the wearer to a set of sentences. Better than being completely mute! For detailed explanations, see this page: https://github.com/ace-1331/ace12401-cursedscript/wiki/Speech-restrictions",
    "listedtip43": "Предотвращение отключения сделает так, что носитель снова войдет в комнату, в которой он был заперт в последний раз после отключения, что делает невозможным побег путем перезагрузки. Будьте внимательны и снимите проклятие, если окажетесь в чужой комнате.",
    "listedtip44": "Параметры счетчика заблокируют его, чтобы вы не могли изменить его состояние.",
    "listedtip45": "Вы можете сохранять и загружать определенные пресеты для проклятий. Это позволяет вам сохранять разные состояния и быстрее возвращаться к действию вместо того, чтобы повторять одни и те же команды снова и снова. Вы можете выбрать загрузку только проклятых зон, чтобы проклясть новые элементы (loadpresetcurses), или проклясть с помощью предустановленных элементов (loadpresetcurse). Каждая предустановка сохраняется с именем и загружается с заданным именем. Вы можете иметь неограниченное количество предустановок проклятия. Для просмотра ваших текущих пресетов: listpresets",
    "listedtip46": "Как только таймер лечебници прибавит время, вы останетесь в комнате. Чтобы вас немедленно отправили туда, ваша хозяйка проклятия должна выполнить команду 'sendasylum' .",
    "listedtip47": "Проклятые вибраторы, активируемые 'vibes', означают, что интенсивность остается на заданном уровне. По умолчанию это максимум, однако интенсивность можно изменить с помощью команды виброинтенсивности.",
    "listedtip48": "Ваши хозяйки проклятия может изменить ограничения речи, чтобы сообщение не исчезало, когда вы нарушаете его с помощью команды 'retype'.",
    "listedtip49": "Вы видите '?' выше кого-то другого, потому что они используют другую версию проклятия. Это означает, что вы или они устарели. Пожалуйста, подтвердите свою версию проклятия.",
    "listedtip50": "Есть дополнительные проклятия, которые являются более сильными проклятиями, чем в среднем, эти проклятия могут воздействовать на вас напрямую (OOC) или обходить стандартные протоколы. Пожалуйста, подумайте, почему вы их включаете, прежде чем делать это, если кто-то вас принуждает, это может быть не лучший контекст. Вы также можете отключить любую команду с помощью той же команды (togglecommand). Ярлык 'OwnerHub' сделает так, что он отключает команды от всех, сохраняя при этом возможность самостоятельно использовать проклятие для гардероба, прозвищ и т. Д.",
    "listedtip51": "Есть команды, не указанные в списке, вы можете их найти?",
    "listedtip52": "Проклятие отслеживает ваши проступки, каждый может их увидеть, когда введет '#name transgressions'.",
    "listedtip53": "Ограничения в качестве наказания могут быть настроены под себя командой'punishmentrestraint'.",
    "listedtip54": "Когда кто-то произносит ваше триггерное слово, вы не сможете выйти из комнаты, пообщаться с кем-либо или изменить свое закрытие на установленное время. Повторное произнесение триггерного слова сбросит таймер. Если кто-то скажет это снова, а также 'unfreeze' в том же предложении, эффект триггера будет снят.",
    "listedtip55": "Вы и все, кого вы знаете, кто взаимодействует с вашим проклятием, можете выбрать предпочитаемый язык с помощью команды #name language.",
    "listedtip56": "Проклятие не сработает в комнате LARP. Он также восстановит ваше надлежащее состояние, если вы активируете его, чтобы предотвратить спам и несправедливое наказание. ВНИМАНИЕ, это означает, что он повторно применит все проклятые предметы на вас, если у вас были некоторые, которые вы удалили. Это помогает работать в одиночной игре, не застревая.",
    "listedtipRoomInfo": "Нажмите кнопку еще раз, чтобы получить еще один совет.",
    "listedtipChatInfo": " Отправьте команду еще раз, чтобы увидеть другую подсказку.",
    "listedtipNoMore": "На данный момент больше нет доступных советов. Возможно, вы захотите предложить новые! Вы также можете выполнить '#name tip reset', чтобы снова просмотреть все подсказки.",
   
};
