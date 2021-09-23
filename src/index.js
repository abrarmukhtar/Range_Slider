import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import App from "./Components/App";
import {Provider} from 'react-redux'
import store from './store'
import '../src/style.css'

ReactDOM.render(
<Provider store={store}>

    <App />
</Provider>
,
 document.getElementById("root"));
