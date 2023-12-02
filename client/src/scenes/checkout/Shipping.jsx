import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";
const Shipping = ({
  values,
  errors,
  touched,
  handleBur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBur={handleBur}
        />
        <Box>
          <FormControlLabel
            label="Same for Shipping Address"
            control={
              <Checkbox
                defaultChecked
                value={values.shippingAddress.isSameAddress}
                onChange={() =>
                  setFieldValue(
                    "shippingAddress.isSameAddress",
                    !values.shippingAddress.isSameAddress
                  )
                }
              />
            }
          />
        </Box>
      </Box>
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            {" "}
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            value={values.shippingAddress}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBur={handleBur}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
