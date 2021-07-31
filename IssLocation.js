import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image, Alert, } from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import axios from "axios"
export default class IssLocationScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            location:{}}
    }
    getISSLocation =()=>{
axios.get('https://api.wheretheiss.at/v1/satellites/25544')
.then(response=>{
    this.setState({location:response.data})
})
.catch(error=>{
    Alert.alert(error.message)
})
    }
    componentDidMount(){
        this.getISSLocation()
        console.log(this.state.location)
    }
    render() {
        return (
            <View style = {styles.container}>
                    <SafeAreaView style = {styles.androidSafeArea}></SafeAreaView>
                <ImageBackground style = {styles.backgroundImage} source = {require('../assets/iss_bg.jpg')}>
                <View style ={styles.titleBar}>
                <Text style = {styles.titleText}>ISS Location</Text></View>
                <View style = {styles.mapContainer}>
                    <MapView style = {styles.map} region={{
                        latitude:this.state.location.latitude,
                        longitude:this.state.location.longitude,
                        latitudeDelta:100,
                        longitudeDelta:100
                    }}>
                        <Marker coordinate = {{latitude:this.state.location.latitude, longitude:this.state.location.longitude
                        }}>
                            <Image style = {styles.iconImage} source ={require('../assets/iss_icon.png')} ></Image>
                        </Marker>
                    </MapView>
            <View style = {styles.infoContainer}><Text style = {styles.infoText}>Latitude:{this.state.location.latitude}</Text>
            <Text style = {styles.infoText}>Longitude:{this.state.location.longitude}</Text>
            <Text style = {styles.infoText}>Velocity[kpmh]:{this.state.location.velocity}</Text>
            <Text style = {styles.infoText}>Altitude(km):{this.state.location.altitude}</Text></View>
                </View>
                </ImageBackground>
                
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
        color:'white',

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
map:{
    width:'100%',
    height:'100%',
},
mapContainer:{
    flex:0.6,

},
infoContainer:{
flex:0.2,
backgroundColor:'white',
padding:30,
marginTop:-10,
borderTopLeftRadius:30,
borderTopRightRadius:30
},
infoText:{
    color:'black',
    fontSize:15,
    fontWeight:'bold'
},
})