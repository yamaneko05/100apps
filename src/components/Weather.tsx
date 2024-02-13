import axios from "axios";
import { useEffect } from "react";
import cities from "../cities.json";
import { Autocomplete, TextField } from "@mui/material";

const Weather: React.FC = () => {
  

  return <>
    <Autocomplete
      options: {top100Films}
      getOptionLabel: {(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="disableCloseOnSelect" variant="standard" />
      )}
    />
  </>
}

export default Weather;