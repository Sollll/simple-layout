import React from 'react';
import DataContext from './dataContext';

export class DataProvider extends React.Component {
  state = {
  };
  render() {
    return (
      <DataContext.Provider
        value={{
          state: this.state,
          updateField: (id, value) => {
            this.setState({
              ...this.state,
              [id]: value,
            });
          },
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
