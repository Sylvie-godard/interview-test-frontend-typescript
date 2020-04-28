import React from 'react';
import Card from "./Card";
import Activity from "./Activity";

interface activity {
    day: number;
    month: string;
    text: string;
}

const LastActivities: React.FC<{}> = () => {
    const activities: activity[] = [
        { day: 3, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
        { day: 3, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
        { day: 3, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
        { day: 3, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
        { day: 3, month: 'AVR', text: 'Vous avez demandé la résiliation de votre assurance RC Pro Raincoat'},
    ];

    const body: JSX.Element[] = activities.map((value, index) => {
        return <Activity key={index} day={value.day} month={value.month} text={value.text}/>
    });

    return (
        <Card
            logo='/img/icons/event.svg'
            title='Mes dernières activités'
            body={ body }
        />
    )
};

export default LastActivities;
