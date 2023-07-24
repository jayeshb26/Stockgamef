import React from 'react'
import MrkHeader from '../common/Navbar/MrkHeader'
import ScreenNav from '../common/screenNav/ScreenNav'
import StockScreen from '../stock-screen/StockScreen'

export const Market = () => {
  return (
    <div>
      <MrkHeader/>
      <ScreenNav/>
      <StockScreen/>
    </div>
  )
}
