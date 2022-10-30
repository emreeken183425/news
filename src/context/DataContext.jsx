import React, { createContext, useContext, useState } from 'react'


export const DataContext=createContext()
export const useDataContext=()=>{
  return useContext(DataContext)
}
const DataContextProvider = ({children} ) => {
const [favourites,setfavourites] = React.useState([])
console.log(favourites);
 const values={
  setfavourites ,
  favourites
 }

  return (
   <DataContext.Provider value={values} >
     {children}
   </DataContext.Provider>
  )
}

export default DataContextProvider
