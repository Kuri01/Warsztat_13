import React, { useContext, useEffect } from 'react';
import { ApiContext } from '../../apiContext';
import ErrorAndLoadingBoundary from '../../components/ErrorAndLoadingBoundary/ErrorAndLoadingBoundary';
import ProductList from '../../components/ProductList/ProductList';

function MainPage() {
    const { productList } = useContext(ApiContext);
    const { data, error, loading, callApi } = productList;

    useEffect(() => {
        callApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ErrorAndLoadingBoundary isError={error} isLoading={loading}>
                {data && <ProductList data={data} />}
            </ErrorAndLoadingBoundary>
        </>
    );
}

export default MainPage;
