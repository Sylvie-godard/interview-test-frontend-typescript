import React from 'react';
import Card from "./Card";

const RentReceipt: React.FC<{}> = () => {
    const body: JSX.Element = <div className='rent_color'>
        <p>avril 2017</p>
        <p>Rc Pro Raincoat</p>
    </div>;

    return (
        <Card
            logo='/img/icons/doc.svg'
            title='Mes dernières quittances'
            body={ body }
            link_url='#'
            link_title='Afficher toutes mes quittances'
        />
    )
};

export default RentReceipt;
