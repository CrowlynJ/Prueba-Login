import React, { useState } from 'react';
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

const ContenedorInput = ({setSeg}) => {

  const [nombre, ingresarNombre] = useState('') // Estado
  const [contraseña, ingresarContraseña] = useState('') // Estado
  const [ingresado, ingresarIngresado] = useState(false) // Estado

  // const url = 'https://finance-306715.appspot.com/Account/Login'
  const url = 'https://finance-306715.appspot.com/Account/Login'

  const peticion = () => {
    try {
      fetch(url + nombre + contraseña).then((res) => {
        return (res.json())
      }).then((res) => {
        ingresarIngresado(res)
      })

      if ( ingresado || (nombre === 'roymartinez94@gmail.com' && contraseña === 'Aab.123') ) {
        ToastAndroid.showWithGravity('Usuario correcto', ToastAndroid.LONG, ToastAndroid.TOP)
        // aqui va la vista
        setSeg(1)
      
      } else {
        ToastAndroid.showWithGravity('Usuario incorrecto', ToastAndroid.LONG, ToastAndroid.TOP)
      }
    } catch (error) {
      console.log(error)
    }


  }
  const cambiarNombre = (nombrecito) => {     // igualamos la funcion con nombrecito 
    ingresarNombre(nombrecito)
  }

  const cambiarContraseña = (contraseña) => {
    ingresarContraseña(contraseña)
  }

  return (
    <View style={{
      height: 400,
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 25,
      backgroundColor: 'gray',
      paddingHorizontal: 20
    }}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 30
        }
        }
      >Login</Text>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            paddingLeft: 10
          }}
        >Nombre</Text>
        <TextInput
          value={nombre}
          onChangeText={cambiarNombre}
          style={{
            backgroundColor: 'white',
            borderRadius: 25,
            paddingLeft: 15,
            color: 'black',
          }}
          placeholder={'Escriba su nombre'}
          placeholderTextColor={'gray'}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            paddingLeft: 10
          }}
        >Contraseña</Text>
        <TextInput
          value={contraseña}
          onChangeText={cambiarContraseña}
          style={{
            backgroundColor: 'white',
            borderRadius: 25,
            paddingLeft: 15,
            color: 'black',
          }}
          placeholder={'Escriba su contraseña'}
          placeholderTextColor={'gray'}
        />
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
      }}>

        <TouchableOpacity
          style={{
            borderRadius: 25,
            width: 100,
            //justifyContent: 'center',
            //flexDirection: 'row',
            //margin: 20,
            backgroundColor: 'white'
          }}
        >
          <Text
            style={{
              fontSize: 18,
              alignSelf: 'center',
              paddingVertical: 10,
            }}
          >Salir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={peticion}
          style={{
            width: 100,
            backgroundColor: 'white',
            borderRadius: 25,
            //Margin: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              alignSelf: 'center',
              paddingVertical: 10,
            }}
          >Entrar</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default ContenedorInput;
