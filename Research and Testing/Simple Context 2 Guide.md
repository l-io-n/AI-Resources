# Simple Context 2
A simple set of commands to build out the details of your story's context. 

![Simple Context 2 in Action](https://cdn.discordapp.com/attachments/717764081058185316/828097660556148796/unknown.png?width=1610&height=846)

More info at the official discord [here](https://discord.com/channels/653773513857171475/717764081058185316/828113500827811890).

A Harry Potter themed example world info with everything already setup can be found [here](https://discord.com/channels/653773513857171475/717764081058185316/833599529554018364).


## Usage

### Input Commands
###### Script and HUD Control
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
* `/you John` switches the user POV and control to the character "John" (only use with 2nd person perspective).
* `/notes` opens the global author's/editor's notes menu.
* `/s` or `/scene Chapter 1` opens the scene creation/editing menu for scene with the label "Chapter 1".
* `/l` or `/load Chapter 1` loads the scene and executes any text to prompt as per configuration in the scene menu.
<br />Note that `/load! Chapter 1` with that exclaimation point loads the scene WITHOUT executing any text to prompt.

###### Graphical Menu Navigation
Commands for navigation of the various graphical menus.
* `!` exits any menu. If changes were made, a `y/n` prompt will appear to confirm saving of changes made.
* `>` and `<` moves the current selection forward (down) or back (up) the list of menu options.
* `>>` and `<<` moves the current selection to the next or previous menu page.
* `#0` will move the current selection to the label option, or first (top) of the list of menu options.
<br />Entering any number except 0 will move the current selection to the nth option in the list counting from the top.

###### Advanced Usage
Commands tailored towards power users, with examples.
* `/flush` will clear state.displayStats in the rare case that it bugs out.
* `&` changes the contents of the `MAIN` field for the currently loaded scene.
  <br />This effectively functions as the old scene commands did in Simple Context 1:
  <br />`&This is your new /at, /time, /with, /think and /focus command`
* `@`, `#`, `$`, `%`, or `^` are quick entry creation symbols.
  <br />Each symbol corresponds with an entry type. Left to right, they are `Character`, `Location`, `Thing`, `Faction`, and `Other`.
  * When placed left of a label, they allow for quick entry creation. Fields are separated by `:`.
  <br />For example, `$Hogwarts Castle: is a school for wizards: has tall gothic spires: is a place of great mystery`
or `@Snape: is a dour man: has greasy hair and a hooked nose: talks about the dark arts: was a follower of the Dark Lord`.
  * When placed left of label along with a plus or equals symbol, they allow for quick appending/overwriting of individual fields on an existing entry. Examples:
  <br />`@Harry+1: this is appended to the MAIN entry`
  <br />`@Harry+main: same thing as ^`
  <br />`@Harry=3: this will overwrite the contents of the HEARD entry`
  <br />`@Harry=heard: same thing as ^`
  <br />`#Hogwarts+2: is a large castle`
  <br />`$Stargate=1: Stargate is a device used to travel to other planets`
  * When placed left of the `convert` keyword and an exclaimation point, they convert existing vanilla world info entries in bulk.
  <br />For example, `@convert!: John Smith, Jane Smith, Mary` will add all vanilla WIs with those keys as SC2 character entries.
  If used *without* an exclaimation point, it will do a dry run without converting anything instead returning what *would* have been converted.
  If used with two exclaimation points, it will *overwrite* the existing entries.
  <br />It also works great with regex. For example: `#convert!!: /.*Town/gi`


