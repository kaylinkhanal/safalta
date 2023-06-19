import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ClearIcon from '@mui/icons-material/Clear';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

const actions = [
  { icon: <LocalShippingIcon />, name: 'Van' },
  { icon: <TwoWheelerIcon />, name: 'Bike' },
  { icon: <LocalTaxiIcon />, name: 'Taxi' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute',  right: 16 }}
        icon={<LocalShippingIcon />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}