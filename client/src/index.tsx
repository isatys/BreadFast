import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';

import { AppController } from './application/controllers/appController';


hydrateRoot(document.getElementById('app'),
    <React.StrictMode>
        <AppController />
    </React.StrictMode>
    );
