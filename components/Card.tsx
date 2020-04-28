import React from 'react';

interface Props {
    logo: string;
    title: string;
    body: JSX.Element | JSX.Element[];
    link_url?: string;
    link_title?: string;
}

const Card: React.FC<Props> = (
    {
        logo,
        title,
        body,
        link_url,
        link_title
    }) => {
    return (
        <div className='box-society'>
            <div className='society-header'>
                <img src={ logo } alt='user'/>
                <h1>{ title }</h1>
            </div>
            { body }
            { link_title ? <a href={ link_url }>{ link_title }</a> : null}
        </div>
    );
};

export default Card;
