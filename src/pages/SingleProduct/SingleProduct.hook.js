import { useEffect } from 'react';
import { ProductsClient } from '../../api/clients/productsClient';
import { useParams } from 'react-router-dom';
import { useApi } from '../../utils/useApi.hook';

export const useSingleProduct = () => {
    const { getProductBySlug } = ProductsClient;
    const { data, error, isLoading, callApi } = useApi(getProductBySlug);

    const { slug } = useParams();

    useEffect(() => {
        callApi(slug);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, isLoading, error };
};
