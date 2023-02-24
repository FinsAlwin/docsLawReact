import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomInputFile from "../Form/inputFile";
import CustomTextArea from "../Form/textArea";
import { useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// };

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

export default function VerticalTabs(props) {
  const [value, setValue] = useState(props.value);
  const [stateAnnexures, setStateAnnexures] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.changeValue(newValue);
  };

  const onValueChangeTextArea = (e, f) => {
    setStateAnnexures((prevState) => ({
      ...prevState,
      [f]: { text: e },
    }));
  };

  const handleFileUpload = (e, f) => {
    getBase64(e)
      .then((result) => {
        setStateAnnexures((prevState) => ({
          ...prevState,
          [f]: { file: result, text: prevState[f]?.text },
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderAnnexures = () => {
    let content = [];
    for (let step = 1; step <= props.annexuresNo; step++) {
      content.push(
        <Tab
          key={`tab-${step}`}
          value={`${step}`}
          label={`ANNEXURE P-${step}`}
        />
      );
    }
    return content;
  };

  const renderAnnexuresTabPanel = () => {
    let content = [];
    for (let step = 1; step <= props.annexuresNo; step++) {
      const annexureKey = `annexure-${step}`;
      content.push(
        <TabPanel
          key={`tab-panel-${step}`}
          value={`${step}`}
          sx={{ width: "100%" }}
        >
          <CustomTextArea
            label={`Title of Annexure P-${step}`}
            isRequired={true}
            minLength={3}
            maxLength={100}
            rows={3}
            value={stateAnnexures[annexureKey]?.text}
            onValueChange={(e) => onValueChangeTextArea(e, annexureKey)}
          />

          <CustomInputFile
            label="Upload attachment"
            handleFileUpload={(e) => handleFileUpload(e, annexureKey)}
          />
        </TabPanel>
      );
    }
    return content;
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <TabContext value={value}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderColor: "divider" }}
        >
          {renderAnnexures()}
          {/* <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
        {renderAnnexuresTabPanel()}
        {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
      </TabContext>
    </Box>
  );
}
