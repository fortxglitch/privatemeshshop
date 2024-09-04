export default function handler(req, res) {
    if (req.method === 'POST') {
        const { userId, discordId } = req.body;
        if (!userId || !discordId) {
            return res.status(400).json({ message: 'User ID and Discord ID are required.' });
        }

        // Logique pour lier un compte Discord (ici simulée)
        // const account = accounts.find(acc => acc.userId === userId);
        // if (!account) {
        //     return res.status(404).json({ message: 'Account not found.' });
        // }
        // account.discordId = discordId;

        return res.status(200).json({ message: 'Discord account linked successfully.' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
