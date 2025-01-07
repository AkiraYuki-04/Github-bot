# GitHub Bot 🤖
![Robut](https://github.com/user-attachments/assets/c6f92c50-9bde-460f-81da-dc550e7540fa)

![GitHub Bot]()  <!-- Replace with your own image URL -->

This repository contains an **automated GitHub bot** that commits changes to your repository on a regular basis. It generates **random commit dates**, modifies a `data.json` file, and simulates activity on your GitHub project.

> _Want to make your repo look active with frequent commits? This bot is for you!_

## Features 🎉

- Automatically makes commits to a GitHub repository.
- **Random commit dates** are generated over the last year using the `moment.js` library.
- Commits are made to a `data.json` file that is tracked by Git.
- Customizable number of commits to simulate activity.

## Demo GIF 🎬

Here’s a quick demo of the bot in action! 🎥

![Robot GIF](https://media.giphy.com/media/Yb568GGmZxoiLntbqm/giphy.gif)  

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

Usage 🚀
Once everything is set up, you can run the bot script to make commits:

-node index.js

The bot will make multiple commits to the data.json file with random commit dates within the last year. You can configure the number of commits in the script, such as makeCommits(100) to make 100 commits.




⚠️ Disclaimer
This project is provided "as is" without any warranties or guarantees. By using this bot, you agree to the following:

Use at Your Own Risk
The bot automates Git operations, including committing and pushing to repositories. Ensure you fully understand its functionality before using it in your GitHub repositories.

Responsibility
The author is not liable for any issues, including but not limited to accidental data loss, misuse, or violations of GitHub's terms of service. Test thoroughly in a non-critical environment before using this bot.

Compliance with GitHub's Terms of Service
Using this bot to artificially manipulate your GitHub contribution graph or commit history may violate GitHub's Terms of Service. This bot is intended for educational and testing purposes only. Use responsibly.
