LevelEvents.loaded(event => {
    if (event.getLevel().getGameRules().get("doTraderSpawning") === "true") {
        event.server.runCommandSilent(`gamerule doTraderSpawning false`)
    }
    if (event.getLevel().getGameRules().get('keepInventory') === 'false') {
        event.server.runCommandSilent(`gamerule keepInventory true`)
    }
    if (event.getLevel().getGameRules().get('doMobLoot') === "true") {
        event.server.runCommandSilent(`gamerule doMobLoot false`)
    }
    if (event.getLevel().getGameRules().get('doMobSpawning') === "true") {
        event.server.runCommandSilent(`gamerule doMobSpawning false`)
    }
    if (event.getLevel().getGameRules().get('mobGriefing') === 'true') {
        event.server.runCommandSilent(`gamerule mobGriefing false`)
    }
    if (event.getLevel().getGameRules().get('doWeatherCycle') === 'true') {
        event.server.runCommandSilent(`gamerule doWeatherCycle false`)
    }
    event.server.runCommandSilent(`weather clear`)
    event.server.runCommandSilent(`time set noon`)
})

LevelEvents.tick(event => {
    if (event.getLevel().getGameRules().get("doTraderSpawning") === "true") {
        event.server.runCommandSilent(`gamerule doTraderSpawning false`)
        event.server.runCommandSilent(`tellraw @a "\u00a74你不能打开这个游戏规则"`)
        event.server.runCommandSilent(`tellraw @a "\u00a74我帮你把游戏规则doTraderSpawning设置为了false"`)
    }
    if (event.getLevel().getGameRules().get("keepInventory") === "false") {
        event.server.runCommandSilent(`gamerule keepInventory true`)
        event.server.runCommandSilent(`tellraw @a "\u00a74你不能关闭这个游戏规则"`)
        event.server.runCommandSilent(`tellraw @a "\u00a74我帮你把游戏规则keepInventory设置为了true"`)
    }
    if (event.getLevel().getGameRules().get("doMobLoot") === "true") {
        event.server.runCommandSilent(`gamerule doMobLoot false`)
        event.server.runCommandSilent(`tellraw @a "\u00a74你不能打开这个游戏规则"`)
        event.server.runCommandSilent(`tellraw @a "\u00a74我帮你把游戏规则doMobLoot设置为了false"`)
    }
    if (event.getLevel().getGameRules().get("doMobSpawning") === "true") {
        event.server.runCommandSilent(`gamerule doMobSpawning false`)
        event.server.runCommandSilent(`tellraw @a "\u00a74你不能打开这个游戏规则"`)
        event.server.runCommandSilent(`tellraw @a "\u00a74我帮你把游戏规则doMobSpawning设置为了false"`)
    }
    if (event.getLevel().getGameRules().get("mobGriefing") === "true") {
        event.server.runCommandSilent(`gamerule mobGriefing false`)
        event.server.runCommandSilent(`tellraw @a "\u00a74你不能打开这个游戏规则"`)
        event.server.runCommandSilent(`tellraw @a "\u00a74我帮你把游戏规则mobGriefing设置为了false"`)
    }
    if (event.getLevel().getGameRules().get("doWeatherCycle") === "true") {
        event.server.runCommandSilent(`gamerule doWeatherCycle false`)
        event.server.runCommandSilent(`tellraw @a "\u00a74你不能打开这个游戏规则"`)
        event.server.runCommandSilent(`tellraw @a "\u00a74我帮你把游戏规则doWeatherCycle设置为了false"`)
    }
})