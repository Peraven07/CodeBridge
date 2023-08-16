import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TabView, TabPanel } from 'primereact/tabview';
import StarterPack from "../StarterPack/StarterPack";
import DeveloperPack from "../DeveloperPack/DeveloperPack";
import AdvancePack from "../AdvancePack/AdvancePack";
import CustomPack from "../CustomPack/CustomPack";

const PricingPackage = () => {
    
  useEffect(() => {}, []);
  return (
      <div className="card w-10">
          <TabView>
              <TabPanel header="Starter Pack">
                <StarterPack />
              </TabPanel>
              <TabPanel header="Developer Pack">
                <DeveloperPack />
              </TabPanel>
              <TabPanel header="Advance Pack">
                <AdvancePack/>
              </TabPanel>
              <TabPanel header="Custom Pack">
                <CustomPack/>
              </TabPanel>
          </TabView>
      </div>
  )
}
const mapState = (state) => {
  //
  return {};
};
const mapDispatch = (dispatch) => ({
  //
});

export default connect(mapState, mapDispatch)(PricingPackage);