**regarding what happens when you send input to the AI** <br />
when you press enter, AID does the following: <br />
Any WIs that you triggered go up top <br />
Remember goes below this <br />
Story content <br />
The AN <br />
A bit more story content.

<br />

**regarding testing tokens for input characters** <br />
you can use this:
https://npm.runkit.com/npm
```
var npm = require("npm")
var gpt3 = require("gpt-3-encoder")

const {encode, decode} = require('gpt-3-encoder')

const str = 'Write something to test here'
const encoded = encode(str)
console.log('Encoded this string looks like: ', encoded.length)
console.log('We can look at each token and what it represents')
for(let token of encoded){
  console.log({token, string: decode([token])})
}
```
You'd want to replace 'Write something to test here' with whatever. You'll have to escape any ' characters with a preceding slash, though.
There's also https://github.com/Gnurro/AIDscripts
The easiest way is to just search “tokenizer” on the explore page
https://discord.com/channels/653773513857171475/760367080808644608/822632669842112613

<br />

**regarding whether the AI is aware of data in scenario quests** <br />
It doesn't guide the story, no. Ai only checks if the selected quest is complete
Keeping info in quests makes no difference. The AI does not see the contents of Quests

<br />

**regarding EWIJSON, Simple Context, and NotesPlus** <br />
All three do some form of adjusting data in the scenario context.
Simple Context can be considered EWI super-lite.
To give you an idea on how to accomplish the same thing in EWI..
/desc Some scene information. is the equivalent /set .#[p=10] Some scene information
/think You think things are going well. is equivalent to /set .#[p=5] You think things are going well.
/focus Stuff and things. is equivalent to /set .#[p=3] Stuff and things.
... <br />
Simple context excels at short stories, EWI is a god when it comes to crafting fully realised worlds.
The version of SimpleContext in my develop branch allows for regex key matching and places modified context between sentences rather than lines 
but I'm not sure if it's even worth releasing..
... <br />
EWI does this only within lines rather than sentences, and testing has shown not much greater results with placing custom context between sentences rather than lines.
TBH I think that EWI just needs some better documentation and nearly anyone would be able to use it for some really awesome stuff.
As a professional engineer in my day job I'll admit I've struggled understanding EWI and believe it's greatest flaw is how hard it is to get started in.
... <br />
Notes Plus from my impression is not very powerful, but is very convenient. It replicates the most used EWIJSON functionality, 
except it immediately and manually inserts it rather than looking for a regex key.  The LMI function is also very helpful
Pushing your own agenda actively is easier on Notes++, but making it so it triggers with a condition is not. Setting author and editor notes is also easier in Notes++

<br />

**regarding placement of data in context** <br />
You want to keep the things you insert at 0, 1 and 2 to be very limited, and then 3-6 is a bit better.
I personally do max of two lines at 1, then max of four at 3, and max of six at 5
My lines are fifteen tokens each or less since I play on griffin
I use EWIJSON for that, with simple WI keys and a line that looks like this: boss|Sif|wolf#[T=1L=2F=2]
Change the numbers to make them all a bit bigger as you make more notes about the same character
... <br />
The AI will look at the entire LMI at once.
So placement matters for context, but only in the same way humans understand it
So adding an author note:
```
Sif will lose this fight, and I want to emphasis the sadness in her eyes as she fails to protect the grave of 
her former master will trigger regardless of whether that's the next line or four lines after, but it's more likely to be regarded as important if it's closer.
```

<br />

**regarding a Memory Lookback function for scripting** <br />
assuming EWIJSON:
```
const getMemory = (text) => { return info.memoryLength ? text.slice(text.indexOf("📝")+2, info.memoryLength) : '' } (replace existing const in shared)
```
assuming no EWISJON:
```
let memory = text.slice(text.indexOf("📝")+2, info.memoryLength) (in context modifier)
```
Then place a 📝 at the top of remember (if you use a newline after, change the +2 to a +3).
... <br />
It'll nuke any vanilla WIs, but EWI [m] WIs are still kept at least.
put 📝 in your WIs if you want them? I dunno, this was a quick and dirty fix.
(and then just .replace("📝","") after, I guess)
... <br />
...and the literal :pencil: emoji was the most context sensible unicode character I could think of.
wanted it short, identifiable, and least likely to conflict

<br />

**regarding using emojis to save tokens and how girffin and dragon assign a different number of tokens to parsed characters** <br />
after using ♀ for a few days now, I'm sold. It's the way to go. Using the male version too though mainly just to save 3 characters,
it's not really important for them (never really had much issue with AI making the males switch sides)
Be careful if you're on griffin, the male version may be shorter but it's also two tokens

<br />

**on the topic of keeping mythical beasts from talking** <br />
this is working pretty well for a pet dragon:
```
cannot speak instead body language
```

<br />

**regarding the world generator and it's ineffectiveness unless the user also tailor makes their WIs** <br />
I can't help but imagine a lot of casual users who don't know the technical details of WIs would be confused by world generator.
Because those fancy locations and stuff they're burning their energy creating aren't ever going to be used unless the player goes out of their way to name drop it...
unless maybe a faction mentions it, but then same problem - gotta mention the faction.
When I first saw it released I was under the assumption the difference between it and
regular adventures would be that it would work under the hood to nudge random WIs to memory to see if the AI will play with them.
That’s why I’m thinking like, this is more of an in depth tutorial on how much to put in an WI and what kind of things need a WI rather than what it’s billed as
Kind of like how AID is marketed as a cyya but it’s a predictive text generator

