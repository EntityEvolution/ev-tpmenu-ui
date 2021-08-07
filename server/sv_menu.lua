RegisterNetEvent('ev:setTeleportData', function(isOpen, x, y, z, heading)
    if isOpen then
        local source <const> = source
        local ped = GetPlayerPed(source)
        if GetVehiclePedIsIn(ped, false) ~= 0 then
            ped = GetVehiclePedIsIn(GetPlayerPed(source), false)
        end
        SetEntityCoords(ped, tonumber(x), tonumber(y), tonumber(z), false, false, false, true)
        SetEntityHeading(ped, tonumber(heading))
    else
        print('Possible hacker: ' .. tostring(source))
    end
end)
