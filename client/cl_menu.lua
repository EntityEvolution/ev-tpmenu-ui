local isOpen

local function nuiState(state)
    if state then
        isOpen = true
        SendNUIMessage({ action = 'show' })
        SetNuiFocus(true, true)
    else
        isOpen = false
        SendNUIMessage({ action = 'hide' })
        SetNuiFocus(false, false)
    end
end

-- NUI Callbacks
RegisterNUICallback('close', function(_, cb)
    if isOpen then
        nuiState(false)
    end
    cb({})
end)

RegisterNUICallback('getTeleportData', function(data, cb)
    if isOpen then
        TriggerServerEvent('ev:setTeleportData', data.vector, data.heading)
    end
    cb({})
end)

-- Commands
RegisterCommand('tpmenu', nuiState(true))

RegisterKeyMapping('tpmenu', 'Open the teleport menu', 'keyboard', 'f5')

-- Threads 
CreateThread(function()
    while isOpen do
        DisableControlAction(0, 322, true)
    end
end)