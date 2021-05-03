import React from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import App from '../App';
import ContenedorInput from './contenedorInput';

const Segunda = ({setSeg}) => {
    const atras = () => {
        setSeg(0)
    }
    return (
        <View
            style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center'}}
        >
            <View
                style={{
                    height: 350,
                    width: 350,
                    borderRadius: 250,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>
                    <Text
                    style = {{
                        color: 'black',
                        alignSelf: 'center',
                        fontSize: 30,

                    }}
                    > concretado!</Text>

            </View>
            
            <TouchableOpacity
            onPress={atras}
            >
            <Text
                style = {{
                    color: 'black',
                    alignSelf: 'center',
                    fontSize: 30,
                    marginTop: 30,
                }}
                >Atras</Text>
            </TouchableOpacity>
                
                
            
        </View>
    )

}
export default Segunda;