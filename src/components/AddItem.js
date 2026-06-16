import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Card } from "@material-ui/core";

const types = [
  {
    value: "cafe",
    label: "Cafe",
  },
  {
    value: "culinary",
    label: "Culinary",
  },
  {
    value: "dining",
    label: "Dining",
  },
  {
    value: "game",
    label: "Game",
  },
  {
    value: "movie",
    label: "Movie",
  },
  {
    value: "museum",
    label: "Museum",
  },
  {
    value: "shopping",
    label: "Shopping",
  },
  {
    value: "sport",
    label: "Sport",
  },
  {
    value: "themepark",
    label: "Theme Park",
  },
  {
    value: "wedding",
    label: "Wedding",
  },
  {
    value: "work",
    label: "Work",
  },
  {
    value: "others",
    label: "Others",
  },
];

const AddItem = ({ onAdd }) => {
  const [values, setValues] = useState({});

  const onSubmit = (e) => {
    if (!values.name) {
      alert("Please add a task name");
      return;
    }
    if (!values.type) {
      values.type = "date";
    }
    console.log(values.type);
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;
    values.id = id;
    onAdd(values);
    setValues({});
  };

  return (
    <Card>
      <Box
        component="form"
        sx={{
          width: "50ch",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{
            width: "90%",
            marginBottom: "1rem",
          }}
          required
          id="outlined-required"
          label="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <TextField
          sx={{
            width: "90%",
            marginBottom: "1rem",
          }}
          required
          id="outlined-required"
          label="Location"
          value={values.location}
          onChange={(e) => setValues({ ...values, location: e.target.value })}
        />
        <TextField
          sx={{
            width: "90%",
            marginBottom: "1rem",
          }}
          required
          id="outlined-required"
          label="Date"
          value={values.date}
          type="date"
          onChange={(e) => setValues({ ...values, date: e.target.value })}
        />
        <TextField
          sx={{
            width: "90%",
            marginBottom: "1rem",
          }}
          id="outlined-select-currency"
          select
          label="type"
          defaultValue="others"
          onChange={(e) => setValues({ ...values, type: e.target.value })}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Checkbox
          checked={values.important}
          type="checkbox"
          value={values.important}
          onChange={(e) =>
            setValues({ ...values, important: e.currentTarget.checked })
          }
        />
        <Button onClick={onSubmit}>SUBMIT</Button>
      </Box>
    </Card>
  );
};

export default AddItem;
