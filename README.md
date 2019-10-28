# codingwizard

## Overview

Coding Wizard is a 16 bit 2d tile-based role player game made entirely from scratch in JavaScript. 
The user plays as a coding wizard that can cast spells to defeat evil bugs in the developed universe.

[Check Out the Live Site Here!](https://justinlieu06.github.io/codingwizard/)

## Features
The game allows the player to move around in the viewport, and destroy bugs via using spells that are casted by clicking.
Bugs respawn on a random part of the map's edge.
Scoring is based off of how the player interacts with the world.


### Viewport
The map and game entities are contained inside a viewport which moves with the player. The player sprite is unable
to escape the viewport since the focus is on the player sprite, but other entities like enemies can exist outside 
of the viewport.

### Enemies
The map initially spawns evil bugs on random locations of the map. Upon killing a bug, the bug will respawn in a
random part of the map's edge. The bugs will always travel the fastest route towards the player. Upon touching the
player, the bug will despawn, but the player's score will decrease.

### Fireball
The player can cast fireballs by clicking on the map. The fireball's trajectory is based off of where the player clicks
in relation to their character sprite. The fireball will move away from the player sprite until it hits the edge of the
viewport where it will be destroyed or until it hits a bug where it will destroy the bug and increment the player's score.

### Trail
As the coding wizard moves around the map, he leaves a trail based off of where he has traveled. For each tile the wizard
moves, the player's score is incremented, and the map adds more to the trail.

## Potential Future Features

* More spells
* Prevent player from going in water or leaving map
* More bug sprites
* Collectable loot
