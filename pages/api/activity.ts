export default (req, res) => {
    if (req.method === 'GET') {
        return res.json(
            [
                {day: 3, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
                {day: 4, month: 'MARS', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
                {day: 5, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
                {day: 6, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
                {day: 7, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'}
            ]
        );
    } else {
        return res.status(405).send('Invalid method');
    }
}
