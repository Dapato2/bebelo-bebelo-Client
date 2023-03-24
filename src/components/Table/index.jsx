import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Table,TableBody,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import "./index.css"
import  { useState, useEffect } from "react";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({playersNames,playerSelected}) {

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const handleNextPlayer = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % playersNames.length);
  }

  useEffect(() => {

  }, [currentPlayerIndex]);

  const isSelected = {
    backgroundColor: "red"
  }

  return (
    <TableContainer component={Paper}  sx={{ width: "400px" }}>
      <Table sx={{ width: "400px" }} aria-label="customized table">
        <TableHead>
          <TableRow className='tableRow'>
            <StyledTableCell>Player:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playersNames.map((name,index) => (
            <StyledTableRow key={index} style = {playerSelected === index ? isSelected : {}} >
              <StyledTableCell component="th" scope="row">
                {name}
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={handleNextPlayer}>Next player</button>
    </TableContainer>
  );
}