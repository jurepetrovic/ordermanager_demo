
import React, { Component } from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';

const MaterialIcon = ({ icon }) => {
  
  console.log("icon: " + icon);
  let resolved = require(`@material-ui/icons/${icon}`).default;
  return React.createElement(resolved);
}

class App extends Component {

  
  render() {

    return (
      <div>

        <MaterialIcon icon={"PowerSettingsNew"} />

      </div>
    );
  }
}

export default App;
