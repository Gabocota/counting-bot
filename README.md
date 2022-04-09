# counting-bot
This bot will write on you keyboard from the number you specify up until it hits the limit you set.
Good for Discord channels like this one:

![image](https://user-images.githubusercontent.com/88735758/162547913-234619a7-c576-43da-bb8a-187d377c0ca5.png)

SETUP:
Windows: 
- Download Nodejs latest: https://nodejs.org/en/download/
- Continue installation wizard.
- Check instalation with "node -v" in cmd.
- Create a folder and put bot.js in it.
- Open that folder in the cmd with "cd <the dir of your folder>".
- Install dependencies: 
    1. "npm install robotjs"
    2. "npm install prompt-sync"
  
- Now just run "node bot.js" to run it.
  
Linux:
- Install Nodejs: sudo apt update
                  sudo apt install nodejs
                  sudo apt install npm
                  nodejs -v
  
- Dependencies: npm install robotjs
                npm install prompt-sync
  
- Now run: node bot.js to start the bot.


USAGE:
- When you start the bot you have to set 3 parameters
  
![image](https://user-images.githubusercontent.com/88735758/162548701-3527179a-0d00-49a4-be72-73d70749e25b.png)
- Number to start will be the first number you want the bot to write. If the count you want to continue is in 130 you would set this to 131.
- Numbers to unput is how much numbers you want it to write before it stops. This one is simple.
- Delay you fine tune it to what you want. For Discord 500 ms is an acceptable rate.
  
- After you press enter it will wait 3 seconds for you to tab to the window you want to write.
  
- This bot has a auto stop in case the Discord timeout message shows up. 
    
  ![image](https://user-images.githubusercontent.com/88735758/162548903-ef3cce73-1b16-49ab-bcb7-6289bb822c2d.png)
- It takes your mouse position and sees saves the color of that pixel, then in every number it writes it checks if the color changed. I recomend putting the mouse in a place where nothing else is going to change.
    
  ![image](https://user-images.githubusercontent.com/88735758/162548977-71aa484f-84c3-490c-b88e-1e07ef152893.png)
- And thats it! Dont get yourself banned!
