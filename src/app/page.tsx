import { Box, Checkbox, FormControlLabel, FormGroup, Grid2, TextField } from "@mui/material";

export default function Home() {





  return (
   <Box>

<Grid2 container spacing={2} justifyContent={"center"}>
  <Grid2 size={3}>
  <TextField id="filled-basic" label="Power" variant="filled" />
  </Grid2>
  <Grid2 size={3}>
  <TextField id="filled-basic" label="RPM" variant="filled" />
  </Grid2>
 
</Grid2>
<Grid2 container spacing={2} justifyContent={"center"}>
  <Grid2 size={3}>
  <TextField id="filled-basic" label="WORK REQUEST #" variant="filled" />
  </Grid2>
  <Grid2 size={3}>
  <TextField id="filled-basic" label="MAKE" variant="filled" />
  </Grid2>
 
</Grid2>


<Grid2 container spacing={2} justifyContent={"center"}>
  <Grid2 size={3}>
  <FormGroup >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Winding Burst" />
      <FormControlLabel control={<Checkbox />} label="Winding Over Heat" />
      <FormControlLabel  control={<Checkbox />} label="Winding Ground" />
      <FormControlLabel  control={<Checkbox />} label="Winding to Winding short" />
      <FormControlLabel  control={<Checkbox />} label="Winding Open" />
      <FormControlLabel  control={<Checkbox />} label="Winding resistance un balance" />
      <FormControlLabel  control={<Checkbox />} label="Motor running two phase" />
      <FormControlLabel  control={<Checkbox />} label="Motor Jam" />
      <FormControlLabel  control={<Checkbox />} label="Armature Sparking" />
      <FormControlLabel  control={<Checkbox />} label="Rusty" />
      <FormControlLabel  control={<Checkbox />} label="Servicing" />
      
    </FormGroup>
  </Grid2>
  <Grid2 size={3}>
  <FormGroup >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Bearing Jam (Motor)" />
      <FormControlLabel control={<Checkbox />} label="Bearing Broken (Motor/Machine)" />
      <FormControlLabel  control={<Checkbox />} label="Over Load (Motor)" />
      <FormControlLabel  control={<Checkbox />} label="Winding to Winding short" />
      <FormControlLabel  control={<Checkbox />} label="Winding Open" />
      <FormControlLabel  control={<Checkbox />} label="Winding resistance un balance" />
      <FormControlLabel  control={<Checkbox />} label="Motor running two phase" />
      <FormControlLabel  control={<Checkbox />} label="Motor Jam" />
      <FormControlLabel  control={<Checkbox />} label="Armature Sparking" />
      <FormControlLabel  control={<Checkbox />} label="Rusty" />
      <FormControlLabel  control={<Checkbox />} label="Servicing" />
      
    </FormGroup>
  </Grid2>
 
</Grid2>



   </Box>
  );
}
