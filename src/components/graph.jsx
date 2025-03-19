import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function BasicSparkLineCustomization() {
  const [showHighlight, setShowHighlight] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(true);

  const handleHighlightChange = (event) => {
    setShowHighlight(event.target.checked);
  };

  const handleTooltipChange = (event) => {
    setShowTooltip(event.target.checked);
  };

  return (
    <Stack direction="column" sx={{ width: '100%' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <FormControlLabel
          control={
            <Switch
              color="orange"
              checked={showHighlight}
              onChange={handleHighlightChange}
            />
          }
          label="Show Highlight"
          labelPlacement="end"
        />
        <FormControlLabel
          control={
            <Switch
              color="orange"
              checked={showTooltip}
              onChange={handleTooltipChange}
            />
          }
          label="Show Tooltip"
          labelPlacement="end"
        />
      </Stack>
      <Stack direction="row" sx={{ width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart
            data={[1, 4, 2, 5, 7, 2, 4, 6]}
            height={100}
            showHighlight={showHighlight}
            showTooltip={showTooltip}
            xAxis={{
              label: {
                style: { fill: 'orange' },
              },
            }}
            yAxis={{
              label: {
                style: { fill: 'orange' },
              },
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart
            plotType="bar"
            data={[1, 4, 2, 5, 7, 2, 4, 6]}
            height={100}
            showHighlight={showHighlight}
            showTooltip={showTooltip}
            xAxis={{
              label: {
                style: { fill: 'orange' },
              },
            }}
            yAxis={{
              label: {
                style: { fill: 'orange' },
              },
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
