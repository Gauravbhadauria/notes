import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import CreateTable from './sqlitedatabase/manager/CreateTable';

export default class PaymentGateway extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 200,
            height: 50,
            backgroundColor: '#2623ff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image:
                'https://pbs.twimg.com/profile_images/1271385506505347074/QIc_CCEg.jpg',
              currency: 'INR',
              key: 'rzp_test_xDW5411zMEax8v', // Your api key
              amount: '100',
              name: 'foo',
              prefill: {
                email: 'gauravofficial1995@gmail.com',
                contact: '7217721985',
                name: 'Razorpay Software',
              },
              theme: {color: '#F37254'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}>
          <Text style={{color: '#fff'}}>Payment Now</Text>
        </TouchableOpacity>
        <CreateTable />
      </View>
    );
  }
}
