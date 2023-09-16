import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';
import { CROP_TYPES } from 'app/containers/site/constants';

const PlantCard = (props) => {
  const { details } = props;
  
  const getCropType = (crop) => CROP_TYPES.find((each) => each.type === crop.name);
  return (
    <Card
      sx={{ width: '100%', paddingBottom: '0px', boxShadow: 'none',minHeight:"111px" }}
      onClick={() => console.log('Go to plant details')}
    >
      <CardActionArea sx={{ height: '100%', width: '100%' }}>
        <CardContent
          sx={{
            display: 'flex',
            columnGap: '12px',
            height: '100%',
            width: '100%',
            alignItems: 'center'
          }}
        >
          <CardMedia
            component="img"
            height="57px"
            width="62px"
            image={getCropType(details)?.image || CROP_TYPES[1]?.image}
            alt="Paella dish"
            sx={{ maxWidth: '62px', maxHeight: '57px', borderRadius: '8px' }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '9px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography sx={{ fontSize: 10 }} color="#1D1D1D80">
                  {details?.gardenSite?.name}
                </Typography>
                <Typography
                  sx={{ fontSize: 15, fontWeight: '600' }}
                  color="#1D1D1D"
                  fontWeight={500}
                >
                  {details?.name}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '24px'
                  }}
                >
                  <Typography sx={{ fontSize: 10 }} color="#1D1D1DCC">
                    HARVEST IN
                  </Typography>
                  <Typography sx={{ fontSize: 12 }} color="#2D8304">
                    {details?.daysToHarvest} Days
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '24px'
                  }}
                >
                  <Typography sx={{ fontSize: 10 }} color="#1D1D1DCC">
                    pH Level
                  </Typography>
                  <Typography sx={{ fontSize: 12 }} color="#2D8304">
                    {details?.gardenSite?.phLevel}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Typography sx={{ fontSize: 10 }} color="#1D1D1DCC">
                    NUTRITION
                  </Typography>
                  <Typography sx={{ fontSize: 12 }} color="#EEAD05">
                    {details?.gardenSite?.nutrientLevel}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <img src="assets/svg/app/right-arrow.svg" />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlantCard;
