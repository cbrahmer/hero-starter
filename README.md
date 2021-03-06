

![](https://raw.githubusercontent.com/JavascriptBattle/javascript-battle-website/master/public/img/black-knight.png)

#Javascript Battle - Hero Starter Repo#

---
##Play Now##

If you are anxious to join the fight (and who wouldn't be), then all you need to do is fork this repo. It really is that easy. We have a lot of shenanigans going on in the background to make this happen and we have tried to make this process as seamless as possible.


####Steps To Play Now####

  * If you haven't already, please sign up for [GitHub](https://github.com/join).
  * After signing up, navigate back to this page and at the top right of your screen, click the 'Fork' button.
  * When you click the 'Fork' button, you will be asked where you want to fork this repo. Go ahead and click your username. This will effectively copy this repo into yours.
  * BAM!!! Now, you have a working repo in your account! Nice! 
  * The only thing left to do is navigate to the [Javascript Battle](http://javascriptbattle.com/) website and sign up. Make sure you tell us the name of your repo. 
    * **Hint** - You can find this info by looking at the url when you are in your repo. For example, the url for my repo is 'github.com/forrestbthomas/hero-starter'. My username is 'forrestbthomas' and my repo name is 'hero-starter'.
  * At this point, you have a working repo, with working hero code and you can watch your hero tilt with the best in tomorrow's battle. Once you are ready, you can begin diving in to the code, to make your hero even stronger and make Javascript Battle even more glorious!

##Advanced Play##

1. Cloning, Adding and Committing
2. The Hero's Brain
3. Pushing and Waiting

####Cloning, Adding and Committing####
You already have a working hero. You have watched the epic-ness that is your champion battling against other noble heroes. However, there comes a time in every hero's journey, when training becomes necessary.
In order to upgrade your hero's code you will first need to clone your hero-starter repo on to your local machine. If you are new to Git, this may sound intimidating, but once you get the hang of it, it will become second nature. The purpose of this Readme is not to give an overview of Git, but to give you enough to get started. If you want to learn more, and we definitely recommend that you do, you can check out these great resources:
  * [Git Documentation](http://git-scm.com/doc)
  * [Youtube Intro](https://www.youtube.com/watch?v=75_UrC2unv4&feature=youtu.be)
  * [Git Immersion](http://gitimmersion.com/)
  * [Git Cheatsheet](http://www.git-tower.com/blog/git-cheat-sheet-detail/)

######Steps######
  * Navigate to your repo and find the 'HTTPS clone URL' button on the right-hand side of the page, about half-way down. Make sure you are cloning with 'HTTPS' and click the 'Copy to Clipboard' button.
  * Create a new folder on your file system somewhere and navigate to that folder in the command line.
    * If you are new to the command line, a quick Google search will return some good results for command line introductions on your OS.
  * Once there, you will need to clone your repo using the following command:
```
git clone <your clipboard-repo-url>
```
For example, to clone my repo, I would use:
```
git clone https://github.com/forrestbthomas/hero-starter.git
```
  * Now, Git is tracking this repo on your local machine. When you make changes to any file in this repo, Git will know about it. Go ahead and open up your hero.js file.
    * To learn more about the code in your hero.js file, take a look at the comments above each line of code in both hero.js and helpers.js. 
  * Make some changes to the code.
  * Now, go back to the command line, navigate to the directory containing the hero.js file and check the status of your file with the following command:
```
git status
```
Your terminal should read:
```
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
# modified:   hero.js
#
no changes added to commit (use "git add" and/or "git commit -a")
```
Git is telling us that you have made changes to your file and wants to know what to do. 
  * You will need to type the following:
```
git add hero.js
```
This stages your hero.js file for a commit
  * Then type:
```
git commit
```
This will bring up a prompt in your terminal for you to write a message. This message will help you keep track of what changes you made and when you made them. Go ahead and type something descriptive of the change you just made. 
  * When done, close the window by pressing "ESC", ":", "w" and "q".
  * Now, Git knows about your changes and has a record of them. Before moving on to 'pushing,' let's pause and take a look at what is going on in hero.js.

####The Hero's Brain####
Inside of hero.js is some Javascript code. If you have never taken a look at Javascript before, we would recommend going through some online resources to get acclimated.
  * [Codecademy](http://www.codecademy.com/)
  * [Khan Acamdey](https://www.khanacademy.org/)
  * [Coderbyte](http://www.coderbyte.com/)
  * [Code School](https://www.codeschool.com/)
  * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

If you take a look at hero.js, you will notice that there are different move functions - most of which are commented out. Each function describes a specific type of hero behavior. 

  * The "Northerner" cares about moving North...all the time.
  * The "Blind Man" moves randomly around the board.
  * The "Unwise Assassin" only cares about killing other players, possibly to his own demise.
  * The "Careful Assassin" goes after other players as well, but cares more about his health than the "Unwise Assassin."
  * The "Safe Diamond Miner" cares about mining diamonds and making sure he or she is alive at the end of the game to enjoy the wealth.
  * The "Selfish Diamond Miner" cares about mining diamonds, but will also capture his own team's diamond mines.
  * The "Coward" will find the nearest health well and stay there.

If you want to try something different for tomorrow's game uncomment one of the heroes and try it out. [Watch](http://javascriptbattle.com/#replay) tomorrow's game and see how your hero does. Each day is going to offer a unique battle as each player alters which hero they decide to play with.

Once you get acclimated to the different types of heroes and think you want to give writing your own hero a shot, try altering some of the code. Maybe you want your miner to wait a little longer before going to a health well? What if your health nut was aware of where the nearest enemy was and tried to keep away? How about if the aggressor became a real berserker? The possibilities are endless!!! And that is exactly how we want it. Go crazy and change your hero however you want. Just remember to track your changes with Git by following the process above.

If you are looking for even more of a challenge, go ahead and take a look at the helpers.js file and begin picking apart our helper methods. Is there anyway you could adapt our pathfinding algorithm and use a variant in your hero.js file? What other helper methods should be available to your hero that we did not include? Go ahead and make any changes you want to the helpers.js file, but make sure the very bottom of the file reads:
```javascript
module.exports = helpers;
```
This allows our site to pull this code from your repo and use it in tomorrow's game.

####Pushing####

Once you have changed your hero to be the ultimate Javascript champion, you will need to push your changes to GitHub.

######Steps######
  * On the command line, navigate to your hero directory.
  * After adding and committing your changes, type in the following command:
```
git push origin master
```

  * This command will take your committed changes and push them up to your GitHub repo online. You will be prompted for your username and password to your GitHub account. Go ahead any type those in.
  * After that, navigate to your GitHub repo in your favorite browser and check out your altered files.
  * That's it! You have successfully altered your hero.js file and prepared your hero for tomorrow's battle. Now, we will wait and see how your hero does against other noble warriors in tomorrow's battle.

[Stop by](http://javascriptbattle.com/#page-top) the site tomorrow and see how your hero did. We encourage you to continue to make changes to your hero repo as often as you like. We hope this experience will both be an enjoyable and instructive experience. 

If we can make our site better in any way or make any instructions or code more explicit, please let us know. Until then, may the javascripts be with you!
