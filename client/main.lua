RegisterNetEvent('laptop:client/openUI')
AddEventHandler('laptop:client/openUI', function()
    print('open')
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = "openLaptop",
        iframe = Laptop.webPage,
        pagetitle = Laptop.webPageTitle,
        pageurl = Laptop.webPageUrl,
    })
end)

closeLaptop = function()
    SetNuiFocus(false, false)
end

RegisterNUICallback('closeLaptop', closeLaptop)