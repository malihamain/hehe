import Card from "@mui/material/Card";
import ButtonMore from "./ButtonMore";
import {
  CardActions,
  CardContent,
  Typography,
  Chip,
  Icon,
} from "@material-ui/core";
import styled from "styled-components";

import Grid from "@mui/material/Grid";

const List = styled.div`
  width: 200px;
  height: 100%;
  background-color: #f50057;
`;

const BasicCard = ({ item, onDelete, onToggle }) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../assets/icons", false, /\.(png|jpe?g|svg)$/)
  );
  let type = item.type;

  const icon = images["icon-" + type + ".svg"];

  return (
    <Card
      className={`task ${item.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(item.id)}
      sx={{ borderRadius: 2, minWidth: 450, marginBottom: 2, height: 120 }}
    >
      <Grid container>
        <Grid item xs={10}>
          <CardContent>
            <List />
            <div style={{ color: "red" }} />
            <Typography
              variant="h5"
              // component="div"
              style={{ fontWeight: "bold !important" }}
            >
              {item.name}
            </Typography>

            <Typography sx={{ mb: 1.5 }}>{item.date}</Typography>
            {item.location && <Chip label={item.location} color="primary" />}

            {item.important && <List />}
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <ButtonMore item={item} onDelete={onDelete} />
          </CardActions>
          <Icon sx={{ height: 20 }}>
            <img src={icon} alt="icon-date.svg" />
          </Icon>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BasicCard;
