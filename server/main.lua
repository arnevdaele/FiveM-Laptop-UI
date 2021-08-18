RegisterCommand('laptop', function(source, args, rawCommand)
    local src = source
    TriggerClientEvent('laptop:client/openUI', src)
end, false)