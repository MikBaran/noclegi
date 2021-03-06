import { useContext, useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ReducerContext from "../../context/reducerContext";

function Hotel(props) {
    const {id} = useParams();
    const [hotel, setHotel] = useState({});
    const reducer = useContext(ReducerContext)

    const fetchHotel = () => {
        setHotel({
            id: 2,
            name: 'Dębowy',
            city: 'Lublin',
            rating: 8.8,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius varius magna vitae maximus.',
            image: '',
        });
        reducer.dispatch({type: 'set-loading', loading: false});
    }

    useEffect(() => {
        reducer.dispatch({type: 'set-loading', loading: true});
        setTimeout(() => {
            fetchHotel();
        }, 500);
    }, [])

    if (reducer.state.loading) return null;

    return <h1>Hotel: {hotel.name}</h1>;
}

export default Hotel;