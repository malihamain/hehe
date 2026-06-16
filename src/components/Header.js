import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Header = ({ title }) => {
  const customTheme = useTheme();

  // Accessing the primary color
  const primaryColor = customTheme.palette.primary.main;

  return (
    <header className="header" color="primaryColor">
      <h1 style={{ color: primaryColor }}>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
