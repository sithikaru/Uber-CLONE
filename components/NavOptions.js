import {FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

const data=[
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen",
    },
]

const NavOptions = () => {
  return (
    <FlatList
        data={data}
        horizontal
        className="pl-5"
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity className="p-2 pl-6 pb-8 bg-gray-200 m-2 w-40 h-48">
                <View>
                <Image 
                source={{uri:item.image}}
                style={{resizeMode:'contain', width:120, height:120,}}
                />
                <Text className="mt-2 text-lg font-semibold">{item.title} </Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions