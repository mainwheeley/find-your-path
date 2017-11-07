import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity, Alert, TextInput, Picker, Platform, AppState} from 'react-native';
import { Constants, Notifications, Permissions } from 'expo';


async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

export default class Settings extends Component{
  constructor(props){
    global.hours = '';
    global.min = '';
    global.amORpm = '';
    super(props);
    this.state = {
      saveFlag: 0,
      hour: 1,
      minutes: 1,
      ampm: '1',
    }
  }

  _onPressDeleteAccountButton() {
    Alert.alert('Deleted Account')
  }

  _onPressLogOutButton() {
    Alert.alert('Logged Out')
  }

  changeSaveFlag = () => {
  this.setState({
    saveFlag: 1
  });
  Alert.alert('Saved');
  const localnotification = {
    title: 'Find Your Path',
    body: 'Reminder to work out',
    android: {
      sound: true,
    },
    ios: {
      sound: true,
    },
  };
  const localnotification2 = {
    title: 'Find Your Path',
    body: 'You haven\'t been working out lately! Go outside',
    android: {
      sound: true,
    },
    ios: {
      sound: true,
    },
  };

  global.flag = 1;
  var today = new Date();
  global.day = today.getDate();
  global.month = today.getMonth();
  global.year = today.getFullYear();
  global.currHour = today.getHours();
  global.currMin = today.getMinutes();
  global.hours = this.state.hour;
  global.min = this.state.minutes;
  global.amORpm = this.state.ampm;

  if(global.amORpm === 'PM'){
    if(global.hours != 12){
      global.hours = global.hours + 12;
    }
  }
  if(global.hours > global.currHour){
    console.log("OK");
  }
  else if(global.hours < global.currHour){
      console.log("Not OK");
  }
  else if(global.min > global.currMin){
    console.log("OK");
  }
  else if(global.min < global.currMin){
    console.log("Not OK");
  }

  console.log("Hour: ", global.hours);
  console.log("Minutes: ", global.min);
  console.log("AM/PM: ", global.amORpm);
  console.log("Month: ",global.month);
  console.log("Day: ", global.day);
  console.log("Year: ", global.year);
  console.log("Hour: ",global.currHour);
  console.log("Minutes: ",global.currMin);


  var date = new Date(global.year, global.month, global.day, global.hours, global.min, 0, 0);
  console.log(date);
  //var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
  //var offset = date.getTimezoneOffset() / 60;
  //var hours = date.getHours();
  //newDate.setHours(hours - offset);
  //console.log(newDate);
  let date2 = Date.now();
  date2 = date2 + 30000;
  const schedulingOptions2 = {
    time: date2,
  };
  Notifications.scheduleLocalNotificationAsync(
    localnotification2,
    schedulingOptions2
  )
  const schedulingOptions = {
    time: date,
    repeat: 'minute',
  };
  Notifications.scheduleLocalNotificationAsync(
    localnotification,
    schedulingOptions
  )
}


  listenForNotifications = () => {
    Notifications.addListener(notification => {
      if (notification.origin === 'received' && Platform.OS === 'ios') {
        Alert.alert(notification.title, notification.body);
      }
    });
  };

  componentWillMount() {
    getiOSNotificationPermission();
    this.listenForNotifications();
  }

