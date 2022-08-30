import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { VIEW_TYPE } from "../../../types/country";
import { Radio } from "@mui/material";

type Props = {
  value: VIEW_TYPE;
  setValue: React.Dispatch<React.SetStateAction<VIEW_TYPE>>;
};

export const ChooseView = (props: Props) => {
  const { value, setValue } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as VIEW_TYPE);
  };

  const radioStyle = {
    color: "#564787",
    "&.Mui-checked": {
      color: "#564787",
    },
  };

  const labelStyle = {
    color: "white",
    "&.Mui-focused": {
      color: "white",
    },
    display: "flex",
    alignSelf: "flex-end",
    backgroundColor: "#564787",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    marginBottom: "0.5rem",
  };

  return (
    <FormControl
      style={{
        alignSelf: "flex-end",
        display: "flex",
        flexDirection: "column",
        marginBottom: "0.5rem",
      }}
    >
      <FormLabel sx={labelStyle} id="demo-controlled-radio-buttons-group">
        View Mode
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value={VIEW_TYPE.PREVIEW}
          control={<Radio sx={radioStyle} />}
          label="Preview"
        />
        <FormControlLabel
          value={VIEW_TYPE.TABLE}
          control={<Radio sx={radioStyle} />}
          label="Table"
        />
      </RadioGroup>
    </FormControl>
  );
};
