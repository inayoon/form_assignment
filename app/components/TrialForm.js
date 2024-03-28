"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TrialForm() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "Onchange" });

  const onSubmit = (data) => {
    const body = {
      ...data,
      streetName: address.label,
    };
    toast.success("Form submitted successfully!");
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    const newData = [...existingData, body];
    localStorage.setItem("formData", JSON.stringify(newData));

    setTimeout(() => {
      router.push("/history");
    }, 3000);
  };

  const postalCode = {
    required: "postalCode is required",
    pattern: {
      value: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
      message: "postal code must be formatted like A1A 1A1",
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      {/* Name input */}
      <label htmlFor="name">
        Name<span style={{ color: "#ff0000" }}>*</span>
      </label>
      <input
        className="input_box"
        type="text"
        id="name"
        {...register("name", { required: true })}
      />
      {errors.name?.type === "required" && (
        <div className="error_container">
          <span>Name is required</span>
        </div>
      )}

      {/* Email input  */}
      <label htmlFor="email">
        Email<span style={{ color: "#ff0000" }}>*</span>
      </label>
      <input
        className="input_box"
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      {errors.email?.type === "required" && (
        <div className="error_container">
          <span>Email is required</span>
        </div>
      )}

      {/* Product name input  */}
      <label htmlFor="productName">
        Product Name<span style={{ color: "#ff0000" }}>*</span>
      </label>
      <input
        className="input_box"
        type="text"
        id="productName"
        {...register("productName", { required: true })}
      />
      {errors.productName?.type === "required" && (
        <div className="error_container">
          <span>Product name is required</span>
        </div>
      )}

      {/* Product size input  */}
      <label htmlFor="productSize">Product Size</label>
      <input
        className="input_box"
        type="text"
        id="productSize"
        {...register("productSize")}
      />

      {/* Auto-complete address(street) input  */}
      <label>
        Address<span style={{ color: "#ff0000" }}>*</span>
      </label>
      <GooglePlacesAutocomplete
        apiOptions={{ language: "en", region: "ca" }}
        selectProps={{
          address,
          onChange: setAddress,
          required: true,
        }}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}
      />

      {/* Unit & Postal code input(flex)  */}
      <div className="flex_container" style={{ marginTop: "1rem" }}>
        <div>
          <label htmlFor="unit">Unit</label>
          <input
            className="input_box"
            placeholder=""
            id="unit"
            {...register("unit")}
          />
        </div>
        <div>
          <label htmlFor="postalCode">
            Postal code<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            className="input_box"
            placeholder=""
            id="postalCode"
            {...register("postalCode", postalCode)}
          />
          {errors?.postalCode && (
            <div className="error_container">
              <span>{errors.postalCode.message}</span>
            </div>
          )}
        </div>
      </div>

      {/* Submit button */}
      <div style={{ textAlign: "center" }}>
        <button className="submit_btn" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
}
