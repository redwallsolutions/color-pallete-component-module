import React from 'react';
import { render } from "react-dom";

import {ItsWorking} from './lib'

const App = () => (
  <ItsWorking/>
);

render(<App />, document.getElementById("root"));
