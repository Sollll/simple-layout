import React from 'react';
import Grid from "@material-ui/core/Grid";
import Element from './Element'

function Row(props) {
  let sizeOfOneColumn;
  let columnsAvailable, columns;
  if (props.columns && props.columns.length) {
    columnsAvailable = true;
    sizeOfOneColumn = Math.floor(12 / props.columns.length);
    columns = props.columns.map((column, columnIndex) => (
      <Grid key={columnIndex} item xs={sizeOfOneColumn}>
        {column.elements ?
          column.elements.map((element, elementIndex) => {
            return (
              <Element key={elementIndex} element={element} type={props.type}/>
            )
          })
          :
          <div></div>
        }
      </Grid>
    ));
  }
  return columnsAvailable ?
    (<Grid
      container spacing={3}>
      {columns}
    </Grid>)
    :
    (<h4>row without columns</h4>);
}

export default Row;
