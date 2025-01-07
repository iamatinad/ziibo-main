import React from "react";
import image from "../assets/images/grouppic.png";
import Typewriter from "typewriter-effect";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the homepage when the button is clicked
  };

  return (
    <div>
      <section className="flex flex-wrap ">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: 700,
            width: "100%",
            position: "relative",
          }}
        />
        <div className="absolute top-0 left-0 w-full">
          <h1
            style={{
              position: "absolute",
              top: "30px",
              left: "30px",
              color: "black",
              fontWeight: "700",
              fontSize: "4vw",
            }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hey There,")
                  .pauseFor(1000)
                  .start();
              }}
            />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("We are Arab Money.")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
        </div>
      </section>

      <section
        style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}
        className="flex justify-between items-center m-20"
      >
        <h2 className="text-4xl font-extrabold mb-10 overline text-green-700">About AM Agency</h2>
        <div className="bg-white rounded-lg p-10 w-3/5 shadow-2xl shadow-yellow-800">
          <p className="text-lg leading-relaxed text-gray-700 font-bold">
            Welcome to Arab Money, a powerhouse team of four passionate 
            developers dedicated to crafting extraordinary digital experiences.
            With a shared love for innovation and a commitment to excellence, we
            bring a wealth of expertise, blend creativity to every project we
            undertake. 
            <br />
            <br />
            As a team, we thrive on challenges, pushing boundaries to
            deliver solutions that not only meet but exceed expectations. Each
            member brings a unique set of skills and perspectives, allowing us
            to approach projects from multiple angles and deliver holistic,
            tailored solutions. From dynamic websites , to analytics and design to robust web
            applications, we have the knowledge and experience to bring your
            ideas to life.
            <br />
            <br />
            Join us on this exciting journey and discover the endless
            possibilities of web development with Arab Money.
          </p>
        </div>
      </section>
      <Button
        variant="contained"
        color="success"
        onClick={handleBackToHome}
        style={{ margin: "20px" }}
      >
        Back to Home
      </Button>
    </div>
  );
}

export default About;
