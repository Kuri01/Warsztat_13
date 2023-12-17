import { useState, useCallback } from 'react';

export const useApi = (apiMethod) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const callApi = useCallback(
        async (...params) => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await apiMethod(...params);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        },
        [apiMethod]
    );
    return { data, isLoading, error, callApi, setError };
};
