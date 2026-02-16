import { useState, useEffect } from 'react';

export function useFetch(fetchFn) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const execute = async () => {
            try {
                setLoading(true);
                const result = await fetchFn();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        execute();
    }, [fetchFn]);

    return { data, loading, error };
}
