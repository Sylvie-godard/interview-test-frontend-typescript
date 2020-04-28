export default (req, res) => {
    if (req.method === 'GET') {
        return res.json({
            username: 'user@domain.tld',
            password: '123456789'
        });
    } else if (req.method === 'POST') {
        let data = req.body;
        console.log(data);
        if (data.username === 'user@domain.tld' && data.password === '123456789') {
            return res.status(200).json({ valid: true })
        } else {
            return res.status(400).json({ valid: false })
        }
    } else {
        return res.status(405).send('Invalid method');
    }
}
