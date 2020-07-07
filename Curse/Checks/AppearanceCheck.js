/** 
 * Function that checks the current appearance of a character to patch in the rule items (curses)
 * IMPORTANT: Returns true if character needs refresh when using something else than an activator 
 */
function AppearanceCheck() {
  let isActivated = !(cursedConfig.mistressIsHere && cursedConfig.disaledOnMistress)
    && (
      (cursedConfig.enabledOnMistress && cursedConfig.ownerIsHere)
      || !cursedConfig.enabledOnMistress
    );
  let r = false;
  if (isActivated) {
    //Checks if settings are respected
    //Cursed collar
    if (
      cursedConfig.hasCursedKneel
      && Player.CanKneel()
      && !Player.Pose.includes("Kneel")
    ) {
      SendChat("The cursed collar on " + Player.Name + "'s neck gives her an extreme shock, forcing her to get on her knees.");
      KneelAttempt();
      TryPopTip(24);
      TriggerPunishment(0);
    }

    let warnAdd = 0;
    let warnRemove = 0;

    //Locked appearance (now all curse items)
    cursedConfig.cursedAppearance.forEach(({ name, group }) => {
      let item = Player.Appearance.filter(el => el.Asset.Group.Name == group && el.Asset.Name == name);
      if (
        itemIsAllowed(name, group) && item.length == 0 && name != ""
      ) {
        procGenericItem(name, group);
        warnAdd++;
        TriggerPunishment(6, [name, group]);
        TryPopTip(25);
      } else if (name == "" && itemNeedsRemoving(group)) {
        InventoryRemove(Player, group);
        cursedConfig.toUpdate.push(group);
        cursedConfig.mustRefresh = true;
        warnRemove++;
        TriggerPunishment(7, [group]);
        TryPopTip(26);
      }
    });

    if (warnAdd)
      SendChat(`The curse on ${Player.Name} restores her cursed item${warnAdd > 1 ? "s" : ""}.`);
    if (warnRemove)
      SendChat(`The curse on ${Player.Name} removes forbidden item${warnRemove > 1 ? "s" : ""}.`);


    //Cursed Orgasms
    if (cursedConfig.hasCursedOrgasm) {
      // New vibrators will default to max to be fair
      vibratorGroups.forEach(G => {
        let A = InventoryGet(Player, G);
        if (
          A && Array.isArray(A.Asset.Effect)
          && A.Asset.Effect.includes("Egged")
          && !brokenVibratingItems.includes(A.Name)
        ) {
          if (!A.Property) {
            procCursedOrgasm(G);
          }
          if (A.Property.Intensity != (cursedConfig.vibratorIntensity || 3)) {
            SendChat("The curse on " + Player.Name + " brings her vibrators back to their required intensity.");
            procCursedOrgasm(G);
            TryPopTip(27);
            TriggerPunishment(8);
          }
        }

      });
    }
  }
  return r;
}