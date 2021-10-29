import { useState, useEffect } from 'react';

const Travelurl = 'https://tours-api-trial.herokuapp.com/tours';
const useFetch = (url = Travelurl, options = null) => {
    const [toursData, setData] = useState(null);
    useEffect(() => {
        fetch(url, options).then(res => res.json()).then(toursData => setData(toursData))
    }, [url, options]);
    return { toursData }
}

export default useFetch;