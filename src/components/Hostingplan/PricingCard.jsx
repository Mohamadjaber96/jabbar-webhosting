import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";

const PricingCard = ({ title, price, features, Symbol, durations }) => (
  <Card
    sx={{
      width: "370px",
      height: "602px",
      borderRadius: "20px",
      marginTop: "20px",
      boxShadow: " 2px 4px 4px 2px #00000040",
    }}>
    <Container
      sx={{
        radius: "20px ",

        background:
          "linear-gradient(102.68deg, #251E78 0%, rgba(59, 49, 222, 0.51) 100%)",
        color: "#FFF",
      }}>
      <Typography
        variant='h5'
        p={2}
        mb={1}
        fontWeight={500}
        lineHeight={"28px"}
        fontSize={"24px"}>
        {title}
      </Typography>
      <Typography variant='h4' p={2}>
        <span style={{ fontSize: "16px", verticalAlign: "super" }}>
          {Symbol}
        </span>
        {price}
        <span>{durations}</span>
      </Typography>
    </Container>
    <CardContent>
      <ul
        style={{
          listStyleType: "revert",
        }}>
        {features.map((feature, index) => (
          <Typography key={feature} component='li' variant='h6' p={1} ml={1}>
            {feature}
          </Typography>
        ))}
      </ul>
      <Button
        variant='contained'
        color='primary'
        style={{
          background:
            "linear-gradient(102.68deg, #251E78 0%, rgba(59, 49, 222, 0.51) 100%)",
          position: "relative",
          left: "70px",
          borderRadius: "15px",
        }}>
        Order Now
      </Button>
    </CardContent>
  </Card>
);

const Pricing = () => {
  const webPlans = [
    {
      title: "Personal",
      Symbol: "$",
      price: "30",
      durations: "/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Professional",
      price: "$35/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Business Hosting",
      price: "$40/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
  ];
  const virtualPlans = [
    {
      title: "Personal",
      price: "$40/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Professional",
      price: "$45/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Business Hosting",
      price: "$50/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
  ];
  //   Game Server Data
  const gamePlans = [
    {
      title: "Personal",
      price: "$40/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Professional",
      price: "$45/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Business Hosting",
      price: "$50/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
  ];

  return (
    <div>
      <Typography
        mt={3}
        variant='h2'
        textAlign={"center"}
        fontSize={"48px"}
        fontWeight={700}
        lineHeight={"52px"}
        color={"#180D5B"}>
        Pricing
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "53px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        className='Sutitles'>
        <Typography
          variant='h4'
          textAlign={"center"}
          fontSize={"100%"}
          fontWeight={600}>
          Web Hosting
        </Typography>
        <Typography
          variant='h4'
          textAlign={"center"}
          fontSize={"100%"}
          fontWeight={600}>
          Virtual Machines
        </Typography>
        <Typography
          variant='h4'
          textAlign={"center"}
          fontSize={"100%"}
          fontWeight={600}>
          Game Servers
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px ",
        }}>
        {webPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      {/*Virtual PlanS 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px ",
          color: "orange",
          marginTop: "10px",
        }}>
        {virtualPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div> */}
      {/* Gaming Server
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px ",
          color: "orange",
          marginTop: "10px",
        }}>
        {gamePlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div> */}
    </div>
  );
};

export default Pricing;
