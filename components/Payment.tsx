import React from 'react';
import Card from "./Card";

const Payment: React.FC<{}> = () => {
    const body: JSX.Element = <div>
        <p>CB visa</p>
        <p> *** **** *** **** **</p>
    </div>;

    return (
        <Card
            logo='/img/icons/cb.svg'
            title='Mon mode de paiement'
            body={ body }
            link_url='#'
            link_title='Editer mon mode de paiement'
        />
    )
};

export default Payment;
