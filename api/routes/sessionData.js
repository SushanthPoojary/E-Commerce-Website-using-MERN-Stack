const stripeAPI = require("stripe")(process.env.STRIPE_KEY);

const sessionData = async (req, res) => {
    const {sessionId} = req.body
    console.log(sessionId);
    try {
        const response = await stripeAPI.checkout.sessions.retrieve(
            sessionId
        );
        res.status(200).json({response});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = sessionData;