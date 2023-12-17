import styled from 'styled-components';
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)`
    margin-top: 20px;
    margin-bottom: 20px;

    .MuiGrid-item {
        display: flex;
        justify-content: center;
    }

    .MuiGrid-item .MuiPaper-root {
        width: 100%;
        height: 100%;
    }

    .MuiGrid-item .MuiPaper-root .MuiCardContent-root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .MuiGrid-item .MuiPaper-root .MuiCardContent-root .MuiTypography-root {
        text-align: center;
    }

    .MuiTypography-root.MuiTypography-h5 {
        height: 60px;
        margin-bottom: 10px;
    }
`;
