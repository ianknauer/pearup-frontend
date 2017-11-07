# pearup-frontend

Here's where you'll find the front end of Pear-up. It's built using the [ember javascript framework](https://emberjs.com/) and connects to a Ruby on Rails API.

## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd pearup-frontend`
* `npm install`

## Running / Development

* `ember s --proxy https://pearup.nanoapp.io/`
* Once you've run the command above you can visit the site running on your computer at [http://localhost:4200](http://localhost:4200).

## Git & Terminal Cheatsheet

### Terminal

* `ls` View a list of everything in your current directory.
* `cd folder-name` to move into a folder and `cd ..` to move back up one level.
*  `mkdir folder-name` to create a folder

### Git

* `git checkout -B branch-name` replace branch-name with something that makes sense for what you're working on.
* `git add .` adds changes from all the files in the folder structure to git.
* `git commit -m "message goes here"` give your commit a message so that you know what changes were made.
* `git push origin branch-name` push your changes on the branch back up to github.
* `git pull origin branch-name` pull all the changes to a branch from github. Typically will be used with master branch.
* `git branch -d branch-name` delete a branch locally from your computer. Good for cleanup! __never delete master__.
