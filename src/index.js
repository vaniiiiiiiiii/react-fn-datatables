import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
const $ = require('jquery');
$.DataTable = require('datatables.net');

class DataTable extends Component {

  componentDidMount() {
    $('#DataTable').DataTable( {
      data: this.props.data,
      columns: this.props.columns
    });
  }

  componentWillUnmount(){
    $('#DataTable')
    .DataTable()
    .destroy(true);
  }

  shouldComponentUpdate() {
      return false;
  }

  render() {
    return (
      <div>
          <table id="DataTable" class="display" width="100%"></table>
      </div>
    );
  }
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default DataTable;