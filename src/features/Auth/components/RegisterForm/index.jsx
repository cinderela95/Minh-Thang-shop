import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-control/InputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import PasswordField from "../../../../components/form-control/PasswordField";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object({
    fullName: yup
      .string()
      .required("Please enter your Fullname")
      .test(
        "should has at least two words",
        "Please enter at least two words",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter your Email")
      .email("Please enter a valid email adress"),
    password: yup
      .string()
      .required("Please enter your Password")
      .min(6, "Please enter at least 6 character"),
    retypePassword: yup
      .string()
      .required("Please retype your Password")
      .oneOf([yup.ref("password")], "Password does't match"),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full name" form={form}></InputField>
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
