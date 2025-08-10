import React from "react";
import { CiClock1, CiInstagram, CiMail, CiPhone } from "react-icons/ci";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FaFacebookSquare, FaPinterest } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center px-4 pb-24 mt-42">
      <h1
        className="text-center font-bold text-6xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        We'd Love to <br />
        Hear from you
      </h1>
      <p className="text-center mt-4 text-lg">
        Weather it's a question, a booking, or a beauty{" "}
        <br className="max-sm:hidden" /> consultation -- our team is here for
        you.
      </p>
      <div className="w-full max-w-[800px] flex flex-col gap-8 mt-4">
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 text-lg max-sm:text-sm">
            <span>
              <CiPhone className="text-2xl" />
            </span>{" "}
            +91 98765 43219
          </p>
          <p className="flex items-center gap-2 text-lg  max-sm:text-sm">
            <span>
              <CiMail className="text-2xl" />
            </span>{" "}
            info@blliis.com
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 text-lg  max-sm:text-sm">
            <span>
              <CiClock1 className="text-2xl" />
            </span>{" "}
            Everyday
          </p>
          <p className="flex items-center gap-2 text-lg  max-sm:text-sm">
            <span>
              <CiClock1 className="text-2xl" />
            </span>{" "}
            9:00am - 7:00pm
          </p>
        </div>
      </div>
      <form className="flex w-full flex-col gap-4 max-w-[800px] mt-8">
        <TextField
          id="outlined-basic"
          label="Full Name"
          fullWidth
          variant="outlined"
        />
        <div className="flex w-full gap-4 justify-between">
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            type="number"
            fullWidth
            variant="outlined"
          />
        </div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Purpose of Contact
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label
            fullWidth
          >
            <MenuItem value="Booking">Booking</MenuItem>
            <MenuItem value="Collaboration">Collaboration</MenuItem>
            <MenuItem value="Press">Press</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      </form>
      <button className="max-w-[800px] w-full py-2 bg-black text-white">
        Submit
      </button>
      <p>Our team responds within 24 hours.</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.140246591837!2d77.2661590763036!3d28.562180587270458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce394ee051687%3A0x92f14ffebd611ac9!2sBlliis%20by%20Ravissant!5e1!3m2!1sen!2sin!4v1754668371164!5m2!1sen!2sin"
        width="600"
        height="700"
        className="border-none w-full max-w-[800px] h-[400px]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <p className="text-center">
        50-51, 3rd Floor, Community Centre, Block A, Friends Colony East, New
        Friends Colony, New Delhi, Delhi 110065
      </p>
      <div className="flex justify-center items-center gap-8">
        <CiInstagram className="text-4xl cursor-pointer" />
        <FaFacebookSquare className="text-4xl cursor-pointer" />
        <FaPinterest className="text-4xl cursor-pointer" />
      </div>
      <p className="text-center">
        Follow Blliis for the latest buxury beauty trends.
      </p>
      <p className="text-center">
        At Blliss every detail matters. from your first click to final look,
        Reach
      </p>
    </div>
  );
};

export default Contact;
