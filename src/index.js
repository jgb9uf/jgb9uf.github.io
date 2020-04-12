import React from 'react';
import ReactDOM from 'react-dom';
import NightErrands from './NightErrands';

import artists from './data/artists.json';
import releases from './data/releases.json';
import thoughts from './data/thoughts.json';
import zines from './data/zines.json';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NightErrands releases={releases} thoughts={thoughts} artists={artists} zines={zines}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
