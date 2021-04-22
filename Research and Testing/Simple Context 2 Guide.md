# Simple Context 2
A simple set of commands to build out and play your story your way.

![Simple Context 2 in Action](https://cdn.discordapp.com/attachments/717764081058185316/828097660556148796/unknown.png?width=1610&height=846)
## Main Features
- [x] **Keep the AI on track of your story automatically**

- [x] **Create, edit, and format world info entries all without leaving the input field**

- [x] **Define relationships, change scenes, build factions or entire worlds**

- [x] **Track which and where entries show up in the context**

- [x] **Easily place notes or entry data *anywhere* in the context**

- [x] **Compatible with any popular format and optionally converts entries on injection**

- [x] **Customize everything from the user interface to scene breaks and paragraph spacing**

- [x] **Designed from the ground up to be flexible and user-friendly**

- [x] **Custom titles, automatic pronoun matching, character point of view swapping, and much more!**

<br />

More info at the official discord [here](https://discord.com/channels/653773513857171475/717764081058185316/828113500827811890).

Want to jump right in?
<br />You can play a Harry Potter themed example world info with everything already setup [here](https://discord.com/channels/653773513857171475/717764081058185316/833599529554018364).

<br />

## Usage

### Input Commands
###### Script and HUD Control
Commands for tweaking functionality of the script itself and its graphical display.
* `/config` toggles display of the configuration menu (enable/disable signposts, paragraph spacing etc).
* `/debug` toggles debugging mode which outputs modified context to HUD.
* `/enable` allows script to modify context (default).
* `/disable` disables context modification and hide HUD.
* `/show` makes the HUD visible (default).
* `/hide` hides the HUD.
* `/min` minimizes the HUD.
* `/max` maximizes the HUD.

###### Menu Navigation
Commands for moving through the graphical display menus.
* `!` exits any menu. If changes were made, a `y/n` prompt will appear to confirm saving of changes made.
* `>` and `<` moves the current selection forward (down) or back (up) the list of menu options.
* `>>` and `<<` moves the current selection to the next or previous menu page.
* `#0` will move the current selection to the label option, or first (top) of the list of menu options.
<br />Entering any number except 0 will move the current selection to the nth option in the list counting from the top.

###### Context Definition
Commands for creating and tweaking of context-related content, with examples. Each has a graphical menu to guide you through the process.
* `/e` or `/entry John` creates or loads the world info [entry](#entries) with the label "John".
* `/r` or `/rel John` opens the [relationship](#relationships) menu for "John".
* `/t` or `/title ex wife` creates or loads the [title](#titles) with the label "ex wife".
* `/f` or `/find Mary` searches and displays all [scenes](#scenes), [entries](#entries) and [titles](#titles) with the label "Mary".
* `/b` or `/ban John, Mary` prevents the entries "John" and "Mary" from being injected into context.
<br />With no entries specified, `/ban` by itself will clear all previous bans.

###### Scene and Perspective
Commands for loading different scenes and switching control over the player character, with examples.
* `/y` or `/you John` switches the user POV and control to the character "John" (only use with 2nd person perspective).
* `/s` or `/scene Chapter 1` opens the [scene](#scenes) creation/editing menu for the scene with the label "Chapter 1".
* `/l` or `/load Chapter 1` loads the [scene](#scenes) and executes any text to prompt as per configuration in the scene menu.
* `/n` or `/notes` will display all currently active [custom notes](#custom-notes) (see next).
* `+💭#500: You think this will be an easy victory` creates/updates a [custom note](#custom-notes) labeled `💭` and injected before 500 characters into the context.

###### Advanced Usage
Commands tailored towards power users, with examples.
* `/flush` will clear state.displayStats in the rare case that it bugs out.
* `@`, `#`, `$`, `%`, or `^` are [quick entry creation](#quick-entry-access) symbols that correspond with each entry type. Left to right, they are `Character`, `Location`, `Thing`, `Faction`, and `Other`.
  * `#Hogwarts: is a school for wizards: is a large castle: is a place of great mystery` creates the location entry with the label "Hogwarts" and fills in each of the entry's fields with the corresponding information, separated by `:`s.
  * `#Hogwarts+2:  with tall gothic spires` appends the included information to the second field of the entry labeled "Hogwarts" such that it now reads `is a large castle with tall gothic spires`.
  * `@convert!: John Smith, Jane Smith, Mary` will add all vanilla WIs with the keys "John Smith", "Jane Smith", and "Mary" as SC2 character entries.

<br />

### Details
#### Navigation
Simple Context 2 features a graphical menu heads-up display (HUD) for ease of use.

<img src="https://cdn.discordapp.com/attachments/717764081058185316/833547181004816404/unknown.png" width="502">

Navigation of a menu is done through quick input commands.



Occasionally a small menu prompt will appear just above the input field when additional information is needed.

<img src="https://cdn.discordapp.com/attachments/717764081058185316/833546932999421992/unknown.png" height="127">

<br />

#### Entries
Entries are effectively the nouns of your story (people, places, things, etc). "Entry" is short for World Info Entry as in the optional data that AI Dungeon uses to flesh out scenarios.

![Vanilla World Info Entries](https://user-images.githubusercontent.com/1778722/115657800-5e1ef200-a2ec-11eb-9517-ee6b577955b4.png?height=200)

World info entries (or WIs for short) are incredibly useful and when used well can greatly enhance the AI's storytelling ability. However, writing them is cumbersome and tweaking them to function most effectively even more so. That's where Simple Context 2 comes in.

Creating entries in SC2 is as easy as typing
```
/entry Snape
```
From there, all you need to do is choose what type of entry this will be (for example, type `character`)

![Entry Type Menu Prompt](https://user-images.githubusercontent.com/1778722/115659018-c40c7900-a2ee-11eb-919e-bed059a5b30a.png)

and a graphical interface where you can input more details will appear at the top right of the screen

![Entry Fields Menu HUD](https://user-images.githubusercontent.com/1778722/115659587-9bd14a00-a2ef-11eb-974e-d4649fed7598.png)

Each emoji represents a different field where you can add details about the entry. The most common fields are `MAIN`, `SEEN`, `HEARD`, and `TOPIC`. Note that not all entry types have all of these fields.
<br />Let's go over each of these:
* `📑 MAIN` describes the absolute basics of your entry. If it is a character, it might include gender, race, height, etc. This always appears alongside any mention of the entry's label. Comparible to the Zaltys format `DESC` category.
* `👁️ SEEN` captures the appearance of your entry: A character's eyes or hair, a location's hills or structures, etc. This triggers when an entry has been seen by a character or when its visual features have been noted in the story. Comparible to the Zaltys format `APPEAR` category.
* `🔉 HEARD` involves how an entry sounds but also how it acts. This is triggered when an entry has made a sound or spoken a line and is comparible to the Zaltys format `MIND` category.
* `💬 TOPIC` is for any other details that either don't fit in the previous fields or are too broad to single out into just one, such as history or favorite food. Triggered when an entry has been referenced and is comparible to the Zaltys format `SUMMARY` category.




##### Character


![An Entry Example](https://cdn.discordapp.com/attachments/717764081058185316/833242721741045770/unknown.png)




##### Location


##### Thing


##### Faction


##### Other


<br />

#### Relationships

...

Relationship Mapping:
```
DISPOSITIONS
 1 hate
 2 dislike
 3 neutral
 4 like
 5 love

MODIFIERS
 x ex

TYPES
 F friends/extended family
 L lovers
 A allies
 M married/member of faction
 E enemies

[1-5][FLAME][-+x]

eg: Jill:1 Jack:4F, Mary:2Lx, John:3A+
```


<br />

#### Titles

<br />

#### Scenes

...

##### Changing Perspective

for example in the above screenshot, if I used /you Snape it would change all the entries to:
```
📑 : You are a dour man.
👁️ : You have greasy hair and a hooked nose.
🔉 : You talks about the dark arts.
💬 : You were a follower of the Dark Lord.
```

...

##### Loading Scenes
...
Note that `/l!` or `/load! Chapter 1` with that exclaimation point loads the [scene](#scenes) WITHOUT executing any text to prompt.

...

Multiple scenes can be loaded at once, combining their effects
```
/load Intro Scene, Cloudy Weather, Jack's POV, badly hurt, fluff prompt
```
All notes get accumulated and overwritten in order of scene load.  The SCENE BREAK text only appears for the very first scene loaded.
Of course you can bypass prompt like usual.
```
/load! healthy, sunny weather
```

...

##### Custom Notes
This command is a catchall that allows you to not only set as many notes to inject into context as you want, but it also allows you to specify WHERE you inject the note. Syntax is as follows:
```
+LABEL#POSITION:TEXT
```

Where:
 * `LABEL` is the unique label to give the note (ie, `think` or `🧠`).
 * `POSITION` is the distance back from the user input (front of context) the note should be injected and is measured in total characters (rounded to whole sentences).
 * `TEXT` is the actual text to inject into context itself.

Examples:
```
+🧠:100:This is my focus text
+think:This is my think text
+☁ Cloudy:600:This is some weather text 
+🎬 Chapter 1:This is some scene text
```

Editing the position of an existing note is easy. Simply call the command again with a different POSITION:
```
+🧠:234
+🎬 Chapter 1:675
```

Same with changing the content of a note:
```
+🧠:This is my NEW focus text
```

Removing a note is quick and easy:
```
+🧠
+think
+🎬 Chapter 1
```

You can hoist the injected note to the very top of the context.
```
+🧠#-1:This will be at the top.
+☁ Cloudy#-20:This will be above the -1 entry (the very very top).
```

Or automatically append a prefixed label to it
```
++Weather:This note will begin with Weather as a prefix
```

You can set as many notes on a scene as you want. Open the scene with /s My Scene and navigate to Page 2. From here you can enter notes as you normally would from outside the menus.

Hiding notes is also possible. Add a note that is hidden by default:
```
+my_note#500!: This is my test note
+my_other_note!:Some note text.
```

To hide a visible note:
```
+my_note!
```

To show a hidden note:
```
+my_note!
```

<br />

#### Quick Entry Access
(in progress...)
`@`, `#`, `$`, `%`, or `^` are quick entry creation symbols.
<br />Each symbol corresponds with an entry type. Left to right, they are `Character`, `Location`, `Thing`, `Faction`, and `Other`.
* When placed left of a label, they allow for quick entry creation. Fields are separated by `:`.
<br />For example, `$Hogwarts Castle: is a school for wizards: has tall gothic spires: is a place of great mystery`
or `@Snape: is a dour man: has greasy hair and a hooked nose: talks about the dark arts: was a follower of the Dark Lord`.
* When placed left of label along with a plus or equals symbol, they allow for quick appending/overwriting of individual fields on an existing entry. Examples:
<br />`@Harry+1: this is appended to the MAIN entry`
<br />`@Harry+main: same thing as ^`
<br />`@Harry=3: this will overwrite the contents of the HEARD entry`
<br />`@Harry=heard: same thing as ^`
<br />`$Stargate=1: Stargate is a device used to travel to other planets`
* When placed left of the `convert` keyword and an exclaimation point, they convert existing vanilla world info entries in bulk.
<br />For example, `@convert!: John Smith, Jane Smith, Mary` will add all vanilla WIs with those keys as SC2 character entries.
If used *without* an exclaimation point, it will do a dry run without converting anything instead returning what *would* have been converted.
If used with two exclaimation points, it will *overwrite* the existing entries.
<br />It also works great with regex. For example: `#convert!!: /.*Town/gi`


<br />

#### Configuration

<br />

## What's the point of all this?
(note: is this section necessary anymore?)
The point of collecting all this data is to inject it into the context in a sensible way and hopefully coerce the AI into keeping to the "script" as it were.  This allows for an AI that doesn't forget important facts, people or motivations as often.




