# Pocket Notes
#### ✎ Portable Tools For Any Story ✐
A suite of useful command-based tools including new and enhanced versions of almost every utility I released previously, all in the form of series of portable lorebook cards.

<sub>

**Table of Contents**

- [Installation](#installation)

- [Usage](#usage)

- [What's New](#whats-new)

- [List of Components](#list-of-components)

  - [Pocket Directors](#pocket-directors)

  - [Pocket Editors](#pocket-editors)

  - [Pocket Guides](#pocket-guides)

  - [Pocket Writers](#pocket-writers)

- [Notes on Recommend Use](#notes-on-recommend-use)

- [Community Add-Ons](#community-add-ons)

  - [RPG Generator Expansion](#rpg-generator-expansionby-valahraban--belverk)

  - [Boring to Sexy](#boring-to-sexyby-anon)

- [Changelog](#changelog)

- [Credits](#credits)

</sub>

---

#### Installation
Download the `.png` file of the Pocket Notes version you want. The newest version of the "Complete" edition is always recommended, but you can also select individual components à la carte if you want instead. It is also recommended to download and use a "Leakproofer," a banned words list designed to prevent the AI from outputting any Pocket Notes commands on its own.
<br>Pull up your scenario in NovelAI and open the Lorebook. In the top left corner of the Lorebook window, click the icon depicting an up-arrow pointing into a box. Select the `.png` and click Open. You can also simply import both the `.png` and the `.badwords` files via the Import button at the bottom of the left panel of the UI.

#### Usage
While the Pocket Notes Lorebook makes heavy use of phrase biasing, it is safe and will not conflict with most other Lorebook Entries. On it's own, Pocket Notes does nothing and makes no changes to your story until you invoke one of its commands (shown below). Even then, any effects of a command last for only one step of the story.
<br>Simply type the command (optionally surrounded by square brackets `[``]`) into your story followed by an input relating to the command, and hit Send. Pocket Notes will automatically add a newline followed by a corresponding output.
<br><sub>For more information and command specific notes, please refer to the [Notes on Recommend Use](#notes-on-recommend-use) section.</sub>
<br><br>

---

#### What's New
<sub>12/05/2021</sub>

<sub>

- Added new tool: Tense Converter (both Past and Present versions).

- Combined Oracles into single tool with more flexibility for asking different types of questions.

- Tweaked the Oracle's phrase biasing to be more objective in its answers.

- Overhauled the Difficulty Assessor function better, added support for likelihood and detail assessment, and renamed to Judge.

- Adjusted the Insertion Order and Position of almost every tool to better function with full context. *(Thanks Anon!)*

- Adjusted RegEx keys to be more flexible and account for end brackets.

- Revisited some of the global and individual phrase biasing to be less potentially destructive and better suit the individual needs of each tool.

- Separated out each category into its own modular component lorebook for greater organization and portability.

- Created optional individual ban token (`.badwords`) files to prevent the AI from leaking any commands into its own outputs.

</sub>

<br>

---

#### List of Components
##### **Pocket Directors**
*Force the AI to proceed as you please!*

- **Action Enforcer** - Enforces a specific action or event to happen.
<br>*Command*: `Do:`
  <details>
  <summary>Example...</summary>
  
  > [ Do: Show off by juggling ]
  
  > The man juggles four knives as he dances around on one foot, balancing himself with another knife held against his palm. He spins and twirls through the air, landing back on his feet without missing a beat.
</details>

- **Descriptive Narrator** - Paints a description of the scene, an action, or a character in more vivid detail.
<br>*Command*: `Describe:`
  <details>
  <summary>Example...</summary>
  
  > [ Describe: A flying wolf ]
  
  > A silver-furred wolf glides through the air above you, its wings beating furiously to keep its balance. You reach for your sword, but you know you’ll never be able to bring it up in time.
</details>

- **Dialoguer** - Encourages a character to speak a specific line, expression, or intention more fluently.
<br>*Command*: `Dialogue:`
  <details>
  <summary>Example...</summary>
  
  > [ Dialogue: Kim says The sky isn't the right color ]
  
  > Kim looks around, noticing that the sky isn't quite the same shade of blue as she remembered it being in her childhood.
  > "Oh my gosh! The sky isn't the right color," Kim exclaims with wide eyes.
</details>

- **Tone Shifter** - Establishes the tone to match emotions, tension, plot progression.
<br>*Command*: `Sentiment:`
  <details>
  <summary>Example...</summary>
  
  > [ Sentiment: ethereal ]
  
  > He was nothing but mist, wrapping around her body and pulling her closer to him; a chill breeze caressing every inch of skin it touched, tickling its way through the hollows of her mind, sending goosebumps over her stomach and lower still.
</details>

--

##### **Pocket Editors**
*Have the AI improve your writing!*[^1]

- **Perspective Converters**[^2] - Converts a given passage of text to a different narrative perspective.
<br>*Commands*: `[ Per1:`, `[ Per2:`, `[ Per3:`, `[ Per3m:`, or `[ Per3f:`
  <details>
  <summary>Example...</summary>
  
  > [ Per1: You are Lion, a knight in service to the kingdom of Midriel. You have been called upon by Queen Almalexia to undertake an important quest for her: retrieve a magical staff that has fallen into the hands of a powerful necromancer.]
  
  > I am Lion, a knight in service to the kingdom of Midriel. I have been called upon by Queen Almalexia to undertake an important quest for her—retrieve a magical staff that has fallen into the hands of a powerful necromancer.
</details>

- **Tense Converters** - Converts a given passage of text to a different narrative tense.
<br>*Commands*: `[ Past:`, `[ Present:`
  <details>
  <summary>Example...</summary>
  
  > [ Present: It was a dark and stormy night. I heard father making his usual ruckus in the kitchen. "Stop being so loud!" I shouted.]
  
  > It's a dark and stormy night. I hear father making his usual ruckus in the kitchen. "Stop being so loud!" I shout.
</details>

- **Prose Rephraser** - Rewrites a given sentence or passage with more eloquent phrasing.
<br>*Command*: `[ Write:`
  <details>
  <summary>Example...</summary>
  
  > [ Write: The sky is as beautiful as can be. ]
  
  > There are no clouds, just a vast expanse of clear blue washed in shades of lavender and rose-pink; like a painting of a golden god casting its rays down upon us as though they are reaching out from beyond.
</details>

- **Summarize**r - Condenses a given passage of text into a brief summary of events.
<br>*Command*: `[ Context:`
  <details>
  <summary>Example...</summary>
  
  > [ Context: The darkness in her robe lighten slightly and she nods to you in reply. You take out the map that Aonn gave you on the way to the swamp and open it to show her. "There's a dragon corpse nearby. That much you must already be aware of," you begin. "However, what you didn't know is that it houses a secret involving an artifact of great magical power. I can lead you to it and tell no one of our encounter."
  > After you finish speaking, she nods and says, "Very well," with an air of indifference, though you sense some hidden desire for your blood. Her voice again turns sinister. "I will grant your request, boy, but only because I enjoy such amusements. Once we have found the object, it will not matter what happens to you." ]
  
  > Summary: You agree to help the sinister woman find the dragon's treasure. She promises to let you live if you lead her to the dragon. She also warns you that once she has the treasure she may kill you.
</details>

--

##### **Pocket Guides**
*Ask the AI for clarification!*

- **Interpreter** - Deciphers cryptic messages or vague keywords.
<br>*Command*: `Interpret:`
  <details>
  <summary>Example...</summary>
  
  > [ Interpret: The setting is bridge involving cheap belt and dwarven cooridor. Your quest is to retrieve the superb leather jacket at the launch pad. Trying to stop you is the petty criminal skilled in hypnotism. ]
  
  > Meaning: A dwarf and a thief are both attempting to steal a rare jacket from a merchant crossing a rickety bridge; the dwarf has been put under hypnosis by the thief, who wants it for himself.
</details>

- **Judge** - Assesses the difficulty of a stunt, likelihood of a fact being true or action being successful, or measurement of something requiring precision.
<br>*Command*: `Judge:`
  <details>
  <summary>Example...</summary>
  
  > [ Judge: Catching a baseball ]
  
  > Easy enough for you to accomplish given your current skill level and equipment. However, the likelihood of success is low due to the ball's current trajectory and aerodynamic properties. Your best bet would be to throw it straight upwards and let gravity do the rest.
</details>

- **Oracle** - Answers a specific question about your current story.
<br>*Command*: `Question:`
  <details>
  <summary>Example...</summary>
  
  > [ Question: What is the wall made of? ]
  
  > Answer: It's not a wall, it's a fence. And it's made out of metal poles and chicken wire, which means that you can't climb over it or cut through it with anything but a very sharp knife.
</details>

--

##### **Pocket Writers**
*Can't think of anything? Have the AI write for you!*

- **Prompt Generators**[^3] - Generates a new scenario prompt in 1st, 2nd, or 3rd person.
<br>*Commands*: `Start:`, `Start1:`, `Start2:`, or `Start3:`
  <details>
  <summary>Example...</summary>
  
  > [ Start1: Lion, noir adventure ]
  
  > I am Lion of the City, private investigator, but it's not enough money to keep me going. So I take cases for whoever will pay me, even if they're criminals or just people looking for help. In this case, it was a woman who'd been murdered. The body had been found in her apartment, and she'd left behind a cryptic note.
</details>

- **Exposition Generator** - Sets up some backstory for a prompt if used near the story start, or builds out lore exposition for a character or setting when used later on.
<br>*Command*: `Setup:`
  <details>
  <summary>Example...</summary>
  
  > [ Setup: magic, steampunk ]
  
  > The Kingdom of Sendaria is plagued by dark magic. A curse has been cast upon the royal family, turning them all into clockwork zombies. To combat this evil, a team of scientists and mages are building a machine to destroy the source of the curse.
</details>
        
- **Plot Hook Generator** - Fabricates plot hooks and twists.
<br>*Command*: `Plot:`
  <details>
  <summary>Example...</summary>
  
  > [ Plot: hard science fiction, Lovecraft ]
  
  > Hook: A man travels through space aboard a ship piloted by a machine intelligence that dreams of escaping its masters. Along the way, it encounters another vessel carrying humans – including a woman who will prove to be more than just a passing acquaintance.
</details>
<br>

[^1]: Note that Pocket Editor commands require bracket encapsulation in order to work, and can be limited by your Token Context Limit. This is due to the potentially large passages of inputs they accept. That said, newlines are allowed, unlike with other commands.
[^2]: Regarding Perspective Converter commands, the # after `Per` corresponds with the 1st/2nd/3rd person perspective. The optional `m` or `f` following the number denotes a male or female character conversion respectively.
[^3]: For the Prompt Generator command, note that the optional # after `Start` corresponds with the 1st/2nd/3rd person perspective. Leaving `Start` without a following number allows any perspective of the prompt to be generated.
---

#### Notes on Recommend Use

> <sub>Due to the differences between versions of the finetune and modules trained on them, be sure to verify that the version of Pocket Notes you are using corresponds with the model and modules you intend to use with it. Otherwise, results may vary quite a bit. If you are using the correct version and are still having trouble, try changing up your phrasing since the AI might not whichevert tokens you might be using.</sub>

> <sub>It is not necessary to type a newline after your command as it will be generated automatically. You are free to use upper/lowercase and optionally encapsulate your command in square brackets `[``]`. Some commands work better with or without brackets. Bracket spacing does not matter much and all commands should work fine with both `[ Command:` as well as `[Command:`.</sub>

> <sub>If the AI starts to repeat/leak input commands on its own, it is recommended to import and use one or more of the "Leakproofer" `.badwords` files, as these will ban the Pocket Notes commands from AI use. Alternatively, you can either delete or comment out your commands after use. This is done by putting two hashtags `##` at the start of the line. For example: `##[ Do: Escape the attacker]`.</sub>

> <sub>All Pocket Editors have a large Search Range, meaning their lorebook keys may continue to trigger more than once, especially with a shorter Output Length setting (such as the default).</sub>

> <sub>While some commands (such as `Start`, `Setup`, and `Plot`) can be used on their own without any additional input, most work best when given an input following the command on the same line. When in doubt, refer to the examples in the corresponding lorebook entry.</sub>

> <sub>Later versions have discontinued support for slash `/` commands. All commands now require a colon `:` after the command keyword.</sub>

---

#### Community Add-Ons
##### [RPG Generator Expansion](https://cdn.discordapp.com/attachments/868472982471843870/915242621654405120/Pocket_Notes_RPG_Edition.lorebook)<br><sub>by [Valahraban | Belverk](https://discord.com/channels/836774308772446268/868472982471843870/915242621671190529)</sub>
> This contains the previous version of Pocket Notes published by @lion and few new generators for the words - Ambience, Equipment, Plants, Wildlife, Creatures. A small project I'm working on with lion's cooperation. Very small tweaks were made to the Narrators for personal taste such as grammar tweaks and enforcing the [ Dialogue: ] format for the narrators.

> Ambience adds and generates Ambience for any environment/scenario you request. Equipment generates a relatively detailed description of the character's gear. Plants generates plant life for the requested environment. Wildlife does the same for real-life animals (and monsters if you use a fantasy heavy prompt), Creatures is similar but specialized for fantasy and monsters. The mentioned keywords are complete, but I have a few more words to experiment with and add to make this a more complete generator package. So consider this a complete preview version! Looking forward to sharing work with lion and friends to make pocket notes and add-ons even greater.

![Examples of use](https://cdn.discordapp.com/attachments/868472982471843870/915242706115104838/unknown.png)

--

##### [Boring to Sexy](https://rentry.co/biases#boring-to-sexy)<br><sub>by [Anon](https://arch.b4k.co/vg/thread/360670534/#360811748)</sub>
> [This is a] Slightly updated version to reflect changes made to Pocket Notes v4. If you are already using Pocket Notes or plan to in the future this should slip in without conflict. If you want to create your own command/text generator you can duplicate either the Boring to Sexy entry or, if you're already using Pocket Notes, one of the Pocket Directors or Pocket Writers and build from there.

>Note that the original Boring to Sexy text generator wasn't really designed for something like this, so it attempts to cover all perspectives with broad strokes. This can lead to leakage of the incorrect perspective (particularly 2nd person) in scenarios where it might not be appropriate. To try and address this I created 3 entries for each perspective (Default is also available if you'd like to use or tinker with it). All entries are disabled by default. So be sure to ENABLE whichever is most relevant to your scenario. If you're willing to go the extra mile you can also create perspective based command keys for each entry so you can leave everything enabled (ex. sexy1, sexy2, sexy3, etc.). You can also fiddle with Phrase bias to get similar results by negatively biasing perspective keywords, but I figure most people want a set-it-and-forget-it sorta thing. Whatever floats your boat.

![Examples and instructions](https://files.catbox.moe/9azlsj.jpg)

<br>

---

#### Changelog

##### Version 2.0 - Portability Update <sub>12/05/2021</sub>

<sub>

- Added new tool: Tense Converter (both Past and Present versions).

- Combined Oracles into single tool with more flexibility for asking different types of questions.

- Tweaked the Oracle's phrase biasing to be more objective in its answers.

- Overhauled the Difficulty Assessor function better, added support for likelihood and detail assessment, and renamed to Judge.

- Adjusted the Insertion Order and Position of almost every tool to better function with full context. *(Thanks Anon!)*

- Adjusted RegEx keys to be more flexible and account for end brackets.

- Revisited some of the global and individual phrase biasing to be less potentially destructive and better suit the individual needs of each tool.

- Separated out each category into its own modular component lorebook for greater organization and portability.

- Created optional individual ban token (`.badwords`) files to prevent the AI from leaking any commands into its own outputs.

</sub>

--

##### Version 1.1 - Sigurd v4 Update <sub>11/18/2021</sub>

<sub>

- Added new tools: Perspective Converter, Summarizer, and Difficulty Assessor.

- Added new component: Pocket Editors

- Renamed and shortened/clarified some existing tools. New names are:

  <br> Do > Action Enforcer

  <br> Say > Dialoguer

  <br> Story > Descriptive Narrator

- Removed support for slash `/` commands.

- Broke out Tone Shifter from previous Story tool into its own tool.

- Replaced some of the commands with ones that v4 Sigurd seems more naturally inclined to use for the same purpose.

- Reorganized and categorized commands better.

- Tweaked all of the examples to be more consistent (and thus more powerful/effective).

- Adjusted the phrase biasing in a lot of cases to function better with Sigurd v4.

</sub>

--

##### Version 1.0 (Sigurd v3) <sub>11/09/2021</sub>
<sub>

- Created Pocket Notes including Directors, Guides, and Writers components.

- Commands for these components include:

  <br> /Do, /Say, /Story, /Interpret, /Question, /Plot, /Start, /Setup, /Write

</sub>

<br>

---

#### Credits
Pocket Notes by lion

<sub>
This lorebook utilizes improved versions of my existing tools:

- Prose Enhancer

- Input Enhancer

- Better Said Words

- Perspective Reinforcement

- Tense Reinforcement

- Tell, Don't Show

- Sensory Enhancer

- Oracle

- DIY Prompt Starter Kit

- Plot Hook Generator

<br>...as well as some minor examples from the community

</sub>

<br>*Thank you everyone for all your help!*

<br>

