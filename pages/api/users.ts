export default (req, res) => {
    if (req.method === 'POST') {
        let data = req.body;

        if (data.username === 'user@domain.tld' && data.password === '123456789') {
            return res.status(200).json({ valid: true })
        } else {
            return res.status(400).json({ valid: false })
        }
    } else {
        return res.status(405).send('Invalid method');
    }
}
