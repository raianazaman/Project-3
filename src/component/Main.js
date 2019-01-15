import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Template1 from './template1/template1'
import Template2 from './template2/template2'


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  paper: {
    marginTop: 2 * theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class CenteredGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bool1: false,
      bool2: false,
      bool3: false
    }
  }
render(){
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paper}> Template List </Paper>
          <Card className={classes.card}>
            <CardContent>
          
                <button onClick={()=>{

                  
                  this.setState({bool1:true}); this.setState({bool2:false}); this.setState({bool3:false})
                  console.log(this.state.bool1);
                  
                  }}> 1</button>     
                <button onClick={()=>{
                  this.setState({bool1:false}); this.setState({bool2:true}); this.setState({bool3:false})}}> 2</button>     
                <button onClick={()=>{
                  this.setState({bool1:true}); this.setState({bool2:false}); this.setState({bool3:true})}}> 3</button>     
    
              <Template2 />
            {this.state.bool1 ? <Template1 /> : null}
            {this.state.bool2 ? <Template2 /> : null}
            {this.state.bool3 ? <Template1 /> : null}
            {this.state.bool1 ? 'dsdsdsd': 'ssssssdshakdjh'}

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paper}> Preview </Paper>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Drop element here
              </Typography>

              <Typography component="p">Sample text</Typography>

              <div>
                <label htmlFor="outlined-button-file">
                  <Button variant="outlined" component="span" className={classes.button}>
                    Upload
                  </Button>
                </label>
                <input accept="image/*" className={classes.input} id="outlined-button-file" 
                multiple type="file"/>
              </div>
            </CardContent>
            <div>
              <Button
                variant="outlined"
                href="#outlined-buttons"
                className={classes.button}
              >
                Save

              </Button>
            {this.state.bool1 ? <Template1 /> : null}
            {this.state.bool2 ? <Template2 /> : null}

            </div>


          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
}
CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CenteredGrid);
