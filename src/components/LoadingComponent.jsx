import React from 'react';
import { Spinner, Stack } from 'react-bootstrap';
import './LoadingComponent.css';

const LoadingComponent = () => {
    return (
        <>
            <Stack direction='horizontal' gap={3} className='container-loading px-5 mt-5 mb-5'>
                <div>
                    <h3>Cargando información... ⭕️😋</h3>
                        
                </div>
            </Stack>
        </>
    );
};

export default LoadingComponent;