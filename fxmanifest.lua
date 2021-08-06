fx_version 'cerulean'
 
game 'gta5'
 
lua54 'yes'
 
description 'A simple NUI teleport menu made by Entity Evolution'
 
version '1.0.1'
 
client_script 'client/cl_menu.lua'

server_script 'server/sv_menu.lua'
 
ui_page 'html/ui.html'

files {
    'html/ui.html',
    'locations.json',
    'html/css/style.css',
    'html/fonts/*.ttf'
    'html/js/*.js'
}