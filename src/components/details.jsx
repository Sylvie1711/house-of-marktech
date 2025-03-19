import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    brandName: 'Brand A',
    payout: '$500',
    hiredCount: 10,
    description: 'Brand A is looking for influencers',
  },
  {
    id: 2,
    brandName: 'Brand B',
    payout: '$300',
    hiredCount: 5,
    description: 'Brand B is seeking creative influencers ',
  },
  {
    id: 3,
    brandName: 'Brand C',
    payout: '$700',
    hiredCount: 15,
    description: 'Brand C wants to collaborate',
  },
  {
    id: 4,
    brandName: 'Brand D',
    payout: '$400',
    hiredCount: 8,
    description: 'Brand D is looking for social media experts',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id} sx={{ height: '100%' }}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'orange',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.brandName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Payout: {card.payout}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hired Count: {card.hiredCount}
              </Typography>
              <Typography variant="body2" color="orange" sx={{ marginTop: 1 }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;