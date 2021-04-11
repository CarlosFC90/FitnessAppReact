import { useState, useEffect } from 'react'

const useFetch = url => {
    const[ data, setData ] = useState([]);
    const[ loading, setLoading ] = useState(false);
    const[ error, seterror ] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url);
                let data = await res.json();
                setData(data);
                setLoading(false);
                
            } catch (error) {
                setLoading(false)
                seterror(error)
            }
        }

        fetchResource()
    }, [url])

    return { data, loading, error}
}

export default useFetch;