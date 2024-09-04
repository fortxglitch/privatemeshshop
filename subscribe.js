export default function handler(req, res) {
    if (req.method === 'POST') {
        const { userId, subscriptionType } = req.body;
        if (!userId || !subscriptionType) {
            return res.status(400).json({ message: 'User ID and subscription type are required.' });
        }

        // Logique pour traiter un abonnement (ici simulée)
        // subscriptions.push({ userId, subscriptionType });

        return res.status(200).json({ message: 'Subscription processed successfully.' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
