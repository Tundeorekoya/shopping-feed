import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, stepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../Theme";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async ( value, action) => {
    setActiveStep(activeStep + 1)
  }
  async function makePayment(values){

  }

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0 " }}>
        <Step>
          <stepLabel>Billing</stepLabel>
        </Step>
        <Step>
          <stepLabel>Payment</stepLabel>
        </Step>
        <Box>
          <Formik>
            
          </Formik>
        </Box>
    
      </Stepper>
    </Box>
  );
};

export default Checkout;
