import React from 'react';
import Card from "./Card";

const Society: React.FC<{}> = () => {
    const body: JSX.Element = <div>
        <p><strong>company_company (89391277419690)</strong></p>
        <p>
            341 Chasity Overpass,Runolfsson Walks <br/>
            33282 Johnsmouth, France
        </p>
    </div>;

    return (
        <Card
            logo='/img/icons/user.svg'
            title='Moi et ma société'
            body={ body }
            link_url='#'
            link_title='Voir mes informations'
        />
    )
};

export default Society;
