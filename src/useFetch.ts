import {useState, useEffect} from 'react'


export default function useFetch<T>( {url} : {url: string}){

    const [dados, setDados] = useState<T | null>(null);
    const [erro, setError] = useState('');

    useEffect(() => {
       fetch(`http://localhost:8080/${url}`)
       .then(res => res.json())
       .then(dados => setDados(dados))
       .catch((erro => setError(erro)));
    }, [url])
    
    return {dados, erro};
}

