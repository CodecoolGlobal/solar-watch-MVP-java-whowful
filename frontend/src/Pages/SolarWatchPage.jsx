import React, { useEffect, useState } from "react";
import Modal from '../Components/Modal'
import HistoryTable from "../Components/HistoryTable";


const getSolarDataForCity = async (city, date) => {
  try {
    const res = await fetch(`/api/solarwatch?city=${city}&date=${date}`)
    if (!res.ok) {
      console.log(`Response status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Error fetching Solar Data: ", error)
  }
}

const getAllSolarData = async () => {
  try {
    const res = await fetch('/api/solarwatch/all')
    if (!res.ok) {
      console.log(`Response status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Error fetching Solar Data: ", error)
  }
}

const SolarWatchPage = () => {
  const [solarRequestData, setSolarRequestData] = useState({
    city: '',
    date: ''
  })
  const [solarData, setSolarData] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [solarDataList, setSolarDataList] = useState(null)

  const currentDate = new Date().toJSON().slice(0, 10)

  useEffect(() => {
    const saveSolarData = async () => {
      const solarDataListResponse = await getAllSolarData();
      setSolarDataList(solarDataListResponse)
    };
    setSolarRequestData({
      ...solarRequestData,
      date: currentDate
    })
    saveSolarData();
  }, [solarData]);


  const handleSolarDataChange = (e) => {
    const { name, value } = e.target;
    setSolarRequestData({
      ...solarRequestData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const solarDataResponse = await getSolarDataForCity(solarRequestData.city, solarRequestData.date)
    setSolarData(solarDataResponse)
    setOpenModal(true)
  }

  return (
    <>
      <div>
        <div className="ml-10 mt-20 p-2">
          <label htmlFor="solarWatch" className="pr-2"> Please enter the city:</label>
          <input
            type="text"
            name="city"
            value={solarRequestData.city}
            onChange={handleSolarDataChange}
            className='border-black border rounded-md px-1'
          />
        </div>
        <div className="ml-10 p-2">
          <label htmlFor="solarWatchDate" className="pr-2"> Please enter the date:</label>
          <input
            min={currentDate}
            type="date"
            name="date"
            value={solarRequestData.date}
            onChange={handleSolarDataChange}
            className='border-black border rounded-md px-1 w-auto'
          />
        </div>
        <div className="ml-10 mb-20 p-2">
          <button className='bg-gray-800 p-2 mt-7 rounded-xl text-white hover:bg-gray-500' type="submit" onClick={handleSubmit}>Search</button>
        </div>
        <div>
          <h2 className="mx-10 p-2 border-b-2 border-gray-800 text-2xl">History</h2>
          <HistoryTable solarDataList={solarDataList} />
        </div>
      </div >
      {!openModal ? (
        <></>
      ) : (
        <Modal solarData={solarData} closeModal={setOpenModal} />
      )}
    </>
  );
};

export default SolarWatchPage;