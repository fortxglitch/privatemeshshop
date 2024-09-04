export default function handler(req, res) {
    if (req.method === 'POST') {
        const { userId, username } = req.body;
        if (!userId || !username) {
            return res.status(400).json({ message: 'User ID and username are required.' });
        }

        // Logique pour créer un compte (ici simulée avec un tableau en mémoire)
        // Dans un vrai scénario, il faudra utiliser une base de données
        // accounts.push({ userId, username });

        return res.status(200).json({ message: 'Account created successfully.' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
