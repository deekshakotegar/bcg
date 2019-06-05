import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './common.scss';
import { SiteContainer } from './SiteContainer';

class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={SiteContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
