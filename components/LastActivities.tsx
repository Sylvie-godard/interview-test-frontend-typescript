import React, {useState, useEffect, Dispatch} from 'react';
import Card from "./Card";
import Activity from "./Activity";
import Axios from 'axios';

interface IActivity {
    day: number;
    month: string;
    text: string;
}

const LastActivities: React.FC<{}> = () => {
    const [activities, setActivities]: [IActivity[], Dispatch<IActivity[]>] = useState(null);

    async function fetchData() {
        const response = await Axios.get('http://localhost:3000/api/activity');
        const data = await response.data;
        setActivities(data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    const body: JSX.Element[] = activities?.map((value, index) => {
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
