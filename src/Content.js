import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
const useStyles = makeStyles((theme) => ({ titleIcon3: {
    fontSize: "20px"
  },
  reviewicon: {
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px"
  },
  ratingicon: {
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px"
  },
  refer: { textDecoration: "none" },
  titleIcon2: {
    width: "80%",   
    display: "flex",
    flexDirection: "row",
    padding: "10px 20px 0px 30px ",
    width: "350px",
    height: "160px",
    //  height: "auto",
    boxShadow: "0 2px 18px 0 rgb(0 0 0 / 8%)",
    color: "black",
    // marginTop: "0px",
    marginRight: "20px",
    "&:hover": {
      backgroundColor: "#2e3191",
      color: "white"
    },
    "@media (max-width: 1200px)": {
     width:"400px",

    },  
  },
  categoryname: {
    marginBottom: "20px"
  },
  btn: {
    marginLeft: "45%",
    Link: { textDecoration: "None" }
  }
}));
const Content = () => {
    const classes = useStyles();
    return(
        <div>

    <Container>
<Grid className={classes.categoryname} container spacing={3}>
            <Grid item sm={12} md={6} lg={4} >
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>Introduction to Amazon Elastic File System</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>4</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>4</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>AWS announces a serverless database service</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>5</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>4</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>AWS Architecture</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>4</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>5</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>Introduction To AWS CLI</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>4</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>5</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid><Grid item sm={12} md={6} lg={4}>
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>AWS Data Pipeline Documentation</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>4</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>5</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid><Grid item sm={12} md={6} lg={4}>
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>How to Create Alarms in Amazon CloudWatch</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>4</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>5</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid><Grid item sm={12} md={6} lg={4}>
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>Amazon Redshift Tutorial</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>4</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>5</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid><Grid item sm={12} md={6} lg={4}>
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>AWS Kinesis</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>4</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>4.5</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid><Grid item sm={12} md={6} lg={4}>
              <a
                href="https://tekslate.com/blog"
                target="_blank"
                className={classes.refer}
              >
                <Paper className={classes.titleIcon2}>
                  <Typography className={classes.titleIcon3}>
                    <b>Amazon On-Demand Instance Pricing</b>
                    <p className={classes.reviewicon}>
                      <PeopleAltOutlinedIcon /><span>4</span>
                      Reviews
                    </p>
                    <p className={classes.ratingicon}>
                      <StarOutlineIcon /><span>4.5</span>
                      Rating
                    </p>
                  </Typography>
                </Paper>
              </a>
            </Grid>
            
          </Grid>
        </Container>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          href="https://tekslate.com/blog"
          target="_blank"
        >
          Load More
        </Button>
      
      
      </div>
    )};

export default Content;