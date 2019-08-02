# react-fn-datatables

A jQuery DataTable component-based built for React.js

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install react-fn-datatables.

```bash
npm i react-fn-datatables
```

## Usage

```javascript
import React from 'react';
import DataTable from 'react-fn-datatables';

var data = [
  [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
  [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
  [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
  [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
  [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
  [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
  [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ]
];

const columns = [
  { title: "Name" },
  { title: "Position" },
  { title: "Office" },
  { title: "Extn." },
  { title: "Start date" },
  { title: "Salary" }
];

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <DataTable data={data} columns={columns}/>
      </div>
    );
  }
}

export default App;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GNU General Public License v3.0](https://github.com/iamuch/react-fn-datatables/blob/master/LICENSE)