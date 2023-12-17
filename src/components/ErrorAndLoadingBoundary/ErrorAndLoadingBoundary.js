import React from 'react';
import { Skeleton } from '@mui/material';

const ErrorAndLoadingBoundary = ({ isError, customErrorComponent, isLoading, children }) => {
    if (isError) {
        return <>{customErrorComponent ? customErrorComponent : <div>Error!</div>}</>;
    }

    if (isLoading) {
        return <Skeleton />;
    }

    return children;
};

export default ErrorAndLoadingBoundary;
