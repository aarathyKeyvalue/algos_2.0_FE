import React from "react";
import { useParams } from "react-router-dom";
import Header from "app/components/header/Header";
import PlantList from 'app/components/plants/Plants';
import { useGetPlantsByGardenSiteQuery } from "app/services/garden";

const Plants = () => {
  const { id } = useParams();
  const { data } = useGetPlantsByGardenSiteQuery(id);
  return (
    <div>
      <Header title="Plants" hasBack />
      <PlantList data={data}/>
    </div>
  )
}

export default Plants;