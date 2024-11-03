import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  IconButton,
  Menu,
  MenuItem,
  ListItemDecorator,
  Input,
} from "@mui/joy";
import { Typography, Grid } from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  KeyboardArrowDown,
  Check,
} from "@mui/icons-material";

const Form = ({ formik }) => {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ fontSize: "48px", color: "#f77a00" }}
        >
          Contact
        </Typography>
      </Grid>
      <Grid>
        <FormControl>
          <FormLabel>Email</FormLabel>
          {formik.errors.email && <div>{formik.errors.email}</div>}
          <Input
            name="email"
            placeholder="Enter Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            fullWidth={false}
          />
        </FormControl>
      </Grid>
      <Grid>
        <FormControl>
          <FormLabel>Message</FormLabel>
          {formik.errors.message && <div>{formik.errors.message}</div>}
          <Textarea
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Message"
            minRows={3}
            endDecorator={
              <Box
                sx={{
                  display: "flex",
                  gap: "var(--Textarea-paddingBlock)",
                  pt: "var(--Textarea-paddingBlock)",
                  // borderTop: "1px solid",
                  // borderColor: "divider",
                  flex: "auto",
                }}
              >
                <IconButton
                  variant="plain"
                  color="neutral"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <FormatBold />
                  <KeyboardArrowDown fontSize="md" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  size="sm"
                  placement="bottom-start"
                  sx={{ "--ListItemDecorator-size": "24px" }}
                >
                  {["200", "normal", "bold"].map((weight) => (
                    <MenuItem
                      key={weight}
                      selected={fontWeight === weight}
                      onClick={() => {
                        setFontWeight(weight);
                        setAnchorEl(null);
                      }}
                      sx={{ fontWeight: weight }}
                    >
                      <ListItemDecorator>
                        {fontWeight === weight && <Check fontSize="sm" />}
                      </ListItemDecorator>
                      {weight === "200" ? "lighter" : weight}
                    </MenuItem>
                  ))}
                </Menu>
                <IconButton
                  variant={italic ? "soft" : "plain"}
                  color={italic ? "primary" : "neutral"}
                  aria-pressed={italic}
                  onClick={() => setItalic((bool) => !bool)}
                >
                  <FormatItalic />
                </IconButton>
                <Button
                  type="submit"
                  sx={{
                    ml: "auto",
                    backgroundColor: "#f77a00",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#4a4a4a",
                    },
                  }}
                >
                  Submit Message
                </Button>
              </Box>
            }
            sx={{
              minWidth: 300,
              fontWeight,
              fontStyle: italic ? "italic" : "initial",
            }}
          />
        </FormControl>
      </Grid>
    </form>
  );
};

export default Form;
