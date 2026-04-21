import React from 'react'
import Button from '@mui/material/Button';
import AdjustIcon from '@mui/icons-material/Adjust';
import Alert from '@mui/material/Alert';

const ButtonComp = () => {
  return (
    <div>
        <Button color='warning' startIcon={<AdjustIcon/>} size='small' onClick={()=>alert("ok")} variant="contained">Outlined</Button>
        <Alert variant='filled' severity='info'>Uday Kumar</Alert>
    </div>
  )
}

export default ButtonComp