import React, { useState } from 'react';
import { View } from 'react-native';

import ContenedorInput from './src/contenedorInput'
import Segunda from './src/segunda';

const App = () => {

  const [seg, setSeg] = useState(0)

  console.log(seg)

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',  backgroundColor: 'black' }}>
      {seg == 0 &&
        <ContenedorInput setSeg={setSeg}/>
      }
      {seg == 1 &&
        <Segunda setSeg={setSeg}/>
      }
    </View>
  )
}

export default App;
