import React, { useEffect} from 'react';

const CovidTracker = () => {

    const getCovidData = async () => {
        try {
            const resp = await fetch('https://api.covid19india.org/data.json');
            const data = await resp.json();
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div>
            <h1>Live</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        </div>
    );
};


export default CovidTracker;
