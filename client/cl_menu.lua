local isOpen

-- NUI Callbacks
RegisterNUICallback("close", function(data)
    if isOpen then
        isOpen = false
        SendNUIMessage({ action = 'hide' })
        SetNuiFocus(false, false)
    end
end)

RegisterNUICallback('tpOptions', function(data)
    TriggerServerEvent('PE:teleport', data.action)
end)

-- Commands
RegisterCommand('tpmenu', function()
    if not isOpen then
        isOpen = true
        SendNUIMessage({ action = 'show' })
        SetNuiFocus(true, true)
    else
        isOpen = false
        SendNUIMessage({ action = 'hide' })
        SetNuiFocus(false, false)
    end
end)

RegisterKeyMapping('tpmenu', 'Open the teleport menu', 'keyboard', 'f5')

-- Threads 
Citizen.CreateThread(function()
    while isOpen do
        Citizen.Wait(100)
        DisableControlAction(0, 322, true)
    end
end)