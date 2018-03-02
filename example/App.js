/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'
import {encrypt} from 'react-native-adyen-cse'

const publicKey =
  '10001|B772DDC11EC6D05BBCF567CA406A074AEFDEB26735D64D95678EFA7C611B7B267C9C799C09D32C33A0668B840D420C57C727A2B01DA10E4E312FF6E3DA4F15D66E02B3445D1F7E874088D73EF5E0D000E8B3DDFA3A63396655A4B6BD0348BD4C3496DCB21F295263AA1DED211F452CB6BBD6DE0CB875D058E3487FB57D3AA0942A0C88FFA729A2A5C9BEA66DF9DB9DDF9EEDB599A5188EF2EACF05D4B02CB5396221F44230AC3B05F01FC151150205ECD86407135BE2813AFF8C170638B56B5F1A22FBE5E530C35797CA5DF413DD5F0E2A56508F49997F31EF1F35DE9185C1D348C4E343F84425090D8F12EB632FAC8063B1418ED0C542406322E9625EA819B3'

async function testCardDetailsEncrypt() {
  const card = {
    holderName: 'John Doe',
    number: '4111111111111111',
    cvc: '737',
    expiryMonth: '08',
    expiryYear: '2018',
  }

  const token = await encrypt(card, publicKey)
  return token
}

export default class App extends Component {
  state = {
    encryptedCard: '',
  }

  handleBtnClick = () => {
    testCardDetailsEncrypt().then(encryptedCard =>
      this.setState({encryptedCard}),
    )
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'space-around',
          }}>
          <Button
            title="Test AdYen CSE"
            onPress={() => this.handleBtnClick()}
          />
        </View>
        <Text style={{color: 'black', fontSize: 16}}>
          {this.state.encryptedCard}
        </Text>
      </View>
    )
  }
}
