// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';
// const profileImg = require(
//   "./assets/image 60.png"
// )
// export default function App() {
//   return (
    // <View style={{flex:1,backgroundColor:"#016fd0"}}>
      
    //   <StatusBar style="auto"/>
    //   <Text style={{color:"white",fontSize:20,fontWeight:'bold',marginTop:50,margin:30}}>
    //     TrackMudra</Text>
      
    //   <View style={styles.circle}>
    //   <Image source={profileImg} style={{marginLeft:5,marginTop:4,width:50,height:50}}/>
    //   </View>
    //   <View style={{flex:1,marginLeft:40}}>
    //   <Text style={{}}>Hello</Text>
    //   <Text style={{fontWeight:'bold'}}>Chandni!</Text>
    //   </View>
      
    // </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#016fd0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   circle:{
//     backgroundColor: '#ffffff',
//     width: 60,
//     height: 60,
//     borderRadius: 50,
//     margin:30,
//     marginTop:1,
    
    
//   },
// });
// import React from 'react';
// import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// const profileimg = require("./assets/user (1).png");
// const leaderboard = require("./assets/ranking (1).png");

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={{flex:1,backgroundColor:"#016fd0"}}>
//       <View style={{height:70}}><Text style={{color:"white",fontSize:20,fontWeight:'bold',paddingTop:40,paddingLeft:30}}>
//            TrackMudra</Text></View>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.header}>
//           <View style={styles.profileSection}>
//             <Image
//               source={profileimg}
//               style={styles.profileImage}
//             />
//             <View style={styles.profileText}>
//               <Text style={styles.helloText}>Hello!</Text>
//               <Text style={styles.nameText}>Chandni</Text>
//             </View>
//           </View>
//           <View style={styles.iconSection}>
//             <Image
//               source={ leaderboard }
//               style={styles.headerIcon}
//             />
//             <Image
//                source={require('./assets/notification.png')}
//               style={styles.headerIcon}
//             />
//             <Image
//                source={require('./assets/chatbot.png')}
//               style={styles.headerIcon}
//             />
//           </View>
//         </View>
        
//         <View style={styles.expenseCard}>
//           <View style={styles.expenseTextcontainer}>
//           <Text style={styles.expenseTitle}>Total Expense</Text>
//           <Text style={styles.expenseAmount}>-₹25,000</Text>
//           <Text style={styles.expenseSubtitle}>in 5 days</Text>
//           <Text style={styles.currentValue}>Current Value</Text>
//           <Text style={styles.currentAmount}>₹ 50000</Text>
//           </View>
//           <Image
//             source={require('./assets/ExpenseTree.png')}
//             style={styles.expenseImage}
//           />
//         </View>

//         <View style={styles.circleMenu}>
//           <View style={styles.circleMenuCircle}>
//           <Image
//             source={require('./assets/rewards.png')}
//             style={styles.circleMenuItem}
//           />
//           <Text style={{color:"white",fontWeight:'bold',paddingTop:1}}>Rewards</Text>
//           </View>
//           <View style={styles.circleMenuCircle}>
//           <Image
//             source={require('./assets/earth.png')}
//             style={styles.circleMenuItem}
//           />
//           <Text style={{color:"white",fontWeight:'bold',paddingTop:1}}>News</Text>
//           </View>
//           <View style={styles.circleMenuCircle}>
//           <Image
//             source={require('./assets/event.png')}
//             style={styles.circleMenuItem}
//           />
//           <Text style={{color:"white",fontWeight:'bold',paddingTop:1}}>Events</Text>
//           </View>
//           <View style={styles.circleMenuCircle}>
//           <Image
//             source={require('./assets/schemes.png')}
//             style={styles.circleMenuItem}
//           />
//           <Text style={{color:"white",fontWeight:'bold',paddingTop:1}}>Schemes</Text>
//           </View>
          

//         </View>

//         <View style={styles.featureGrid}>
//           <View style={styles.featureItem}>
//             <Image
//                source={require('./assets/budget.png')}
//               style={styles.featureImage}
//             />
//                <View style={styles.featureTextView}>
//                    <Text style={styles.featureText}>Expense Tracker</Text>
//                </View>

//           </View>
//           <View style={styles.featureItem}>
//             <Image
//                source={require('./assets/earning.png')}
//               style={styles.featureImage}
//             />
//              <View style={styles.featureTextView}>
//                    <Text style={styles.featureText}>Investment Manager</Text>
//                </View>
            
