import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'


const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white ">
        <View className="p-5">
            <Image 
            className="w-24 h-24"
            style={{
                resizeMode:"contain"
            }}
            source={{
                uri: "https://1000logos.net/wp-content/uploads/2017/09/Uber-logo-PNG1.png",
            }}
            />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})