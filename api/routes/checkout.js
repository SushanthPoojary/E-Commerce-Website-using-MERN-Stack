const stripeAPI = require("stripe")(process.env.STRIPE_KEY);

const domainURL = process.env.DOMAIN_URL;

const createCheckoutSession = async (req, res) => {
    const { line_items } = req.body;

    if(!line_items){
        return res.status(400).json({ error: "missing required session parameters" });
    }

    let session;

    try {
        session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            // customer_email,
            mode: 'payment',
            success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainURL}/cancel`,
            shipping_address_collection: {
                allowed_countries: ['IN', 'US']
            }
        });
        res.status(200).json({ sessionId: session.id, });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'an error occured, unable to create session' })
    }

};

module.exports = createCheckoutSession;