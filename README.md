# PE-tpmenu-ui 
[Preview](https://streamable.com/9iqh3q)

## Description

**PE-tpmenu-ui** is a teleport menu that allows you to teleport to pre-confugred locations. By default, this resource comes with 10 locations. These can be changed by editing the resource. See *Adding Locations*.

## Usage:
The menu can be opened by doing the following:
- `/tpmenu`
- Pressing `F5`. Players can adjust this ingame.

## Installation
* You can either download it or clone it with git and add the following to your `server.cfg`:
```
ensure pe-tpmenu-ui
```
**Do not seek support if you renamed the resource.**

## Adding Locations
1) To add more locations, you to the config.lua and setup and new location.
2) Then go to the ui.html and setup a new block that matches the action in your config.lua.
3) Finally you setup the script.js and add a new function that matches the id of your html file and the config.lua.

## Issues
If you find any issues with this please make sure to report them.
* [Issues](https://github.com/Project-Entity/pe-tpmenu-ui/issues)
* [Pull Request](https://github.com/Project-Entity/pe-pe-tpmenu-ui//pulls)
