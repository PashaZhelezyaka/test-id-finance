import React from 'react';
import {matchIsValidTel, MuiTelInput} from 'mui-tel-input'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";


interface signUpData {
  phone: string,
  email: string,
  password: string,
  repeatPassword: string
}


function SignUp() {

  const {control, handleSubmit, watch} = useForm<signUpData>({
    defaultValues: {
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onBlur"
  });

  const navigate = useNavigate();
  const nextStepRedirect = () => navigate('/signup/personal');
  const schema = require('../../../store/JSONSchema.json');
  const onSubmit = (data: signUpData) => {
    alert(JSON.stringify(data));
    nextStepRedirect();
  };

  return (
    <div className={"formContainer"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="phone"
          control={control}
          rules={{validate: matchIsValidTel, required: "This field is required"}}
          render={({field, fieldState}) => (
            <MuiTelInput
              label={"Choose a country"}
              required
              {...field}
              onlyCountries={["BY", "UA", "RU"]}
              helperText={fieldState.error ? "Number is invalid" : ""}
              error={fieldState.invalid}
              placeholder={"Mobile phone number"}
            />
          )}
        />
        <Controller
          name="email"
          rules={{required: "This field is required", validate: value => new RegExp(schema.email.regExp).test(value)}}
          control={control}
          render={({field, fieldState}) => (
            <TextField
              {...field}
              type="email"
              label={"Email"}
              required
              onChange={(e) => field.onChange(e)}
              helperText={fieldState.error ? "Invalid email" : ""}
              error={fieldState.invalid}
              placeholder={"Email"}
            />)}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "This field is required",
            minLength: {
              value: schema.password.minLength,
              message: `minimum password length ${schema.password.minLength} characters`
            },
            maxLength: {
              value: schema.password.maxLength,
              message: `maximum password length ${schema.password.maxLength} characters`
            },
          }}
          render={({field, fieldState}) => (
            <TextField
              {...field}
              type="password"
              label={"Password"}
              required
              onChange={(e) => field.onChange(e)}
              helperText={fieldState.error ? fieldState.error.message : ""}
              error={fieldState.invalid}
              placeholder={"Password"}
            />
          )}
        />
        <Controller
          name="repeatPassword"
          control={control}
          rules={{
            required: "This field is required",
            minLength: {
              value: schema.password.minLength,
              message: `minimum password length ${schema.password.minLength} characters`
            },
            maxLength: {
              value: schema.password.maxLength,
              message: `maximum password length ${schema.password.maxLength} characters`
            },
            validate: value => value === watch('password') || "Passwords do not match"
          }}
          render={({field, fieldState}) => (
            <TextField
              {...field}
              type="password"
              label={"Repeat Password"}
              required
              onChange={(e) => field.onChange(e)}
              helperText={fieldState.error ? fieldState.error.message : ""}
              error={fieldState.invalid}
              placeholder={"Repeat Password"}
            />
          )}
        />

        <Button type="submit" variant="contained" sx={{mt: 2}}>
          Next
        </Button>
      </form>
    </div>
  )
}

export default SignUp;