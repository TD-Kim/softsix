import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={}>
                <Routes>

                </Routes>
            </Suspense>
        </BrowserRouter>
    )
};