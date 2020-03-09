import React from 'react';
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * A custom table with bootstrap styling<br>
 * The table get's generated automatically, only input needed is a header array and a body array
 */

function CustomTable({ header, data, url, canClick, action, style, ...props }) {
  const settings = (id) => {
    return {
      onClick: () => {
        if (url) {
          props.history.push(url + '/' + id);
        };
        if (action) {
          action();
        }
      },
      style: (canClick) ? { cursor: 'pointer' } : null
    }
  }

  return (
    <Table striped bordered hover={canClick} size="sm" style={style}>
      <thead>
        <tr>
          {header.map((h, index) => <th key={index}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, index) => {
            return <tr key={index} {...settings(row.id)}>
              {Object.keys(row).map((key, index) => {
                return <td key={index}>{row[key]}</td>
              })}
            </tr>
          })
        }
      </tbody>
    </Table>
  )
}
export default withRouter(CustomTable);

CustomTable.defaultProps = {
  canClick: false,
};

CustomTable.propTypes = {
  /**
   * The header prop is an array of strings to be displayed in the tableheader
   */
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The data prop is an array of objects for each tablerow
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The url prop is the link for each table row where the id of the row gets added automatically
   */
  url: PropTypes.string,
  /**
   * The clickable prop enables mous hover and pointer effect
   */
  // canClick: PropTypes.string,
  /**
   * Define the onClick function
   */
  action: PropTypes.func
};