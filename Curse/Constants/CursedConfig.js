
//Base configs
function InitCursedConfig() {
  window.cursedConfigInit = {
    hasPublicAccess: true,
    hasCursedKneel: false,
    hasCursedSpeech: true,
    hasCursedOrgasm: false,
    isMute: false,
    disaledOnMistress: false,
    enabledOnMistress: false,
    hasEntryMsg: false,
    hasFullMuteChat: false,
    hasSound: false,
    hasRestrainedPlay: false,
    hasNoMaid: true,
    hasNoContractions: false,
    hasFullPublic: false,
    hasAntiAFK: false,
    hasRestrainedSpeech: false,
    canReceiveNotes: false,
    hasCaptureMode: true,
    hasReminders: false,
    hasForcedSensDep: false,
    isLockedNewSub: false,
    isLockedNewLover: false,
    isLockedOwner: false,
    hasDollTalk: false,
    hasForcedMeterLocked: false,
    hasForcedMeterOff: false,
    hasDCPrevention: true,
    cannotOrgasm: false,
    forbidorgasm: false,
    hasBlockedOOC: false,
    hasSecretOrgasm: false,
    hasNoEasyEscape: true,
    hasFullLengthMode: false,
    hasFullBlindMode: true,
    hasFullSlowMode: true,
    forcedRestraintsSetting: true,
    hasAsylumLockdown: false,
    hasNoResist: false,
    garbledNames: false,
    
    owners: ["14691", "75"],
    mistresses: [],
    blacklist: [],
    bannedWords: [],
    sentences: [
      { ident: "yes", text: "Yes, %target%" }, { ident: "no", text: "No, %target%" }, { ident: "rephrase", text: "May this be rephrased into a yes or no question, %target%?" }, { ident: "greetings", text: "Greetings, %target%, it is good to see you." }, { ident: "leave", text: "May %self% be excused, %target%?" }, { ident: "service", text: "How may %self% be useful for you today, %target%?" },
    ],
    cursedAppearance: [],
    cursedPresets: [],
    savedColors: [],
    charData: [],
    reminders: [],
    reminderInterval: 300000,
    entryMsg: "",
    say: "",
    sound: "",
    self: "I",
    targets: [{ ident: "miss", text: "miss" }, { ident: "mistress", text: "mistress" }],
    capture: { capturedBy: "", Valid: 0 },
    mistressIsHere: false,
    ownerIsHere: false,
    seenTips: [],
    deafImmune: [],
    triggerWord: {word: "", lastTrigger: 0, triggerDuration: 300000},

    slaveIdentifier: Player.Name,
    commandChar: "#",

    vibratorIntensity: 3,
    orgasms: 0,
    strikes: 0,
    lastPunishmentAmount: 0,
    strictness: 1,
    strikeStartTime: Date.now(),
    punishmentsDisabled: false,
    punishmentRestraints: [
      {stage: 1, name: "Chains", group: "ItemLegs"},
      {stage: 2, name: "Chains", group: "ItemFeet"},
      {stage: 3, name: "Chains", group: "ItemArms"},
      {stage: 4, name: "FullBlindfold", group: "ItemHead"},
      {stage: 5, name: "PantyStuffing", group: "ItemMouth"},
      {stage: 6, name: "HarnessBallGag", group: "ItemMouth2"},
      {stage: 7, name: "SteelMuzzleGag", group: "ItemMouth3"},
    ],
    transgressions: [],

    warned: [],
    toUpdate: [],
    mustRefresh: false,
    isRunning: false,
    isSilent: false,
    isClassic: false,
    isEatingCommands: false,
    isLooseOwner: true,
    mustRetype: true,
    hasRestraintVanish: false,
    canLeash: true,
    hasWardrobeV2: true,
    hasCommandsV2: false,
    hideHelp: false,
    hasIntenseVersion: true,
    wasLARPWarned: false,
    hasFullCurse: true,
    disabledCommands: [],
    optinCommands: [
      { command: "asylumlockdown", isEnabled: false }, { command: "forcedsay", isEnabled: false }, { command: "disableblocking", isEnabled: false }
    ],
    chatlog: [],
    savedSilent: [],
    translation: [],
    chatStreak: 0,
    shouldPopSilent: false,
    hasForward: false,
    onRestart: true,
    hasHiddenDisplay: false,
    
    customWhisperForward: false,
    customApproveLeave: false,
    customApproveLists: false,
    customLockPerms: false,
    customList: [14691, 75],
    customCanLeave: 0,
  };
}