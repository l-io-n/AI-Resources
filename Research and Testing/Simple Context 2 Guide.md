# Simple Context 2
A simple set of commands to build out the details of your story's context. 

![Simple Context 2 in Action](https://cdn.discordapp.com/attachments/717764081058185316/828097660556148796/unknown.png?width=1610&height=846)

More info at the official discord [here](https://discord.com/channels/653773513857171475/717764081058185316/828113500827811890).

A Harry Potter themed example world info with everything already setup can be found [here](https://discord.com/channels/653773513857171475/717764081058185316/833599529554018364).


## Usage

### Script Control
###### Script and HUD
Commands for tweaking functionality of the script itself and its graphical display.
* `/enable` allows script to modify context (default).
* `/disable` disables context modification and hide HUD.
* `/show` makes the HUD visible (default).
* `/hide` hides the HUD.
* `/min` minimizes the HUD.
* `/max` maximizes the HUD.
* `/debug` toggles debugging mode which outputs modified context to HUD.
* `/config` toggles display of the configuration menu (enable/disable signposts, paragraph spacing etc).

###### Context Definition
Commands for creating and tweaking of context-related content, with examples.
Each has a graphical menu to guide you through the process.
* `/e` or `/entry John` creates or loads the world info entry with the label "John".
* `/r` or `/rel John` opens the relationship menu for "John".
* `/t` or `/title ex wife` creates or loads the title with the label "ex wife".
* `/f` or `/find Mary` searches and displays all scenes, entries and titles with the label "Mary".
* `/b` or `/ban John, Mary` prevents the entries "John" and "Mary" from being injected into context.
<br />With no entries specified, `/ban` by itself will clear all previous bans.

###### Scene and Perspective
Commands for loading different scenes and switching control over the player character, with examples.
* `/notes` opens the global author's/editor's notes menu.
* `/you John` switches the user POV and control to the character "John" (only use with 2nd person perspective).
* `/scene Chapter 1` opens the scene creation/editing menu for scene with the label "Chapter 1".
* `/load Chapter 1` loads the scene and executes any text to prompt as per configuration in the scene menu.
<br />Note that `/load! Chapter 1` with that exclaimation point loads the scene WITHOUT executing any text to prompt.

###### Graphical Menu
Commands for navigation of the various graphical menus.
* `!` exits any menu. If changes were made, a `y/n` prompt will appear to confirm saving of changes made.
* `>` and `<` moves the current selection forward (down) or back (up) the list of menu options.
* `>>` and `<<` moves the current selection to the next or previous menu page.
* `#0` will move the current selection to the label option, or first (top) of the list of menu options.
<br />Entering any number except 0 will move the current selection to the nth option in the list counting from the top.

###### Advanced Usage
Commands tailored towards power users.
Quick Entry Creation:
* `@CHARACTER_LABEL: MAIN: SEEN: HEARD: TOPIC` 
* `#LOCATION_LABEL: MAIN: SEEN: TOPIC` 
* `$THING_LABEL: MAIN: SEEN: TOPIC` 
* `%FACTION_LABEL: MAIN: TOPIC` 
* `^OTHER_LABEL: MAIN: SEEN: HEARD: TOPIC` 





