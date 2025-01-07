# GitHub Bot 🤖

![GitHub Bot](https://www.google.com/imgres?q=github%20bot&imgurl=https%3A%2F%2Frepository-images.githubusercontent.com%2F156847937%2F2ac66980-0f3d-11eb-8e62-693087aa1f67&imgrefurl=https%3A%2F%2Fgithub.com%2Ftopics%2Fcrypto-bot&docid=bMScQvJLeKV7aM&tbnid=6jtOt5BBhlqzlM&vet=12ahUKEwjol4LP9OOKAxUxk1YBHa3SAc8QM3oECF0QAA..i&w=1500&h=1500&hcb=2&ved=2ahUKEwjol4LP9OOKAxUxk1YBHa3SAc8QM3oECF0QAA)  <!-- Replace with your own image URL -->

This repository contains an **automated GitHub bot** that commits changes to your repository on a regular basis. It generates **random commit dates**, modifies a `data.json` file, and simulates activity on your GitHub project.

> _Want to make your repo look active with frequent commits? This bot is for you!_

## Features 🎉

- Automatically makes commits to a GitHub repository.
- **Random commit dates** are generated over the last year using the `moment.js` library.
- Commits are made to a `data.json` file that is tracked by Git.
- Customizable number of commits to simulate activity.

## Demo GIF 🎬

Here’s a quick demo of the bot in action! 🎥

![GitHub Bot Demo]([https://media.giphy.com/media/abc1234/giphy.gif])  <!-- Replace with your own demo GIF -->

---

## Installation 🔧

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

Clone the repository to your local machine:


-git clone <https://github.com/AkiraYuki-04/Github-bot.git>

-cd Github-bot


2. Install Dependencies
Make sure you have Node.js installed. Then, install the required dependencies using npm:


-npm install

This will install the following libraries:

(moment) -for date manipulation.

(simple-git) - for interacting with Git repositories.

(jsonfile) - for writing to the data.json file.

(random)  - for generating random numbers.



3. Set Up GitHub Access 🔐
To authenticate your bot with GitHub, make sure your GitHub access is properly set up. You can use either HTTPS or SSH for authentication.

Example for HTTPS:

git remote set-url origin https://<username>:<token>@github.com/<username>/Github-bot.git

Make sure to replace <username> with your GitHub username and <token> with your GitHub personal access token.


4. Create a Personal Access Token (If Using HTTPS)
If you're using HTTPS authentication, you’ll need to create a GitHub Personal Access Token:

Go to [GitHub  Tokens  <https://github.com/settings/tokens>].

Create a new token with repo scope.

Use this token in your git remote set-url command.
