"use client";

import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Button, TextField, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';




interface FormData {
  receivedFrom: string;
  receivedDate: string;
  equipmentName: string;
  locationOfMotor: string;
  power: string;
  rpm: string;
  workRequest: string;
  make: string;
}

interface CheckboxState {
  checked: boolean;
  cell: string | null;
  customText?: string;
}

interface CheckboxFormState {
  [key: string]: CheckboxState;
}



const CheckboxForm = () => {
  const [formData, setFormData]  = useState<FormData>({
    receivedFrom: '',
    receivedDate: '',
    equipmentName: '',
    locationOfMotor: '',
    power: '',
    rpm: '',
    workRequest: '',
    make: '',
  });

  const [checkboxState, setCheckboxState] = useState<CheckboxFormState>({
    "Winding Burst": { checked: true, cell: "A12" },
    "Winding Over Heat": { checked: false, cell: "A13" },
    "Winding Ground": { checked: false, cell: "A14" },
    "Winding to Winding short": { checked: false, cell: "A15" },
    "Winding Open": { checked: false, cell: "A16" },
    "Winding resistance un balance": { checked: false, cell: "A17" },
    "Motor running two phase": { checked: false, cell: "A18" },
    "Motor Jam": { checked: false, cell: "A19" },
    "Armature Sparking": { checked: false, cell: "A20" },
    "Rusty": { checked: false, cell: "A21" },
    "Servicing": { checked: false, cell: "A22" },
    "Bearing Jam (Motor)": { checked: false, cell: "D12" },
    "Bearing Broken (Motor/Machine)": { checked: false, cell: "D13" },
    "Over Load (Motor)": { checked: false, cell: "D14" },
    
    "No option present": { checked: false, cell: null, customText: "D15" },

  });

  // Handle checkbox state change
  const handleCheckboxChange = (label:string) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [label]: {
        ...prevState[label],
        checked: !prevState[label].checked, // Toggle the checked state
      },
    }));
  };

  // Handle input change for "No option present"
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      "No option present": {
        ...prevState["No option present"],
        customText: event.target.value, // Save input text in the state
      },
    }));
  };

  // Handle form data input
  const handleFormInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit the selected data to the backend
  const handleSubmit = async () => {
    const selectedCheckboxes = Object.entries(checkboxState)
    .filter(([, state]) => state.checked) // No need to name the first part
    .map(([, state]) => ({
      cell: state.cell,
      label: state.customText || "No option present", // Handle custom text for 'No option present'
      color: "FFFF0000",
    }));

    const combinedData = {
      ...formData,
      checkboxes: selectedCheckboxes,
    };

    console.log(combinedData);

    try {
      // Example of sending data to backend (uncomment when needed)
      const response = await fetch('http://localhost:3000/api/EXCEL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData),
      });

      console.log(response)
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Create a link to download the file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'template.xlsx'; // Ensure the file extension is correct
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error('Failed to download the file');
      }

    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid  size={8}>
          <TextField
            id="filled-basic"
            label="Received From"
            variant="filled"
            name="receivedFrom"
            onChange={handleFormInputChange}
            required
          />
        </Grid>
        <Grid  size={4}>
          <TextField
            id="filled-basic"
            label="Received Date"
            variant="filled"
            name="receivedDate"
            onChange={handleFormInputChange}
            required
          />
        </Grid>
        <Grid size={4}>
          <TextField
            id="filled-basic"
            label="Equipment Name"
            variant="filled"
            name="equipmentName"
            onChange={handleFormInputChange}
            required
          />
        </Grid>
        <Grid  size={4}>
          <TextField
            id="filled-basic"
            label="Location of Motor"
            variant="filled"
            name="locationOfMotor"
            onChange={handleFormInputChange}
            required
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid  size={8}>
          <TextField
            id="filled-basic"
            label="Power"
            variant="filled"
            name="power"
            onChange={handleFormInputChange}
            required
          />
        </Grid>
        <Grid  size={4}>
          <TextField
            id="filled-basic"
            label="RPM"
            variant="filled"
            name="rpm"
            onChange={handleFormInputChange}
            required
          />
        </Grid>
        <Grid  size={4}>
          <TextField
            id="filled-basic"
            label="Work request#"
            variant="filled"
            name="workRequest"
            onChange={handleFormInputChange}
            required
          />
        </Grid>
        <Grid  size={4}>
          <TextField
            id="filled-basic"
            label="Make"
            variant="filled"
            name="make"
            onChange={handleFormInputChange}
            required
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid  size={6}>
          <FormGroup>
            {Object.entries(checkboxState).slice(0, 11).map(([label, state]) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    checked={state.checked}
                    onChange={() => handleCheckboxChange(label)}
                  />
                }
                label={label}
              />
            ))}
          </FormGroup>
        </Grid>
        <Grid  size={6}>
          <FormGroup>
            {Object.entries(checkboxState).slice(11).map(([label, state]) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    checked={state.checked}
                    onChange={() => handleCheckboxChange(label)}
                  />
                }
                label={label}
              />
            ))}
            {/* "No option present" with the input field */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxState["No option present"].checked}
                  onChange={() => handleCheckboxChange("No option present")}
                />
              }
              label="No option present"
            />
            <TextField
              label="Enter custom option"
              value={checkboxState["No option present"].customText}
              onChange={handleInputChange}
              fullWidth
              disabled={!checkboxState["No option present"].checked}
              required={checkboxState["No option present"].checked}
            />
          </FormGroup>
        </Grid>
        <Grid  size={6} style={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save Selection
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckboxForm;
