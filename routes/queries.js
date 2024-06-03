const queries = {
  airQuality: {
    min: "SELECT  MIN(pm25) as pm25 ,MIN(pm10) as pm10,MIN(temperature) as temperature,MIN(relative_humidity) as relative_humidity,MIN(co) as co,MIN(no2) as no2,MIN(nh3) as nh3,MIN(aqi) as air_quality_index ,MIN(aql) as air_qualitylevel ,MIN(aqi_mp) as aqi_Major_Pollutant From data_airqualitydatalatest ;",
    max: "SELECT  MAX(pm25) as pm25 ,MAX(pm10) as pm10,MAX(temperature) as temperature,MAX(relative_humidity) as relative_humidity,MAX(co) as co,MAX(no2) as no2,MAX(nh3) as nh3,MAX(aqi) as air_quality_index ,MAX(aql) as air_qualitylevel ,MAX(aqi_mp) as aqi_Major_Pollutant From data_airqualitydatalatest ;",
    avg: "SELECT  AVG(pm25) as pm25 ,AVG(pm10) as pm10,AVG(temperature) as temperature,AVG(relative_humidity) as relative_humidity,AVG(co) as co,AVG(no2) as no2,AVG(nh3) as nh3,AVG(aqi) as air_quality_index ,AVG(aql) as air_qualitylevel ,AVG(aqi_mp) as aqi_Major_Pollutant From data_airqualitydatalatest ;",
    building: "SELECT  AVG(pm25) as pm25 ,AVG(pm10) as pm10,AVG(temperature) as temperature,AVG(relative_humidity) as relative_humidity,AVG(co) as co,AVG(no2) as no2,AVG(nh3) as nh3,AVG(aqi) as air_quality_index ,AVG(aql) as air_qualitylevel ,AVG(aqi_mp) as aqi_Major_Pollutant From data_airqualitydatalatest WHERE node_id LIKE $1;",
    //bavg: ""
  },
  crowdMonitoring: {
    min: "SELECT  MIN(current_people_count) as current_people_count,MIN(no_of_safe_distance_violations) as no_of_safe_distance_violations,MIN(no_of_mask_violations) as no_of_mask_violations From  public.data_crowdmonitoringdatalatest;",
    max: "SELECT  MAX(current_people_count) as current_people_count,MAX(no_of_safe_distance_violations) as no_of_safe_distance_violations,MAX(no_of_mask_violations) as no_of_mask_violations From  public.data_crowdmonitoringdatalatest;",
    avg: "SELECT  AVG(current_people_count) as current_people_count,AVG(no_of_safe_distance_violations) as no_of_safe_distance_violations,AVG(no_of_mask_violations) as no_of_mask_violations From  public.data_crowdmonitoringdatalatest;",
    building: "SELECT  AVG(current_people_count) as current_people_count,AVG(no_of_safe_distance_violations) as no_of_safe_distance_violations,AVG(no_of_mask_violations) as no_of_mask_violations From  public.data_crowdmonitoringdatalatest WHERE node_id LIKE $1;",
  },

  smartroom: {
      min: "SELECT  MAX(room_temp) as room_temp ,MAX(temp_adjust) as temp_adjust,MAX(air_flow_rate_status) as air_flow_rate_status,MAX(air_direction_status) as air_direction_status,MAX(indoor_fan_status) as energy_efficiency_status,MAX(total_energy_consumption) as indoor_fan_status From public.data_smartroomacdatalatest ; ",
      max: "SELECT  MIN(room_temp) as room_temp ,MIN(temp_adjust) as temp_adjust,MIN(air_flow_rate_status) as air_flow_rate_status,MIN(air_direction_status) as air_direction_status,MIN(indoor_fan_status) as energy_efficiency_status,MIN(total_energy_consumption) as indoor_fan_status From public.data_smartroomacdatalatest ;",
      avg: "SELECT  AVG(room_temp) as room_temp ,AVG(temp_adjust) as temp_adjust,AVG(air_flow_rate_status) as air_flow_rate_status,AVG(air_direction_status) as air_direction_status,AVG(indoor_fan_status) as energy_efficiency_status,MAX(total_energy_consumption) as indoor_fan_status From public.data_smartroomacdatalatest ;",
      building: "SELECT  AVG(room_temp) as room_temp ,AVG(temp_adjust) as temp_adjust,AVG(air_flow_rate_status) as air_flow_rate_status,AVG(air_direction_status) as air_direction_status,AVG(indoor_fan_status) as energy_efficiency_status,MAX(total_energy_consumption) as indoor_fan_status From public.data_smartroomacdatalatest WHERE node_id LIKE $1;",
    },

  energyMonitoring:{
      min: "SELECT  MIN(power_factor) as power_factor ,MIN(frequency) as frequency,MIN(apparent_power) as apparent_power,MIN(real_power) as real_power,MIN(energy_consumption) as energy_consumption,MIN(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest ;",
      max: "SELECT  MAX(power_factor) as power_factor ,MAX(frequency) as frequency,MAX(apparent_power) as apparent_power,MAX(real_power) as real_power,MAX(energy_consumption) as energy_consumption,MAX(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest ;",
      avg: "SELECT  AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest ;",
      building: "SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE $1;",
      // NI:"SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%NI';",
      // SM:"SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%SM_____';",
      // BN: "SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%BN_____';",
      // NI:"SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%NI_____';",
      // SM:"SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%SM_____';",
      // NM:"SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%NM_____';",
      // PL:"SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%PL_____';",
      // TG:"SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%TG_____';",
      // DC:"SELECT AVG(power_factor) as power_factor ,AVG(frequency) as frequency,AVG(apparent_power) as apparent_power,AVG(real_power) as real_power,AVG(energy_consumption) as energy_consumption,AVG(total_energy_consumption) as total_energy_consumption From public.data_energymonitoringdatalatest WHERE node_id LIKE '%DC_____';",

      
    },
  solar:{
      min: "SELECT MIN(active_power) as active_power, MIN(voltage_rs) as voltage_rs, MIN(voltage_st)  AS voltage_st, MIN(voltage_tr) AS voltage_tr, MIN(frequency) AS frequency, MIN(power_factor) AS power_factor from  public.data_solardatalatest;",
      max: "SELECT MAX(active_power) as active_power, MAX(voltage_rs) as voltage_rs, MAX(voltage_st)  AS voltage_st, MAX(voltage_tr) AS voltage_tr, MAX(frequency) AS frequency, MAX(power_factor) AS power_factor from  public.data_solardatalatest;",
      avg: "SELECT AVG(active_power) as active_power, AVG(voltage_rs) as voltage_rs, AVG(voltage_st)  AS voltage_st, AVG(voltage_tr) AS voltage_tr, AVG(frequency) AS frequency, AVG(power_factor) AS power_factor from  public.data_solardatalatest;",
      building: "SELECT AVG(active_power) as active_power, AVG(voltage_rs) as voltage_rs, AVG(voltage_st)  AS voltage_st, AVG(voltage_tr) AS voltage_tr, AVG(frequency) AS frequency, AVG(power_factor) AS power_factor from  public.data_solardatalatest WHERE node_id LIKE $1;",
    },

 weather:{
      min: "SELECT MIN(solar_radiation) as solar_radiation, MIN(temperature) as temperature, MIN(relative_humidity)  AS relative_humidity, MIN(wind_speed) AS wind_speed, MIN(rain) AS rain, MIN(pressure) AS pressure from  public.data_weatherdatalatest;",
      max: "SELECT MAX(solar_radiation) as solar_radiation, MAX(temperature) as temperature, MAX(relative_humidity)  AS relative_humidity, MAX(wind_speed) AS wind_speed, MAX(rain) AS rain, MAX(pressure) AS pressure from  public.data_weatherdatalatest;",
      avg: "SELECT AVG(solar_radiation) as solar_radiation, AVG(temperature) as temperature, AVG(relative_humidity)  AS relative_humidity, AVG(wind_speed) AS wind_speed, AVG(rain) AS rain, AVG(pressure) AS pressure from  public.data_weatherdatalatest;",
      building: "SELECT AVG(solar_radiation) as solar_radiation, AVG(temperature) as temperature, AVG(relative_humidity)  AS relative_humidity, AVG(wind_speed) AS wind_speed, AVG(rain) AS rain, AVG(pressure) AS pressure from  public.data_weatherdatalatest WHERE node_id LIKE $1;"
    },


  

  // executeQuery: (vertical, operation) => {
  //   if (queries[vertical] && queries[vertical][operation]) {
  //     return queries[vertical][operation];
  //   } else {
  //     throw new Error('Invalid vertical or operation');
  //   }
  // },

  executeQuery: (vertical, operation, buildingIdentifier) => {
    if (queries[vertical] && queries[vertical][operation]) {
      let query = queries[vertical][operation];
  
      // Check if buildingIdentifier is provided and append it to the query if necessary
      if (buildingIdentifier) {
        // Modify the query to include buildingIdentifier
        query = query.replace('$1', `'${buildingIdentifier}'`);
      }
  
      return query;
    } else {
      throw new Error('Invalid vertical or operation');
    }
  },
  

  // Define queries for other verticals and parameters...
};

 //export default queries;
 module.exports = queries;
