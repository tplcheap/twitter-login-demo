# Twitter Login Demo

This is a tutorial on how to implement Twitter login using Node.js.

## Step 1: Download the Code

First, you need to install Git, and then download the code.

```bash
git clone https://github.com/tplcheap/twitter-login-demo.git
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Configure

Create a `.env` file based on the `.env.example` template and modify the `TWITTER_API_KEY`, `TWITTER_API_SECRET`, and `TWITTER_CALLBACK` values. You can obtain `TWITTER_API_KEY` and `TWITTER_API_SECRET` from the [Twitter Developer](https://developer.twitter.com) website. Set `TWITTER_CALLBACK` to the authorized callback URL found in the User Authentication settings on the Twitter Developer page.

## Step 4: Start the Program

```bash
node index.js
```

## Step 5: Testing with Postman or Other API Testing Tools

1. Make a GET request to `http://localhost:3000/twitter/oauth` to get the Twitter URL and `requestTokenSecret`. Click on the URL to authorize and login through a third-party login page.
2. After authorization, you will be redirected to the `TWITTER_CALLBACK` URL with `oauth_token` and `oauth_verifier` in the URL.
3. Use `requestTokenSecret` from step 1 and `oauth_token` and `oauth_verifier` from step 2 to make a POST request to `http://localhost:3000/twitter/oauth/verifyCredentials`. This will return Twitter information, which you can use for querying, logging in, or binding Twitter accounts.

Your Twitter login demo tutorial is informative and provides clear steps on how to implement Twitter login with Node.js. It's a great resource for developers looking to integrate Twitter authentication into their applications.