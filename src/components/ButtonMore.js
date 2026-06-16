import {
  Popover,
  Button,
  Typography,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

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

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "3px",
      transform: "scale(1.5)",
      color: "#D9D9D9",
    }}
  >
    • • •
  </Box>
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ButtonMore = ({ item, onDelete, onAdd }) => {
  const [anchor, setAnchor] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEdit = () => setShowEditModal(false);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleEdit = () => {
    console.log("edit");
    setShowEditModal(true);
  };

  const [values, setValues] = useState({
    name: "",
    location: "",
    date: "",
    type: "",
    important: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;
    values.id = id;
    console.log(values);
    // onAdd(values);
  };

  const handleValuesChange = (e) => {
    // console.log("+", e.target.value);
  };

  return (
    <>
      <Button onClick={openPopover}>{bull}</Button>
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={() => setAnchor(null)}
      >
        <MenuList
          autoFocusItem={Boolean(anchor)}
          id="composition-menu"
          aria-labelledby="composition-button"
        >
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={() => onDelete(item.id)}>Delete</MenuItem>
        </MenuList>
      </Popover>
      <Modal
        open={showEditModal}
        // onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit
          </Typography>
          <Box
            component="form"
            sx={{
              width: "25ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            {/* <div>
              <TextField
                required
                id="outlined-required"
                label="Name"
                onChange={handleValuesChange}
              />
            </div> */}

            {/* <div>
              <TextField
                required
                id="outlined-required"
                label="Name"
                value={values.name}
                // onChange={(e) => setValues({ ...values, name: e.target.value })}
                onChange={handleValuesChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Location"
                value={values.location}
                // onChange={(e) =>
                //   setValues({ ...values, location: e.target.value })
                // }
              />
              <TextField
                required
                id="outlined-required"
                label="Date"
                value={values.date}
                type="date"
                // onChange={(e) => setValues({ ...values, date: e.target.value })}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="type"
                defaultValue="others"
                // onChange={(e) => setValues({ ...values, type: e.target.value })}
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
                // onChange={(e) =>
                //   setValues({ ...values, important: e.currentTarget.checked })
                // }
              />
            </div>
            <Button onClick={onSubmit}>SUBMIT</Button> */}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ButtonMore;
