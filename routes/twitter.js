const express = require('express');

const router = express.Router();
const { getRequestToken, verifyCredentials } = require("../lib/twitter");

router.get("/twitter/oauth", async function (req, res) {
    try {
        let data = await getRequestToken();
        res.status(200).json({
            data: data
        });
    } catch (err) {
        res.status(400).json({
            message: err,
            error_code: 0
        });
    }
});

router.post("/twitter/oauth/verifyCredentials", async (req, res) => {
    let requestTokenSecret = req.body.requestTokenSecret;
    let oauthToken = req.body.oauthToken;
    let oauthVerifier = req.body.oauthVerifier;

    let data = await verifyCredentials(oauthToken, requestTokenSecret, oauthVerifier);

    res.status(200).json({
        data: data
    });
});

router.get("/twitter/oauth/callback", async (req, res) => {
    res.status(200).json({
        data: {
            oauthToken: req.query.oauth_token,
            oauthVerifier: req.query.oauth_verifier
        }
    });
});

module.exports = router;
