import React from "react";
import Header from "app/components/header/Header";
import PlantList from 'app/components/plants/Plants';

const Plants = () => {
  return (
    <div>
      <Header title="Plants" hasBack />
      <PlantList />
    </div>
  )
}

export default Plants;