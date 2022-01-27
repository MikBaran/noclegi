import {useEffect,useLayoutEffect, useState} from 'react';

const quotes = [
    'Świat jest jak książka. Ci, którzy nie podróżują, czytają jedynie pierwszą stronę.',
    'Raz w roku pojedź w miejsce, w którym nigdy nie byłeś.',
    'Turysta widzi to, co przyjechał zobaczyć. Podróżujący widzi to, co ma przed oczami',
    'Inwestycja w podróże to inwestycja w siebie',
    'Zwiedzaj świat. To lepsze niż najpiękniejszy sen',
    'Cel podróży to nie miejsce do którego zmierzasz, a nowa perspektywa z jaką patrzysz na świat',
    'Jeśli myślisz, że przygody bywają niebezpieczne, spróbuj rutyny. Ona jest śmiercionośna.',
]

const styles= {
    position: 'absolute',
    padding: '10px',
    top: '10px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
}

function InspiringQuote() {

    const [quote, setQuote] = useState('Wczytywanie cytatu...');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ///..
        setLoading(false);
    }, [])

    useLayoutEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, [loading]);

    return (
        <p style={styles}>{quote}</p>
    );
}

export default InspiringQuote;