import React from 'react';
import { Pagination, Stack } from '@mui/material';

const AppPagination = ({ setPage, pageNumber = 10 }) => {
    const handleChange = (event, page) => {
        setPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ position: 'fixed', bottom: 0, zIndex: 200, backgroundColor: 'green', padding: '10px 80px', color: 'white', width: '100%',  }}>
            <Pagination
                onChange={handleChange}
                style={{ display: 'flex', justifyContent: 'center' }}
                variant="outlined"
                count={pageNumber}
            />
        </Stack>
    );
};

export default AppPagination;