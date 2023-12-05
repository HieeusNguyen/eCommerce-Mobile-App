import { View, Text, Image } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../data/products'

const Product = () => {
  return (
    <View style={{marginTop: 30, alignItems:'center'}}>
        {PRODUCTS.slice(0,1).map((product, index) => (
            <View style={{alignItems:'center'}} key={index}>
                <Image source={product.image} />
                <Text style={{fontSize: 25, fontWeight: '700', marginTop: 12}}>{product.name}</Text>
                <Text style={{fontSize: 20, fontWeight:'300'}}>{product.price}</Text>
            </View>
        ))}
    </View>
  )
}

export default Product