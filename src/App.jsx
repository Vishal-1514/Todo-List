import { useState } from 'react'

import { Todo } from './project/Todo'
import {Challenge1} from './challenges/Challenge1'
import { FormChall } from './challenges/FormChall'
import { Pokemon } from './Pokemon/Pokemon'
import { BioProvider } from './hooks/home'
import { Context } from './hooks/context'
import { DarkLight,  ThemeProvider } from './challenges/DarkLight'
import { ReducerHook } from './hooks/ReducerHook'

export const App=()=> {
  

  return (
    <>
    <Todo/>
    </>
   
  )
}

export default App
