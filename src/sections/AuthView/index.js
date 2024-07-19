"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  Button,
  Container,
  Link,
  Stack,
  StepContent,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";

const steps = [
  "Mobile Number",
  "Add Personal Details",
  "Add Records",
  "Add Bank Details",
  "Terms & Conditions",
];

export default function RegisterAuthView() {
  const Router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    mobileNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    aadharNumber: "",
    panNumber: "",
    bankAccount: "",
    bankName: "",
    ifscCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userRecords")) || [];
    const mobileExists = storedData.some(
      (data) => data.mobileNumber === formData.mobileNumber
    );
    if (mobileExists) {
      alert("Data already exists!");
      return;
    } else {
      const doStoreData = JSON.parse(localStorage.getItem("userRecords")) || [];
      doStoreData.push(formData);
      localStorage.setItem("userRecords", JSON.stringify(doStoreData));
      alert("Data saved!");
      Router.push("/auth/login");
    }
  };

  const doCheckMobileNumber = (e) => {
    e.preventDefault();
    const { mobileNumber } = formData;
    const storedData = JSON.parse(localStorage.getItem("userRecords")) || [];
    const mobileExists = storedData.some(
      (data) => data.mobileNumber === mobileNumber
    );
    if (mobileExists) {
      alert("Mobile number already exists!");
      return;
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box sx={{ width: "100%", py: 4, height: "calc(100vh - 100px)" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            boxShadow:
              "0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)",
          }}
          style={{
            padding: "20px 25px",
            borderRadius: "20px",
            marginTop: "50px",
            background: "white",
          }}
        >
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                marginTop: "20px",
                width: "500px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack spacing={3}>
                {activeStep === 0 ? (
                  <Box>
                    <TextField
                      id="outlined-title"
                      label="Mobile Number"
                      variant="outlined"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                    <p>
                      Already have an account?{" "}
                      <Link href="/auth/login">Login</Link>
                    </p>
                  </Box>
                ) : activeStep === 1 ? (
                  <Stack
                    spacing={3}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <TextField
                      id="outlined-title"
                      label="Firstname"
                      variant="outlined"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <TextField
                      id="outlined-title"
                      label="Lastname"
                      variant="outlined"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <TextField
                      id="outlined-title"
                      label="Email"
                      variant="outlined"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <TextField
                      id="outlined-title"
                      label="Address"
                      variant="outlined"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Stack>
                ) : activeStep === 3 ? (
                  <Stack
                    spacing={3}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <TextField
                      id="outlined-title"
                      label="Bank Account"
                      variant="outlined"
                      name="bankAccount"
                      value={formData.bankAccount}
                      onChange={handleChange}
                    />
                    <TextField
                      id="outlined-title"
                      label="Bank Name"
                      variant="outlined"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                    />
                    <TextField
                      id="outlined-title"
                      label="IFSC Code"
                      variant="outlined"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleChange}
                    />
                  </Stack>
                ) : activeStep === 4 ? (
                  <Stack
                    spacing={3}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h1>Terms & Conditions</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Stack>
                ) : (
                  <Stack
                    spacing={3}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <TextField
                      id="outlined-title"
                      label="Aadhar Number"
                      variant="outlined"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleChange}
                    />
                    <TextField
                      id="outlined-title"
                      label="PAN Number"
                      variant="outlined"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleChange}
                    />
                  </Stack>
                )}
              </Stack>

              <Button
                variant="contained"
                // onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
                onClick={
                  activeStep === 0
                    ? doCheckMobileNumber
                    : activeStep === steps.length - 1
                    ? handleSubmit
                    : handleNext
                }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Continue"}
              </Button>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
