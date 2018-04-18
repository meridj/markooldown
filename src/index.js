/*
** Packages
*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/*
** Containers
*/
import { Markooldown } from './containers';

/*
** Styles
*/
import './index.css';

ReactDOM.render(<Markooldown />, document.getElementById('root'));
registerServiceWorker();
