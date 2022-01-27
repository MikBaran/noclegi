import {useCallback, useContext, useEffect} from 'react';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel';
import useStateStorage from '../../hooks/useStateStorage';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import BestHotel from '../../components/Hotels/BestHotel/BestHotel';
import Hotels from '../../components/Hotels/Hotels';
import ReducerContext from '../../context/reducerContext';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

const backendHotels =[        
    {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: 8.3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius varius magna vitae maximus.',
    image: '',
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: 8.8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius varius magna vitae maximus.',
    image: '',
  }
];

export default function Home(props) {
    const [lasthotel, setLastHotel] = useStateStorage('last-hotel', null);
    const reducer = useContext(ReducerContext);
    useWebsiteTitle('Strona Główna');

    const getBestHotel = useCallback(() => {
        if (reducer.state.hotels.length < 2) {
          return null;
        }
        else {
          return reducer.state.hotels
            .sort((a,b) => a.rating > b.rating ? -1 : 1)[0];
        }
      }, [reducer.state.hotels]);

    const openHotel = (hotel) => setLastHotel(hotel);
    const removeLastHotel = () => setLastHotel(null);

    useEffect(() => {
      reducer.dispatch({type: 'set-loading', loading: true});

      setTimeout(() => {
        // setHotels(backendHotels);
        // setLoading(false);
        reducer.dispatch({type: 'set-hotels', hotels: backendHotels});
        reducer.dispatch({type: 'set-loading', loading: false});
      }, 1000);
    }, [])

    if (reducer.state.loading) return null;

    return (
        <>
        {lasthotel ? <LastHotel {...lasthotel} onRemove={removeLastHotel} />: null}
        {getBestHotel() 
        ? <BestHotel getHotel={getBestHotel}/> 
        : null
        }
        <Hotels onOpen={openHotel} hotels={reducer.state.hotels} />
        </>
    )
}