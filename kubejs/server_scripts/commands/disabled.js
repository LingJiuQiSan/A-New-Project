ServerEvents.command(event => {
    let command = event.getParseResults().getReader().getString()
    var fly = /fly/
    if (fly.exec(command) != null) {
        event.server.runCommandSilent(`tellraw @a "\u00a74请使用天使指环来进行飞行"`)
        event.cancel()
    }
})