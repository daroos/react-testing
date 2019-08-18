import React from 'react';
import { FormPresentation } from './FormPresentation';

class App extends React.PureComponent {
  submitForm = (event: any) => {
    debugger;
  };

  render() {
    return (
      <div className="App">
        <FormPresentation onSubmit={this.submitForm} />
      </div>
    );
  }
}

export default App;