  render() {

    return (
      <View>

        <View>
          <Text style={styles.style}>Settings</Text>
        </View>

        <Picker
          style={[styles.onePickers]} itemStyle={styles.onePickerItems}
          selectedValue={this.state.hour}
          onValueChange={(itemValue) => this.setState({hour: itemValue})}
        >
          <Picker.Item label="1" value= {1} />
          <Picker.Item label="2" value= {2} />
          <Picker.Item label="3" value= {3} />
          <Picker.Item label="4" value={4}/>
          <Picker.Item label="5" value={5} />
          <Picker.Item label="6" value={6} />
          <Picker.Item label="7" value={7} />
          <Picker.Item label="8" value={8}/>
          <Picker.Item label="9" value={9} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="11" value={11} />
          <Picker.Item label="12" value={12} />
        </Picker>

        <Picker
          style={[styles.twoPickers]} itemStyle={styles.twoPickerItems}
          selectedValue={this.state.minutes}
          onValueChange={(itemValue) => this.setState({minutes: itemValue})}
        >
          <Picker.Item label="00" value={0} />
          <Picker.Item label="01" value={1} />
          <Picker.Item label="02" value={2} />
          <Picker.Item label="03" value={3} />
          <Picker.Item label="04" value={4} />
          <Picker.Item label="05" value={5} />
          <Picker.Item label="06" value={6} />
          <Picker.Item label="07" value={7}/>
          <Picker.Item label="08" value={8}/>
          <Picker.Item label="09" value={9} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="11" value={11} />
          <Picker.Item label="12" value={12} />
          <Picker.Item label="13" value={13} />
          <Picker.Item label="14" value={14} />
          <Picker.Item label="15" value={15} />
          <Picker.Item label="16" value={16} />
          <Picker.Item label="17" value={17} />
          <Picker.Item label="18" value={18} />
          <Picker.Item label="19" value={19} />
          <Picker.Item label="20" value={20} />
          <Picker.Item label="21" value={21} />
          <Picker.Item label="22" value={22} />
          <Picker.Item label="23" value={23} />
          <Picker.Item label="24" value={24} />
          <Picker.Item label="25" value={25} />
          <Picker.Item label="26" value={26} />
          <Picker.Item label="27" value={27} />
          <Picker.Item label="28" value={28} />
          <Picker.Item label="29" value={29} />
          <Picker.Item label="30" value={30} />
          <Picker.Item label="31" value={31} />
          <Picker.Item label="32" value={32} />
          <Picker.Item label="33" value={33} />
          <Picker.Item label="34" value={34} />
          <Picker.Item label="35" value={35} />
          <Picker.Item label="36" value={36} />
          <Picker.Item label="37" value={37} />
          <Picker.Item label="38" value={38} />
          <Picker.Item label="39" value={39} />
          <Picker.Item label="40" value={40} />
          <Picker.Item label="41" value={41} />
          <Picker.Item label="42" value={42} />
          <Picker.Item label="43" value={43} />
          <Picker.Item label="44" value={44} />
          <Picker.Item label="45" value={45} />
          <Picker.Item label="46" value={46} />
          <Picker.Item label="47" value={47} />
          <Picker.Item label="48" value={48} />
          <Picker.Item label="49" value={49} />
          <Picker.Item label="50" value={50} />
          <Picker.Item label="51" value={51} />
          <Picker.Item label="52" value={52} />
          <Picker.Item label="53" value={53} />
          <Picker.Item label="54" value={54} />
          <Picker.Item label="55" value={55} />
          <Picker.Item label="56" value={56} />
          <Picker.Item label="57" value={57} />
          <Picker.Item label="58" value={58}/>
          <Picker.Item label="59" value={59} />
        </Picker>

        <Picker
          style={[styles.threePickers]} itemStyle={styles.threePickerItems}
          selectedValue={this.state.ampm}
          onValueChange={(itemValue) => this.setState({ampm: itemValue})}
        >
          <Picker.Item label="AM" value="AM" />
          <Picker.Item label="PM" value="PM" />
        </Picker>

        <TouchableOpacity onPress={this._onPressDeleteAccountButton} underlayColor="white">
          <View style={styles.buttonOne}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressLogOutButton} underlayColor="white">
          <View style={styles.buttonTwo}>
            <Text style={styles.buttonText}>Log Out</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.changeSaveFlag} underlayColor="white">
          <View style={styles.buttonThree}>
            <Text style={styles.saveButtonText}>Save Daily Notification Time</Text>
          </View>
        </TouchableOpacity>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  style: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#8FBC8F',
    padding: 20,
    fontFamily: 'Cochin',
  },
  buttonOne: {
    width: 160,
    alignItems: 'center',
    backgroundColor: '#8FBC8F',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
    bottom: -525,
    left: 200,
  },
  buttonTwo: {
    width: 160,
    alignItems: 'center',
    backgroundColor: '#8FBC8F',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
    bottom: -525,
    left: 15,
  },
  buttonThree: {
    width: 170,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#8FBC8F',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
    left: 200,
    top: 30,
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  saveButtonText: {
    padding: 0,
    color: 'white',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  onePickers: {
  width: 70,
  height: 88,
  backgroundColor: 'lightyellow',
  borderColor: 'black',
  borderWidth: 1,
  position: 'absolute',
  top: 120,
  },
  onePickerItems: {
  height: 88,
  color: 'black'
  },
  twoPickers: {
  width: 70,
  height: 88,
  backgroundColor: 'lightyellow',
  borderColor: 'black',
  borderWidth: 1,
  position: 'absolute',
  left: 71,
  top: 120,
  },
  twoPickerItems: {
  height: 88,
  color: 'black'
  },
  threePickers: {
  width: 50,
  height: 88,
  backgroundColor: 'lightyellow',
  borderColor: 'black',
  borderWidth: 1,
  position: 'absolute',
  left: 142,
  top: 120,
  },
  threePickerItems: {
  height: 88,
  color: 'black'
  },
});
