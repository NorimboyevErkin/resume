import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function FullWidthTabs({ children }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='tabsBox'>
      <Tabs value={value} onChange={handleChange}>
        {children?.map((item, index) => (
          <Tab key={index} label={item.props.label} />
        ))}
      </Tabs>

      {children?.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {item}
        </TabPanel>
      ))}
    </Box>
  );
}
FullWidthTabs.propTypes = {
  children: PropTypes.node,
};
