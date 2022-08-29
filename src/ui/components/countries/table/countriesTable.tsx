import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../../../../hooks";
import { searchCountries } from "../../../../redux/selectors/country";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#564787",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#DBCBC8",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CountriesTable = () => {
  const countries = useAppSelector(searchCountries);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{`Country (Official Name)`}</StyledTableCell>
            <StyledTableCell align="right">Population</StyledTableCell>
            <StyledTableCell align="right">Timezones</StyledTableCell>
            <StyledTableCell align="right">Lat / Long</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries?.map((country) => (
            <StyledTableRow key={country.name?.official}>
              <StyledTableCell component="th" scope="row">
                {country.name?.official || "N/a"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {country.population}
              </StyledTableCell>
              <StyledTableCell align="right">
                {country.timezones?.join(", ")}
              </StyledTableCell>
              <StyledTableCell align="right">
                {country.latlng?.join(" / ")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
