import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import Header from "app/components/header/Header";
import Item from "app/components/item/Item";
import muiStyles from 'app/containers/shop/styles';
import AntSwitch from "app/components/switch/Switch";

import mui from './styles';
import { CROP_TYPES, crops } from "./constants";
import styles from './styles.scss';
import { useGetGardenSiteByIdQuery } from "app/services/garden";

const Site = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data = {}, isLoading } = useGetGardenSiteByIdQuery(id);
  const getCropType = (crop) => CROP_TYPES.find((each) => each.type === crop.name);
  const [showAllCrops, toggleShowAll] = useState<boolean>(false);
  const goToPlants = () => navigate(`/site/${id}/plants`);
  if (isLoading) {
    return <div
    className="loader"
    >
      <CircularProgress />
      </div>
  }
  return (
    <div className={styles.siteContainer}>
      <Header
      hasBack
      hasRefresh
      hasVoiceCommand
      title={
      <div className={styles.header}>
        <div className={styles.headerTitle}>{data.name}</div>
        <div className={styles.headerSub}>Tashin Pro</div>
      </div>
      } />
      <div className={styles.content}>
        <Item type="plants" style={styles.plants}>
          <>
            <div className={styles.plantsHeader} onClick={goToPlants}>
              <span><span className={styles.count}>{data.plants?.length}</span>
              <span className={styles.capacity}>/10</span></span>
              <span className={styles.sub}> Plants</span>
              <img src="assets/svg/app/right-arrow.svg" />
            </div>
            <div className={styles.crops}>
              {data?.plants?.map((crop, index) => {
                const cropType = getCropType(crop);
                return ((crops.length > 5 && index < 4) || (crops.length <= 5) || showAllCrops) && cropType && (
                <div className={styles.eachCrop}>
                  <div className={styles.cropImage}><img src={cropType.image} className={cropType.tilted && styles.titled || ''} /></div>
                  <div className={styles.cropName}>{cropType.name}</div>
                </div>)
              })}
              {data?.plants?.length > 5 && (
                <div className={styles.moreCrops} onClick={() => toggleShowAll(!showAllCrops)}>
                  {showAllCrops && 'Show Less' || `+${crops?.length - 4} more`}
                </div>
              )}
            </div>
          </>
        </Item>
        <Item type="waterLevel" style={styles.waterLevelContainer}>
          <>
            <div className={styles.details}>
              <div className={styles.eachDetail}>
                <div className={styles.header}>Water Level</div>
                <AntSwitch defaultChecked/>
              </div>
              <div className={styles.eachDetail}>
                <div className={`${styles.mainValue} ${styles.waterLevel}`}>{data?.waterLevel} Ltrs.</div>
                <Button sx={[muiStyles.secondary, mui.button]}>Schedule</Button>
              </div>
              <div className={styles.infos}>
                <div className={styles.waterInfo}>
                  Refill scheduled for 10:15 AM tomorrow
                </div>
                <div className={styles.max}>Max Capacity  30 ltrs.</div>
                </div>
            </div>
            <div className={styles.image}>
              <img src="assets/svg/garden/watering_can.svg" />
            </div>
          </>
        </Item>
        <div className={styles.twoSections}>
          <Item type="light" style={styles.light}>
            <>
            <div className={styles.details}>
              <div className={styles.eachDetail}>
                <div className={styles.header}>Light</div>
                <AntSwitch defaultChecked/>
              </div>
              <div className={styles.eachDetail}>
                <div className={`${styles.mainValue} ${styles.lightValue}`}>{data?.lightLevel} lm.</div>
              </div>
              <div className={styles.infos}>
                <div className={styles.info}>
                  Ideal for current plants
                </div>
                <div className={styles.max}>Ideal Range: 26-30</div>
                </div>
            </div>
            <div className={styles.image}>
                <img src="assets/svg/garden/light.svg" />
              </div>
            </>
          </Item>
          <Item type="temperature" style={styles.temp}>
            <>
            <div className={styles.details}>
              <div className={styles.eachDetail}>
                <div className={styles.header}>Temperature</div>
              </div>
              <div className={styles.eachDetail}>
                <div className={`${styles.mainValue} ${styles.temperature}`}>{data.temperature}&deg;C</div>
              </div>
              <div className={styles.infos}>
                <div className={styles.info}>
                  Ideal for current plants
                </div>
                <div className={styles.max}>Ideal Range: 25-30</div>
              </div>
            </div>
            <div className={styles.image}>
                <img src="assets/svg/garden/temp.svg" />
              </div></>
          </Item>
        </div>
        <div className={styles.twoSections}>
          <Item type="ph" style={styles.light}>
            <>
            <div className={styles.details}>
              <div className={styles.eachDetail}>
                <div className={styles.header}>pH Level</div> 
              </div>
              <div className={styles.eachDetail}>
                <div className={`${styles.mainValue} ${styles.lightValue}`}>{data.phLevel}</div>
              </div>
              <div className={styles.infos}>
                <div className={styles.info}>
                  Ideal for current plants
                </div>
                <div className={styles.max}>Ideal Range: 5-6.2</div>
                </div>
            </div>
            <div className={styles.image}>
                <img src="assets/svg/garden/ph.svg" />
              </div>
            </>
          </Item>
          <Item type="water" style={styles.temp}>
            <>
            <div className={styles.details}>
              <div className={styles.eachDetail}>
                <div className={styles.header}>Humidity</div>
              </div>
              <div className={styles.eachDetail}>
                <div className={`${styles.mainValue} ${styles.phValue}`}>{data.humidity}%</div>
              </div>
              <div className={styles.infos}>
                <div className={styles.phInfo}>
                  Ideal for current plants
                </div>
                <div className={styles.max}>Ideal Range: 80%-90%</div>
              </div>
            </div>
            <div className={styles.image}>
                <img src="assets/svg/garden/water.svg" />
              </div></>
          </Item>
        </div>
        <Item type="nutrients" style={styles.waterLevelContainer}>
          <>
          <div className={styles.details}>
              <div className={styles.eachDetail}>
                <div className={styles.header}>Nutrients</div>
                <AntSwitch defaultChecked/>
              </div>
              <div className={styles.eachDetail}>
                <div className={`${styles.mainValue} ${styles.phValue}`}>{data.nutrientLevel}</div>
                <Button sx={[muiStyles.secondary, mui.button]}>Schedule</Button>
              </div>
              <div className={styles.infos}>
                <div className={styles.max}>Last bought 2 months ago.</div>
              </div>
            </div>
            <div className={styles.image}>
                <img src="assets/svg/garden/nutrients.svg" />
            </div>
          </>
        </Item>
      </div>
    </div>
  )
}

export default Site;