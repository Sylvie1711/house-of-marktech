import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Instagram', value: 400 },
    { label: 'Facebook', value: 300 },
    { label: 'Twitter', value: 300 },
    { label: 'TikTok', value: 200 },
    { label: 'YouTube', value: 278 },
    { label: 'LinkedIn', value: 189 },
];

export default function PieChartComponent() {
  const [startAngle, setStartAngle] = React.useState(-90);
  const [endAngle, setEndAngle] = React.useState(90);

  const updateAngles = () => {
    if (window.innerWidth < 768) { // Example breakpoint for mobile screens
      setStartAngle(-180); // Adjust for mobile
      setEndAngle(0); // Adjust for mobile
    } else {
      setStartAngle(-90); // Default for larger screens
      setEndAngle(90); // Default for larger screens
    }
  };

  React.useEffect(() => {
    updateAngles(); // Set initial angles
    window.addEventListener('resize', updateAngles); // Update angles on resize

    return () => {
      window.removeEventListener('resize', updateAngles); // Cleanup listener
    };
  }, []);

  return (
    <div style={{ textAlign: 'left', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
        Social Media Distribution
      </h2>
      <PieChart
        series={[
          {
            startAngle: startAngle, // Use dynamic start angle
            endAngle: endAngle, // Use dynamic end angle
            data,
          },
        ]}
        height={300}
      />
    </div>
  );
}
