RegisterNetEvent('ev:setTeleportData', function(isOpen, x, y, z, heading)
    if isOpen then
        local source <const> = source
        local ped = GetPlayerPed(source)
        if GetVehiclePedIsIn(ped, false) ~= 0 then
            ped = GetVehiclePedIsIn(GetPlayerPed(source), false)
        end
        SetEntityCoords(ped, x, y, z, false, false, false, true)
        SetEntityHeading(ped, heading)
    else
        print('Possible hacker: ' .. tostring(source))
    end
end)