import React from 'react';
import { FormPresentation } from './FormPresentation';

class App extends React.PureComponent {
  submitForm = (event: any) => {
    console.log(event);
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
