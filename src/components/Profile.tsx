import html2canvas from "html2canvas";
import React, { useState } from "react";
import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Stack, TextField } from "@mui/material";

const Profile: React.FC = () => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [from, setFrom] = useState<string>();
  const [icon, setIcon] = useState<string>();

  const IconChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files!;
    
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      setIcon(reader.result! as string);
    }
    reader.readAsDataURL(files[0]);
  }

  const saveAsImage = () => {
    html2canvas(document.getElementById('profile-paper')!).then((canvas => {
      const imgUrl = canvas.toDataURL();
      const downloadLinkEl = document.createElement('a');
      downloadLinkEl.href = imgUrl;
      downloadLinkEl.download = Math.random().toString() + '.png';
      downloadLinkEl.click();
    }));
  }

  const NameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const DescriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }
  const FromChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value);
  }

  return <>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper sx={{textAlign: "center", p: 2}} id="profile-paper">
          <Box mb={1}>
            <img src={icon} alt="" width={128} height={128} style={{borderRadius: 9999}} />
          </Box>
          <h3>{name ?? 'Name'}</h3>
          <p>{description ?? 'Description'}</p>
          <Box textAlign={"right"}>
            from: {from ?? 'From'}
          </Box>
        </Paper>
        <Button onClick={saveAsImage}>download</Button>
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={2}>
          <TextField onChange={NameChangeHandler} label="Name" />
          <TextField onChange={DescriptionChangeHandler} label="Description" />
          <TextField onChange={FromChangeHandler} label="From" />
          <Box>
            <Button variant="contained" component="label" htmlFor="icon" startIcon={<CloudUpload />}>
              <input type="file" id="icon" accept="image/*" onChange={IconChangeHandler} hidden />
              UPLOAD FILE
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  </>
}

export default Profile;