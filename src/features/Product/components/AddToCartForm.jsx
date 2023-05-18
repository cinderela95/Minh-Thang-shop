import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../../components/form-control/QuantityField";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object({
    quantity: yup
      .number()
      .required("Please enter quantiry")
      .min(1, "Minium value is 1")
      .typeError("Please enter a Number"),
  });
  const form = useForm({
    defaultValues: {
      quantity: 0,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField
        name="quantity"
        label="Quantity"
        form={form}
      ></QuantityField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="lagre"
      >
        Them Vao Gio Hang
      </Button>
    </form>
  );
}

export default AddToCartForm;
