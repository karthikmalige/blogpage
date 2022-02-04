import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BorderBottom } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    maintext: {
        color: '#3e3d3d',
        fontSize: '34px',
        fontWeight: '500',
        margin: 'auto',
        padding: '0px 0px 15px 0px',
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },
 type: {
        textAlign: "center",
        fontSize: "14px",
        color: "#1358db",
    
    },
 bannerbg: {
        backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images/design_bg.svg")`,
        background: '#101d42',
        display: 'flex',
        alignItems: 'center',
        margin:" 0px 0px 100px 0px",
            "@media (max-width: 600px)": {
     width:"480px"
    },  
        
         },
banner_main: {
        margin: "auto",
        background: "white",
        marginBottom: "-52px",
        marginTop: "52px",
        boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
        padding: "30px 50px",
    },
type: {
        textAlign: "center",
        fontSize: "14px",
        color: "#1358db",
        marginTop: "0px",
    },
    description: {
        textAlign: "center",
        marginBottom: "0px",
    },

    line: {
        border: "none",
        borderTop: "4px solid #ffcf00",
        width: '10%',
        margin: "auto",
    },
   link:{ textDecoration: "None", 
   color: "#1358db",
   "&:hover":{color:"black"}}
}));


const Banner = ({ cat_page, url_data }) => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.bannerbg}>
                <Container className={classes.banner_main}  maxWidth="md"
                >
                    <p className={classes.type} ><a href="https://tekslate.com/" target="_blank" className={classes.link}>Home</a>/<a href="https://tekslate.com/blog" target="_blank" className={classes.link}>blogs </a> /aws</p>
                    <h1 className={classes.maintext}>{cat_page ? url_data.name : 'AWS Resources'}</h1>
                    <hr className={classes.line} />
                    <p className={classes.description}>Learn new skills, pursue your interests or advance your career with our online courses</p>
                   
                </Container>
            </section>
        </div>
    )
}

export default Banner
