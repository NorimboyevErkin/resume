import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/share-styles/form-styles/form-styles.module.scss";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import AOS from "aos";
import "aos/dist/aos.css";
const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("* Email field is required"),
    from_name: yup.string().required("* Name field is required"),
    message: yup.string().required("* Name field is required"),
  })
  .required();

function MyForm() {
  const [IsError, setIsError] = useState(false);
  const [IsSuccess, setIsSuccess] = useState(false);
  const [Loading, setLoading] = useState(false);

  const form = useRef();
  const timer = useRef();

    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

  const handleClick = (type) => {
    if (!Loading) {
      if (type == "success") setIsSuccess(true);
      else if (type == "error") setIsError(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
        if (type == "success") setIsSuccess(false);
        else if (type == "error") setIsError(false);
      }, 2500);
    }
  };

  useEffect(() => {
    AOS.init({});
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const sendEmail = (data) => {
    console.log(data,"data");
    setLoading(true);
    emailjs
      .sendForm(
        "service_vagg80s",
        "template_ow6v8e3",
        // data,
        form?.current,
        "NUp_C4ZZHbgbvrzJX",
      )
      .then(
        (result) => {
          handleClick("success");
          reset();
        },
        (error) => {
          handleClick("error");
        }
      );
  };
  return (
    <>
      {IsSuccess ? (
        <Alert
          variant="filled"
          severity="success"
          style={{
            position: "fixed",
            top: "6rem",
            right: "3rem",
          }}
        >
          Muvafaqiyatli jo'natildi !
        </Alert>
      ) : null}
      {IsError ? (
        <Alert
          variant="filled"
          severity="error"
          style={{
            position: "fixed",
            top: "6rem",
            right: "3rem",
          }}
        >
          Muvafaqiyatsiz jo'natildi !
        </Alert>
      ) : null}
      <div
        className={styles.ContactBox}
        data-aos="fade-up"
        data-aos-offset="100"
      >
        <div className="container">
          <form
            className={styles.ContactFormBox}
            onSubmit={handleSubmit(sendEmail)}
            ref={form}
          >
            <TextField
              {...register("email")}
              id="filled-basic"
              label="Your Email..."
              variant="filled"
              className={styles.ContactInput}
            />
            <p className={styles.ContactFormErrorText}>
              {errors.email?.message}
            </p>
            <TextField
              {...register("from_name")}
              id="filled-basic"
              label="Your name..."
              variant="filled"
              className={styles.ContactInput}
            />
            <p className={styles.ContactFormErrorText}>
              {errors.from_name?.message}
            </p>
            <TextField
              {...register("message")}
              id="standard-multiline-flexible"
              label="Your messege..."
              multiline
              maxRows={5}
              variant="filled"
              className={styles.ContactInput}
            />
            <p className={styles.ContactFormErrorText}>
              {errors.message?.message}
            </p>
            <Button
              type="submit"
              variant="contained"
              disabled={Loading}
              style={{ position: "relative", height: "45px" }}
            >
              Submit
              {Loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "white",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyForm;
