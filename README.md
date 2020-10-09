# stock-chat-frontend

Front-end in React and Typescript for the StockChat App.

### Deployed app on Heroku:

> https://stock-chat-apa.herokuapp.com/

### Deployed API on Heroku:

> https://stock-chat-api.herokuapp.com/api/v1

### Postman collection for route testing:

> https://www.getpostman.com/collections/227fce696dae1e977d37

---

# BONUS CHALLENGE TASKS ACCOMPLISHED:

- Two chat rooms;
- Unit testing creating a user with a not unique username;
- Errors handled: invalid commands (only the `/stock=` command is available), invalid stock code and issues with retrieving data from [stooq.com](stooq.com);

# PERCEIVED ISSUES:

- There are /major/ undocumented issues trying to implement sockets with mongoose during development, so I had to make a decision to diverge away from it, even if it's the obvious answer for a chat app. I had already set up most of the work with MongoDB and mongoose, so I didn't have the time to change approaches. So, I've implement polling (querying the database for new messages every 1) instead. Even if so, the technic for polling using hooks with React is quite good.

---

# Instructions for running the development environment of the frontend app:

## Clone the repo and change directory to it

```bash
git clone https://github.com/magluf/stock-chat-frontend.git

# or, if you have an SSH key setup for GitHub (recommended)
git clone git@github.com:magluf/stock-chat-frontend.git
```

## Make sure you have [Node.js](https://nodejs.org/dist/v12.19.0/) v12.x installed.

```bash
$ node -v
v12.19.0
```

## Make sure you have the [Yarn](https://classic.yarnpkg.com/en/docs/install/) package manager installed.

```bash
$ yarn -v
1.21.1
```

## Install dependencies and start the app (default port is 3000)

```bash
$ yarn
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
.
.
.
Done in 6.04s.
$ yarn start
Starting the development server...
.
.
.
Compiled successfully!

You can now view stock-chat in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.110:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

```

# Instructions to use the StockChat app.

### 1. The app opens up on the Login page by default, click on the Register link to register and be able to use the app.

### 2, Register with an unique username, valid e-mail and password;

### 3. Login with your username and password;

### 4. Two available chat rooms: `#general` and `#trivial`;

### 5. To get stock values from the `StockBot`, send the command `/stock=<VALID_STOCK_CODE>`;

### 6. The bot will query [stooq.com](stooq.com) and reply to the chat with the current Close value, if the stock code is valid and the website is available.
