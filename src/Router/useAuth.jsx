import React, { useContext } from 'react'
import { Authcontext } from './Authprovider'

const useAuth = () => {
  const data = useContext(Authcontext)
  return data
}

export default useAuth