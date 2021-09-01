local isOpen

local function nuiState()
    isOpen = true
    SendNUIMessage({ action = 'show' })
    SetNuiFocus(true, true)
end

-- NUI Callbacks
RegisterNUICallback('close', function(_, cb)
    if isOpen then
        isOpen = false
        SetNuiFocus(false, false)
    end
    cb({})
end)

RegisterNUICallback('getDataCoords', function(data, cb)
    if isOpen then
        TriggerServerEvent('ev:setTeleportData', isOpen, data.x, data.y, data.z, data.heading)
    end
    cb({})
end)

-- Commands
RegisterCommand('tpmenu', nuiState)

RegisterKeyMapping('tpmenu', 'Open the teleport menu', 'keyboard', 'f5')
