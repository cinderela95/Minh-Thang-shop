import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { FormHelperText, IconButton, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import * as React from "react";
import { Controller } from "react-hook-form";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label } = props;
  const { setValue } = form;

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, error },
        }) => (
          <div>
            <FormControl
              error={isTouched && invalid}
              fullWidth
              margin="normal"
              variant="outlined"
            >
              <InputLabel htmlFor={name}>{label}</InputLabel>
              <Typography>So luong</Typography>
              <Box>
                <IconButton
                  onClick={() => {
                    setValue(
                      name,
                      Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                    );
                  }}
                >
                  <RemoveCircleOutline />
                </IconButton>
                <OutlinedInput
                  id={name}
                  type="number"
                  error={invalid}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <IconButton
                  onClick={() => {
                    setValue(
                      name,
                      Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                    );
                  }}
                >
                  <AddCircleOutline />
                </IconButton>
              </Box>
            </FormControl>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </div>
        )}
      />
    </div>
  );
}

export default QuantityField;
