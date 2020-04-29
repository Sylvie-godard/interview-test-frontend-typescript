import React from 'react';

interface Props {
    day: number;
    month: string;
    text: string;
    key: number;
}

const Activity: React.FC<Props> = ({ day, month, text}) => {
    return (
        <div className='activity'>
            <div className='date-activity'>
                <p>{ day } <br/>
                { month }
                </p>
            </div>
            <div className='activity-text'>
                Vous avez demandé <strong>{ text }</strong>
            </div>
        </div>
    )
};

export default Activity;
