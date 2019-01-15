import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
// import Header1 from "./user/Header-1";
// import Header2 from "./user/Header-2";
// import Header3 from "./user/Header-3";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2
  },

  nested: {
    padding: theme.spacing.unit * 2
  }
});
class NestedList extends React.Component {

  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
 khkjhkjhkjhkj
      </div>
        
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
