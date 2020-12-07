/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Do you love bears?</h2>
            <h4>
              Cause if you do, my friends and I started a bear community 
              in 2009 called Bear Society. We also groups in different 
              social application. Please visit our web site:
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="http://www.bearsociety.net"
              target="_blank"
            >
              BearSociety.net
            </Button>
            <Button
              color="primary"
              size="lg"
              href="https://www.facebook.com/groups/BearSociety.net"
              target="_blank"
            >
              Facebook group
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Want more about Hursu?</h2>
            <h4>
              Visit hursu on{" "}
              <a href="#pablo" onClick={e => e.preventDefault()}>
                Instagram{" "}
              </a>
              . Visit other channels.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={10}>
            <Button
              color="rose"
              size="lg"
              href="http://youtube.com/watch?v=nOMVAveEouI"
              target="_blank"
            >
              YouTube
            </Button>
            <Button
              color="rose"
              size="lg"
              href="http://instagram.com/hursu"
              target="_blank"
            >
              Instagram
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for visiting!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Tweet
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Share
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Share
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button>
        </div>
      </div>
    </div>
  );
}