//           </View>
//           <View style={styles.featureItem}>
//             <Image
//                source={require('./assets/retirement (2).png')}
//               style={styles.featureImage}
//             />
//             <View style={styles.featureTextView}>
//                    <Text style={styles.featureText}>Retirement Planner</Text>
//                </View>
//           </View>
//           <View style={styles.featureItem}>
//             <Image
//                source={require('./assets/money (2).png')}
//               style={styles.featureImage}
//             />
//             <View style={styles.featureTextView}>
//                    <Text style={styles.featureText}>Goal Setter</Text>
//                </View>
//           </View>
//         </View>
        
        
//       </ScrollView>
//       <View style={styles.footer}>
//           <Image
//              source={require('./assets/homelogoblue.png')}
//             style={styles.footerIcon}
//           />
//           <Image
//             source={require('./assets/explogo.png')}
//             style={styles.footerIcon}
//           />
//           <Image
//              source={require('./assets/invlogo.png')}
//             style={styles.footerIcon}
//           />
//           <Image
//              source={require('./assets/retlogo.png')}
//             style={styles.footerIcon}
//           />
//           <Image
//              source={require('./assets/goalLogo.png')}
//             style={styles.footerIcon}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e6e6fa',
//   },
//   scrollContainer: {
//     alignItems: 'center',
//     paddingBottom:100,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '90%',
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#016fd0',
//     borderRadius: 10,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileText: {
//     marginLeft: 10,
//   },
//   helloText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   nameText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   iconSection: {
//     flexDirection: 'row',
//   },
//   headerIcon: {
//     width: 30,
//     height: 30,
//     marginLeft: 10,
//   },
//   expenseCard: {
//     flexDirection:'row',
//     width: '90%',
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   expenseTitle: {
//     fontSize: 16,
//     color: '#888',
//     textAlign:'left',
//   },
//   expenseAmount: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#ff4500',
//     marginVertical: 5,
//     textAlign:'left',
//   },
//   expenseSubtitle: {
//     fontSize: 12,
//     color: '#888',
//     textAlign:'left',
    
//   },
//   currentValue: {
//     fontSize: 16,
//     color: '#888',
//     marginTop: 10,
//     textAlign:'left',
//   },
//   currentAmount: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#32cd32',
//     textAlign:'left',
//   },
//   expenseTextcontainer:{
//     flex:1,
//     marginLeft:20,
//   },
//   expenseImage: {
//     width: 200,
//     height: 200,
//     marginTop: 10,
    
    
//   },
//   circleMenu: {
//     flexDirection: 'row',
//     justifyContent:'space-evenly',
//     width: '90%',
//     marginTop: 17,
//   },
//   circleMenuCircle:{
//     backgroundColor: '#ffffff',
//     width: 60,
//     height: 60,
//     borderRadius: 50,
//     margin:10,
//     marginTop:1,
//     alignItems: 'center',
//     justifyContent:'space-between',
//   },
//   circleMenuItem: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     margin:7,
//   },
//   featureGrid: {
//     width: '90%',
//     marginTop: 20,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//   },
//   featureItem: {
//     width: '45%',
//     height:200,
//     backgroundColor: '#DFE5FE',
//     borderRadius: 10,
//     marginTop: 10,
//     alignItems: 'center',
//     justifyContent:'flex-end',
//   },
//   featureImage: {
//     width: 90,
//     height: 90,
//     margin:20,
//   },
//   featureTextView:{
//      height:45,
//      width:153,
//      backgroundColor:'#ffffff',
//      borderBottomLeftRadius:10,
//      borderBottomRightRadius:10,
//      padding:5,
//   },
//   featureText: {
//     marginTop: 5,
//     fontSize: 14,
//     fontWeight:'bold',
//     color: '#4d4f53',
//     textAlign: 'center',

//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height:70,
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal:10,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//   },
//   footerIcon: {
//     width: 40,
//     height: 40,

//   },
// });

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home';
import Rewards from './Pages/Rewards';
const Stack= createStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TrackMudra">
            
            <Stack.Screen options={{headerShown: false}} name="TrackMudra"component={Home} />
            <Stack.Screen name="Rewards" component={Rewards} />
           
          </Stack.Navigator>
        </NavigationContainer>
  );
}