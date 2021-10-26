import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import './Home.css'

const Home = () => {
    const url = 'https://tours-api-trial.herokuapp.com/tours';//api url

    //hooks for loading and storing api response
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true)

    //For fetching api
    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setTours(tours)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    //For loading api onload
    useEffect(() => {
        fetchTours()
    }, [])

    //For removing tour card if not intrested is clicked
    const removeTour = (id) => {
        const remove = tours.filter((item) => item.id !== id)
        setTours(remove)
    }

    // For loading component
    if (loading) {
        return <Loading />
    }

    // For Displaying if no tours left
    if (tours.length === 0) {
        return (
            <div className='title'>
                <h4>No Tours Left</h4>
                <button className='refresh-btn' onClick={fetchTours}>Refresh</button>
            </div>
        )
    }

    // JSX
    return (
        <div>
            <Header />
            <Card tours={tours} removeTour={removeTour}></Card>
            <Footer />
        </div>

    );
}

export default Home;