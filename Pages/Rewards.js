import { Image, View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'

const Rewards = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <View style={{flex:1,backgroundColor:"#002663"}}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate()}>
        <View style={{flexDirection:'row',paddingLeft:10,paddingTop:10}}>
          <Text style={{color:'#fff'}}>History</Text>
          <Image
              source={require('../assets/history.png')} 
              style={styles.headerIcon}
            />
        </View>
        </TouchableOpacity>
        <View style={styles.headerRightIcons}>
          <TouchableOpacity>
          <View style={{flexDirection:'row',paddingLeft:10,paddingTop:10}}>
          <Text style={{color:'#fff'}}>Leaderboard</Text>
            <Image
              source={require('../assets/ranking (1).png')} 
              style={styles.headerIcon}
            />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    <View style={styles.balanceCard}>
      <Text style={styles.balanceText}>Your Balance</Text> 
        <View style={styles.circleBalance}>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>428</Text>
          <Text style={styles.pointsLabel}>Points</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemText}>Redeem</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.vouchersSection}>
        <Text style={styles.vouchersTitle}>Vouchers</Text>
        <Text style={styles.vouchersSubtitle}>Win exciting vouchers today!</Text>
        <View style={styles.vouchersContainer}>
        
          <View style={styles.voucherCard}>
          <Image
              source={require('../assets/puma.png')} 
              style={styles.voucherImage1}
            />
            <Text style={styles.voucherText}>10% OFF on next purchase</Text>
            <TouchableOpacity style={styles.redeemVoucherButton}>
              <Text style={styles.redeemVoucherText}>Redeem Now</Text>
            </TouchableOpacity>
           </View>
          <View style={styles.voucherCard}>
            <Image
              source={require('../assets/spotify.png')}
              style={styles.voucherImage2}
            />
            <Text style={styles.voucherText}>Free Trial for 3 months</Text>
            <TouchableOpacity style={styles.redeemVoucherButton}>
              <Text style={styles.redeemVoucherText}>Redeem Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.earnNowTitle}>Earn Now</Text>

      <View style={styles.earnNowContainer}>
        
        <View style={styles.earnNowCard}>
          <Image
            source={require('../assets/megaphone.png')} 
            style={styles.earnNowImage}
          />
          <View style={styles.earnNowTextContainer}>
            <Text style={styles.earnNowText}>Refer a friend</Text>
            <Text style={styles.earnNowSubtext}>Help us grow to get rewarded</Text>
          </View>
          <View style={styles.pointsBadge}>
            <Text style={styles.pointsBadgeText}>200</Text>
          </View>
        </View>
        
        
        <View style={styles.earnNowCard}>
          <Image
            source={require('../assets/target.png')} 
            style={styles.earnNowImage}
          />
          <View style={styles.earnNowTextContainer}>
            <Text style={styles.earnNowText}>Achieve your goals</Text>
            <Text style={styles.earnNowSubtext}>Accomplish goals to get rewards</Text>
          </View>
          <View style={styles.pointsBadge}>
            <Text style={styles.pointsBadgeText}>200</Text>
          </View>
        </View>
        <View style={styles.earnNowCard}>
          <Image
            source={require('../assets/rating.png')} 
            style={styles.earnNowImage}
          />
        <View style={styles.earnNowTextContainer}>
              <Text style={styles.earnNowText}>Rate your experience</Text>
              <Text style={styles.earnNowSubtext}>earn extra rewards</Text>
            </View>
            <View style={styles.pointsBadge}>
              <Text style={styles.pointsBadgeText}>300</Text>
            </View></View>
        </View>
        </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/homelogo.png')}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/explogo.png')} 
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/invlogo.png')} 
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/retlogo.png')} 
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
          source={require('../assets/goalLogo.png')}
          style={styles.footerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  // </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 100, // Add padding to ensure the content is above the footer
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 5,
    padding: 5,
    paddingRight:20,
    paddingLeft:20,
    backgroundColor: '#002663',
    borderRadius: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileText: {
    marginLeft: 10,
  },
  helloText: {
    color: '#fff',
    fontSize: 16,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconSection: {
    flexDirection: 'row',
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  headerRightIcons:{
    marginTop:10,
    marginRight:10,
  },
  balanceCard: {
    width: '85%',
    height:'30%',
    backgroundColor: '#002663',
    padding: 10,
    paddingLeft:10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    flexDirection:'column'
  },
  balanceText: {
    marginTop:1,
    fontSize: 16,
    padding:10,
    color: '#fff',
    
  },
  pointsContainer: {
      backgroundColor: '#FFC15C',
      width: 160,
      height: 160,
      borderRadius: 100,
      margin:10,
      marginTop:10,
      alignItems: 'center',
      justifyContent:'space-between',
      padding:30,
      paddingLeft:25,
      marginVertical:4,
      borderWidth:10,
      borderColor:'#FF9D00',
    },
  points: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  pointsLabel: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,

  },
  redeemButton: {
    marginTop: 0.1,
    marginLeft:10,
    backgroundColor: '#ffa500',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  redeemText: {
    color: '#fff',
    fontSize: 16,
  },
  vouchersSection: {
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
  },
  vouchersTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  vouchersSubtitle: {
    margin:5,
    marginLeft:20,
    fontSize: 14,
    color: '#ffffff',
    marginTop: 5,
  },
  vouchersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  voucherCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  voucherImage1: {
    width:100,
    height: 100,
    resizeMode: 'contain',
  },
  voucherImage2: {
    width:80,
    height: 100,
    resizeMode: 'contain',
    marginTop:10,
  },

  voucherText: {
    fontSize: 12,
    color: '#4d4f53',
    marginTop: 20,
    textAlign: 'center',
  },
  redeemVoucherButton: {
    marginTop: 10,
    backgroundColor: '#1e90ff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom:5,
    marginTop:10,
  },
  redeemVoucherText: {
    color: '#fff',
    fontSize: 14,
  },
  earnNowTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
  },
  earnNowContainer: {
    width: '90%',
    marginTop: 10,
  },
  earnNowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  earnNowImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  earnNowTextContainer: {
    flex: 1,
  },
  earnNowText: {
    fontSize: 16,
    color: '#333',
  },
  earnNowSubtext: {
    fontSize: 12,
    color: '#888',
  },
  pointsBadge: {
    backgroundColor: '#ffa500',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  pointsBadgeText: {
    color: '#fff',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerIcon: {
    width: 40,
    height: 40,
  },
  circleBalance:{
    backgroundColor: '#ffc99d',
    width: 200,
    height: 200,
    borderRadius: 100,
    margin:10,
    marginTop:1,
    padding:5,
    alignItems: 'center',
    justifyContent:'space-between',
    borderWidth:5,
    borderColor:'#FF9D00',
  },
});

export default Rewards;

