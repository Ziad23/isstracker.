import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style = {styles.androidSafeArea}></SafeAreaView>
                <ImageBackground style = {styles.backgroundImage} source = {require('../assets/bg_updates.jpg')}>
                <View style ={styles.titleBar}>
                <Text style = {styles.titleText}>ISS Tracker App</Text></View>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Meteor')} style = {styles.routeCard}>
                <Text style = {styles.rootText}>Meteors</Text>
                <Text style = {styles.knowMore}>{"Know More--->"}</Text>
                <Text style = {styles.bgDigit}>1</Text>
                    <Image style = {styles.iconImage} source = {require('../assets/meteor_icon.png')}></Image></TouchableOpacity>
                    <TouchableOpacity onPress = {()=>this.props.navigation.navigate('ISSLocation')} style = {styles.routeCard}>
                    <Text style = {styles.rootText}>ISS Tracker</Text>
                    <Text style = {styles.knowMore}>{"Know More--->"}</Text>
                    <Text style = {styles.bgDigit}>2</Text>
                    <Image style = {[styles.iconImage, {height:100}]} source = {require('../assets/iss_icon.png')}></Image>
                    </TouchableOpacity></ImageBackground>
                    
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',

    },
androidSafeArea:{
    marginTop:Platform.OS === 'android'?StatusBar.currentHeight:0
},
titleBar:{
justifyContent:'center',
alignItems:'center'
},
routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
   backgroundColor:'white',
   borderWidth:2,

},
rootText:{
    fontWeight:'bold',
    fontSize:35,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:75,

},
backgroundImage:{
   flex:1,
   resizeMode: 'cover',

},
iconImage:{
    height:150,
    width:200,
    resizeMode:'contain',
    position:'absolute',
    right:40,
    top:-20,
},
knowMore:{
    paddingLeft:30,
    color:'red',
    fontSize:15,
},
bgDigit:{
    position:'absolute',
    fontSize:50,
    color: "rgba(183,183,183,0.5)",
},
})