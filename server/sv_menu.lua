RegisterNetEvent('ev:setTeleportData', function(vector, heading)
    local source = source
    local ped = GetPlayerPed(source)
    if GetVehiclePedIsIn(ped, false) ~= 0 then
        ped = GetVehiclePedIsIn(GetPlayerPed(source), false)
    end
    SetEntityCoords(ped, vector, false, false, false, true)
    SetEntityHeading(ped, heading)
end)