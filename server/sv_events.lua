RegisterNetEvent('PE:teleport', function(action)
    local source = source
    local ped
    if GetVehiclePedIsIn(GetPlayerPed(source), false) ~= 0 then
        ped = GetVehiclePedIsIn(GetPlayerPed(source), false)
    else 
        ped = GetPlayerPed(source)
    end
    for k, v in ipairs(Config.Locations) do
        if action == v.action then
            SetEntityCoords(ped, v.coords, false, false, false, true)
            SetEntityHeading(ped, v.heading)
        end
    end
end)