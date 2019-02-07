
[CONNECT TRUMP (TO RUSSIA)](https://karenksmith.github.io/connect4/)

Connect 4 Instructions  
   
- Click the top row to drop your piece into that column
- Join four of the same tokens together to win and block your opponent from doing the same! 

![Imgur](https://i.imgur.com/eyY8Rdm.png)



I had a few challenges during this process, let's go over them! 

In the below code I was getting a bug when trying to show the player token image when switching turns. I had to use the slashes to let the computer ignore the quotes - it was the only way it worked. 

![Imgur](https://i.imgur.com/0I1Lq1C.png)

Getting the winner was also a fun learning experience. I had to store all the winning combos into an array, an array of arrays, and then compare the player moves arrays against the winning combo array. The player array loops through each item in the winning combo array to check for a match.

![Imgur](https://i.imgur.com/XtvK8y9.png)

Connect 4 is different than tic tac toe in that you can only place a token on the bottom space in a column or the lowest possible space availalbe in a column. So the formula was to loop through the column until there was an available space - if there was, it would place the token, if not it would check for the next available space and so on. You'll notice the top clickAbles numbers were to make it so the user can only click on the top row to move. 

![Imgur](https://i.imgur.com/HpnORPp.png)

I also had fun with the design but you'll see when you play! 


Powered by:  
   - HTML  
	- CSS  
	- Javascript  
	- Jquery  
	- Imgur