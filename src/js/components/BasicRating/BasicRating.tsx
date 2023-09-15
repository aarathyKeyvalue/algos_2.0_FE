
import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import styles from "./styles.scss"
import { FC, useState } from 'react';

interface BasicRatingType {
totalReviewCount:string;
starCount:number;
isReadOnly?:boolean;
}

const  BasicRating:FC<BasicRatingType> =(props)=> {
  const {starCount=0,totalReviewCount,isReadOnly=false} = props;
  const [value, setValue] = useState<number | null>(0 | starCount);

  return (
    <Box
    sx={{
      display:'flex',
      alignItems:"center"
    }}
  >
    <Rating
      name="customized-color"
      defaultValue={0}
      precision={0.5}
      style={{color:"#2D8304"}}
      size='small'
      value={value}
      readOnly={isReadOnly}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
    <span className={styles.totalReviewCount}>({totalReviewCount})</span>
  </Box>
    
  );
}

export default BasicRating;