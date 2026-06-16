import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import AddItem from "./components/AddItem";
import { Button, Container, Grid } from "@mui/material";
import AddButton from "./components/AddButton";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F8D57E",
    },
    secondary: {
      main: "#2C2543",
    },
  },
  typography: {
    fontFamily: [
      "Gilroy-Regular",
      "Gilroy-Bold",
      "Gilroy-Medium",
      "Gilroy-Light",
      "Gilroy-Heavy",
    ].join(","),
  },
  components: {
    // MuiTypography: {
    //   defaultProps: {
    //     variantMapping: {
    //       h1: "h2",
    //       h2: "h2",
    //       h3: "h2",
    //       h4: "h2",
    //       h5: "Gilroy-Bold",
    //       h6: "h2",
    //       subtitle1: "h2",
    //       subtitle2: "h2",
    //       body1: "span",
    //       body2: "span",
    //     },
    //   },
    // },
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: [
            "Gilroy-Regular",
            "Gilroy-Bold",
            "Gilroy-Medium",
            "Gilroy-Light",
            "Gilroy-Heavy",
          ].join(","),
          src: `http://fonts.cdnfonts.com/css/gilroy-bold`,
        },
        body: {
          fontSize: "3rem",
        },
      },
    },
  },
});

function App() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Sushi",
      location: "Umaku",
      date: "Lusa",
      type: "culinary",
      important: true,
    },
    {
      id: 2,
      name: "Pottery",
      location: "Potput",
      date: "Kapan kapan",
      type: "date",
      important: false,
    },
    {
      id: 3,
      name: "Mie Ayam",
      location: "Mie Ayam Maman",
      date: "Besok",
      type: "culinary",
      important: false,
    },
  ]);

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleImportant = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Header title="Date Items" />
          {showAddItem && <AddItem onAdd={addItem} />}
          <AddButton
            setShowAddItem={setShowAddItem}
            showAddItem={showAddItem}
          />
          {items.length > 0 ? (
            <Items
              theme={theme}
              items={items}
              onToggle={toggleImportant}
              onDelete={deleteItem}
            />
          ) : (
            "Add More Date Items! <3"
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
