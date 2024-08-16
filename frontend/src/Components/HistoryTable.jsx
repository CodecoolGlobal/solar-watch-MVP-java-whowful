import React from 'react'

function HistoryTable({ solarDataList }) {
  return (
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
          {solarDataList && solarDataList.length > 0 ? (solarDataList.map((solarData, index) => (
            <tr key={index} className="bg-white border-b-2 text-sm">
              <td className="py-2">{solarData.city}</td>
              <td>{solarData.date}</td>
              <td>{solarData.sunrise}</td>
              <td>{solarData.sunset}</td>
            </tr>
          ))) : (
            <tr>
              <td colSpan="4" className="text-center py-4">No data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HistoryTable