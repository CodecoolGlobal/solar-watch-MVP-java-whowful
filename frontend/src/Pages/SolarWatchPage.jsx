import React, { useEffect, useState } from "react";
import Modal from '../Components/Modal'


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
  const [cityName, setCityName] = useState('')
  const [solarData, setSolarData] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [allSolarData, setAllSolarData] = useState(null)
  const [date, setDate] = useState('')

  const currentDate = new Date().toJSON().slice(0, 10)

  useEffect(() => {
    const solarDataFunc = async () => {
      const allSolarDataResponse = await getAllSolarData();
      setAllSolarData(allSolarDataResponse);
    };
    setDate(currentDate)
    solarDataFunc();
  }, [solarData]);


  const handleCityChange = (e) => {
    setCityName(e.target.value)
  }

  const handleDateChange = (e) => {
    console.log(e.target.value)
    setDate(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const oneSolarDataResponse = await getSolarDataForCity(cityName, date)
    setSolarData(oneSolarDataResponse)
    setOpenModal(true)
  }

  return (
    <>
      {!openModal ? (
        <div>
          <div className="ml-10 mt-20 p-2">
            <label htmlFor="solarWatch" className="pr-2"> Please enter the city:</label>
            <input
              type="text"
              name="solarWatch"
              value={cityName}
              onChange={handleCityChange}
              className='border-black border rounded-md px-1'
            />
          </div>
          <div className="ml-10 p-2">
            <label htmlFor="solarWatchDate" className="pr-2"> Please enter the date:</label>
            <input
              min={currentDate}
              type="date"
              name="solarWatchDate"
              value={date}
              onChange={handleDateChange}
              className='border-black border rounded-md px-1 w-auto'
            />
          </div>
          <div className="ml-10 mb-20 p-2">
            <button className='bg-gray-800 p-2 mt-7 rounded-xl text-white hover:bg-gray-500' type="submit" onClick={handleSubmit}>Search</button>
          </div>
          <div>
            <h2 className="mx-10 p-2 border-b-2 border-gray-800 text-2xl">History</h2>
            <div className="relative overflow-x-auto mx-10 p-2">
              <table className="w-full text-left text-gray-800">
                <thead className="text-gray-700 uppercase">
                  <tr>
                    <th className="border-b border-gray-800 py-5 text-lg">City</th>
                    <th className="border-b border-gray-800 py-5 text-lg">Date</th>
                    <th className="border-b border-gray-800 py-5 text-lg">Sunrise</th>
                    <th className="border-b border-gray-800 py-5 text-lg">Sunset</th>
                  </tr>
                </thead>
                <tbody>
                  {allSolarData && allSolarData.length > 0 ? (allSolarData.map((data, index) => (
                    <tr key={index} className="bg-white border-b-2 text-sm">
                      <td className="py-2">{data.city}</td>
                      <td>{data.date}</td>
                      <td>{data.sunrise}</td>
                      <td>{data.sunset}</td>
                    </tr>
                  ))) : (
                    <tr>
                      <td colSpan="4" className="text-center py-4">No data available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div >
      ) : (
        <Modal solarData={solarData} closeModal={setOpenModal} />
      )}
    </>
  );
};

export default SolarWatchPage;