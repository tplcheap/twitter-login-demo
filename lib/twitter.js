const twitterAPI = require("node-twitter-api");

var twitter = new twitterAPI({
    consumerKey: process.env.TWITTER_API_KEY,
    consumerSecret: process.env.TWITTER_API_SECRET,
    callback: process.env.TWITTER_CALLBACK
});

function getRequestToken() {
    return new Promise((resolve, reject) => {
        twitter.getRequestToken(function (error, requestToken, requestTokenSecret) {
            console.log(error);
            if (error) {
                reject(error);
            } else {
                resolve({
                    url: `https://twitter.com/oauth/authenticate?oauth_token=${requestToken}`,
                    requestTokenSecret: requestTokenSecret
                });
            }
        });
    });
}

async function verifyCredentials(oauthToken, tokenSecret, oauthVerifier) {
    return new Promise((resolve, reject) => {
        twitter.getAccessToken(oauthToken, tokenSecret, oauthVerifier, function (error, accessToken, accessTokenSecret) {
            if (error) {
                reject(error);
            } else {
                twitter.verifyCredentials(accessToken, accessTokenSecret, {}, async function (error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            }
        });
    });
}

module.exports = {
    getRequestToken,
    verifyCredentials,
}
