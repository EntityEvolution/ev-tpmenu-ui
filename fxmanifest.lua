fx_version 'cerulean'
 
game 'gta5'
 
lua54 'yes'
 
description 'A simple NUI teleport menu made by Entity Evolution'
 
version '2.0.0'
 
client_script 'client/cl_menu.lua'

server_script 'server/sv_menu.lua'
 
ui_page 'html/ui.html'

files {
    'html/ui.html',
    'slides.json',
    'html/css/style.css',
    'html/fonts/*.ttf',
    'html/js/*.js'
}