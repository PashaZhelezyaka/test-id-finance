import React, {useState} from 'react';
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Checkbox, FormControlLabel, MenuItem, Radio, RadioGroup, Select} from "@mui/material";


interface signUpData {
  firstName: string,
  lastName: string,
  sex: string,
  birthday: string,
  ocean: string,
  hobby: string,
}

function PersonalInfo() {


  const {control, handleSubmit} = useForm<signUpData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      sex: "",
      birthday: "",
      ocean: "",
      hobby: "",
    },
    mode: "onBlur"
  });


  const options = [
    {
      label: 'Female',
      value: '1'
    },
    {
      label: 'Male',
      value: '2'
    },
  ]

  const handleSelect = (value: any) => {
    const isPresent = selectedItems.indexOf(value)
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: any) => item !== value)
      setSelectedItems(remaining)
    } else {
      setSelectedItems((prevItems: any) => [...prevItems, value])
    }
  }


  const [selectedItems, setSelectedItems] = useState<any>([])
  const navigate = useNavigate();
  const schema = require('../../../store/JSONSchema.json');
  const onSubmit = (data: signUpData) => {
    alert(JSON.stringify(data));
    // nextStepRedirect();
  };
  const back = () => {
    navigate('/signup')
  }

  return (
    <div className={"formContainer"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> First Name</label>
        <Controller
          name="firstName"
          rules={{
            required: "This field is required",
            minLength: {
              value: schema.firstName.minLength,
              message: `minimum first name length ${schema.firstName.minLength} characters`
            },
            maxLength: {
              value: schema.firstName.maxLength,
              message: `maximum first name length ${schema.firstName.maxLength} characters`
            }
          }}
          control={control}
          render={({field, fieldState}) => (
            <TextField
              {...field}
              type="text"
              // label={"First Name"}
              required
              onChange={(e) => field.onChange(e)}
              helperText={fieldState.error ? "Invalid" : ""}
              error={fieldState.invalid}
              placeholder={"First Name"}
            />)}
        />
        <label> Last Name</label>
        <Controller
          name="lastName"
          rules={{
            required: "This field is required",
            minLength: {
              value: schema.lastName.minLength,
              message: `minimum last name length ${schema.lastName.minLength} characters`
            },
            maxLength: {
              value: schema.firstName.maxLength,
              message: `maximum last name length ${schema.lastName.maxLength} characters`
            }
          }}
          control={control}
          render={({field, fieldState}) => (
            <TextField
              {...field}
              type="text"
              required
              onChange={(e) => field.onChange(e)}
              helperText={fieldState.error ? "Invalid email" : ""}
              error={fieldState.invalid}
              placeholder={"Last name"}
            />)}
        />
        <label>Sex</label>
        <Controller
          name="sex"
          rules={{required: "This field is required"}}
          control={control}
          render={({field, fieldState}) => (
            <RadioGroup {...field} row aria-label='gender' onChange={(e) => field.onChange(e)}>
              {options.map((singleItem, index) => (
                <FormControlLabel key={index} value={singleItem.value} control={<Radio/>} label={singleItem.label}/>
              ))}
            </RadioGroup>
          )}
        />
        <label> Birthday</label>
        <Controller
          name="birthday"
          rules={{required: "This field is required"}}
          control={control}
          render={({field, fieldState}) => (
            <TextField
              {...field}
              type="date"
              required
              onChange={(e) => field.onChange(e)}
              helperText={fieldState.error ? "Invalid" : ""}
              error={fieldState.invalid}
            />)}
        />
        <label> Your favorite ocean</label>
        <Controller
          name="ocean"
          rules={{required: "This field is required"}}
          control={control}
          render={({field, fieldState}) => (
            <Select
              {...field}
              labelId="demo-simple-select-label"
              onChange={(e) => field.onChange(e)}
            >
              {(schema.ocean.oneOf as string[]).map((el: string, index) => (
                <MenuItem key={index} value={el}>{el}</MenuItem>
              ))}
            </Select>
          )}
        />
        <label>Hobby</label>
        <Controller
          name="hobby"
          rules={{required: "This field is required", validate: value => new RegExp(schema.email.regExp).test(value)}}
          control={control}
          render={({field}) => (
            <div {...field} onChange={(e) => field.onChange(e)}>
              {(schema.hobby.anyOf as string[]).map((el: string, index) => {
                return <FormControlLabel key={index} value={el} control={
                  <Checkbox checked={selectedItems.includes(el)} onChange={() => handleSelect(el)}/>
                } label={el}/>
              })}
            </div>
          )}
        />

        <Button onClick={() => {
          back()
        }} variant="contained" sx={{mt: 2}}>
          Change SignUp Information
        </Button>
        <Button type="submit" variant="contained" sx={{mt: 2}}>
          Complete
        </Button>

      </form>
    </div>
  );
}

export default PersonalInfo;