<br />

**regarding implementing sub-locations in your WIs via EWI regex** <br />
You can steamline your WIs a bit with things like sub-locations.
```
(exit|leave).*?guild hall#[l=2p=2]
```
entry:
```
< Outside guild hall everything on fire>
```
for example triggers when you write After finishing your business, you exit the guild hall
and, uh, yeah the following output was about the inferno raging outside. But ideally the plan was to just replace that with locale information.
Spares the guild hall WI entry from needing to waste space writing about what's outside.
That’s really cool. Allows for locations to be at a low l value
With clever keyword choice you could define individual rooms as long as you can predict the text you'd use to go there
I would recommend to add spaces/newlines pre entry so it doesn't get wrongcalled
e.g using only (elli) will be mentioned in selling, or (hare) will be mentioned in shared

<br />

**you can mix formats** <br />
But not within a given WI

<br />

**format editor** <br />
there's this https://starstruck.gitlab.io/world-info-format-editor/


**manipulating the starting prompt of paid worlds** <br />
https://discord.com/channels/653773513857171475/751191565413777510/817849299819560961

**What data is stored/used and how**
https://discord.com/channels/653773513857171475/760367080808644608/822609418012065852

**The AI effectively staying consistent when referencing a WI**
https://discord.com/channels/653773513857171475/760367080808644608/822641965316702209

**Discussing AI keeping track of inventory**
https://discord.com/channels/653773513857171475/760367080808644608/822656823453679627

**Recommended tags for WI state (mind, etc)**
https://discord.com/channels/653773513857171475/760367080808644608/823272929382236232

**On how functionality over details is most important to the AI / a little goes a long way**
https://discord.com/channels/653773513857171475/760367080808644608/823286983534968902

**Editor's note vs Author's note**:
https://docs.google.com/document/d/12HDSN4wm9hMF4nRGWtkuT_RUkwx2Gqr2qhNSOORbSMk/edit

**On using EWIJSON with various formats and what each format is good for**
https://discord.com/channels/653773513857171475/760367080808644608/823346294541910058
https://discord.com/channels/653773513857171475/760367080808644608/823370823880278047
https://discord.com/channels/653773513857171475/760367080808644608/823393124171776002

**How many WIs can be loaded into memory, what limits them, etc**
https://discord.com/channels/653773513857171475/760367080808644608/823359948305727508
https://discord.com/channels/653773513857171475/760367080808644608/823383010963488778

**Since the first output of a scenario uses Classic, not Griffin/Dragon, it's best to test mid-scenario**
https://discord.com/channels/653773513857171475/760367080808644608/823410419988561932

**Compressing futureman**
https://discord.com/channels/653773513857171475/760367080808644608/823560479737380944
https://discord.com/channels/653773513857171475/760367080808644608/823644201538289734

**futureman <> vs <<>>>>**
https://discord.com/channels/653773513857171475/760367080808644608/824075588926701599

**Futureman converter**
https://discord.com/channels/653773513857171475/760367080808644608/817033200030449676

**Using futureman without EWIJSON ie use Neanderthal with <<>>>>**
https://discord.com/channels/653773513857171475/760367080808644608/824049588469760060

**The use of different formats in different situations (ex futureman is used because it exists in front context**
https://discord.com/channels/653773513857171475/760367080808644608/824075637974106153

**Merging Encounters by Gnurro and Simple Context by OnePunch VAM**
https://discord.com/channels/653773513857171475/717764081058185316/823541966854815764
https://discord.com/channels/653773513857171475/717764081058185316/823563014224609291

**The AI does not tend to remember negation well**
https://discord.com/channels/653773513857171475/760367080808644608/823632792478023750

**Costumes with EWIJSON**
https://discord.com/channels/653773513857171475/760367080808644608/824023578445217832

**EWIJSON guides/tutorials/explainations**
https://discord.com/channels/653773513857171475/717764081058185316/823825751836983306
https://discord.com/channels/653773513857171475/717764081058185316/823908779225120819

**Encounters guides/tutorials/explainations**
https://discord.com/channels/653773513857171475/717764081058185316/823886068797276191
https://discord.com/channels/653773513857171475/717764081058185316/823937236084850779

**Manipulating nested references in WIs to create vanilla random encounters**
https://discord.com/channels/653773513857171475/760367080808644608/823967904273137714

**Effectively using WIs for races and factions**
https://discord.com/channels/653773513857171475/760367080808644608/824029334414688256

**A/N research testing doc**
https://justpaste.it/9ofj1

**ZaltysSnek updated 3-23-21**
https://discord.com/channels/653773513857171475/760367080808644608/824141507124527143
https://discord.com/channels/653773513857171475/760367080808644608/763102056349171773

**Getting an NPC to talk a certain way**
https://discord.com/channels/653773513857171475/760367080808644608/824341763153330256
https://discord.com/channels/653773513857171475/760367080808644608/824428107741003797

**On testing methods**
https://discord.com/channels/653773513857171475/760367080808644608/823671204207788054
https://discord.com/channels/653773513857171475/760367080808644608/814983161892175882
https://discord.com/channels/653773513857171475/760367080808644608/824332537291604049

**The death of the Spice Rack format**
https://discord.com/channels/653773513857171475/760367080808644608/811522392547131452

**On combining Zaltys with CATnip to get locations more accurate**
https://discord.com/channels/653773513857171475/760367080808644608/824428978848006165

**Compressed futureman is good for locations aparently**
https://discord.com/channels/653773513857171475/760367080808644608/824336464548331570
