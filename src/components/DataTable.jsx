import React, { memo } from 'react';
import PropTypes from 'prop-types';

const DataTable = memo(({ words }) => (
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Texto Original</th>
          <th scope="col">Reverso</th>
          <th scope="col">Palíndromo</th>
        </tr>
      </thead>
      <tbody>
        {words
          .map((word) => (
            <tr key={word.text}>
              <td>{word.original}</td>
              <td>{word.text}</td>
              <td>{word.palindrome ? '✅' : '❌'}</td>
            </tr>
          ))
          .reverse()}
      </tbody>
    </table>
  </div>
));

DataTable.propTypes = {
  words: PropTypes.instanceOf(Array).isRequired,
};

export default DataTable;
