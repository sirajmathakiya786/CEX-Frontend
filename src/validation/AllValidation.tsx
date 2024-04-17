import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const addUserSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required"),
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Fullname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
});

export const offerValidationSchema = Yup.object().shape({
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date().required('End date is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  // offerImage: Yup.string()
  // .required('Offer image is required')
})
