# Github-Fetch

A GUI that allows a user to interact with Github's REST API endpoints by searching by a Github username or an organization name. 

The username search interacts with the users endpoint in the Github API via AJAX calls and returns information available from that endpoint. User profile information, a list of public repositories with at least one commit, a link to view repo commits, and the date of the last commit are populated. 

The organization name search interacts with the orgs endpoint in the Github API via AJAX calls and returns organization profile information and a list of public members of the organization with their username (linked to their github profile) and avatar. 

[See it in action](https://mcarpent87.github.io/git-fetch/)

## Getting Started

1. Clone or download this repo to your local machine

### Prerequisites

* Node.js
* NPM
* live-server

### Installation

1. After cloning or downloading the repository, open your terminal in your text editor of choice and change directory to where the project is living: 

```
cd <path-to-content>
```
2. Check that Node.js and npm (installed alongside node) are on your machine by typing these two commands into your terminal:

```
node -v
```

```
npm -v
```

3. If node is not installed then install [Node.js (Latest LTS Version)](https://nodejs.org/en/download/)

4. Install [live-server](https://gist.github.com/donmccurdy/20fb112949324c92c5e8) by typing this in the command line:

```
npm install -g live-server
```

5. Run this command to start the app and your browser should open a new tab at http://localhost:8080/: 

```
live-server
```
## API Endpoints
![Example of orgs/{:orgname}/public_members endpoint](/img/API_1.jpeg)

![Example of the users endpoint](/img/API_2.jpeg)

## Search Users
1. Start by typing a letter, user profiles will begin poping up as you type. You can enter whatever combination of letters you want and a user will pop up as long as that username exists. Or enter a specific username. 
2. The users profile will appear and below that a list of all repositories the user has contributed to. 

## Search Organization Members
1. Enter an organization name, an organization that doesn't exist in the Github API will return null. 
2. If a valid organization name is entered, profile information for the organization will pop up and a list of organization public members will appear. Click on a member username to view their github profile/name/email. 

## Built With
* Javascript
* [jQuery](https://jquery.com/) - Javascript library used for AJAX API calls, looping through arrays returned from the API, and generating HTML. 
* HTML
* CSS
* [Bootstrap] (https://getbootstrap.com) - CSS Framework.
* [Bootswatch] (https://bootswatch.com) - Themes for Bootstrap.
* [Github REST API](https://developer.github.com/v3/) - User, Organization, and Member data retrieved from Github's REST API.


## To Do's:
* Implement pagination for search results
* Display more information from API endpoints in user and orgs profile
* Convert DT from messy format in API JSON into something more readable
* Create .env file for API credentials
