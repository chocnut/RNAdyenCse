import {NativeModules} from 'react-native'

const {RNAdyenCse} = NativeModules

export const encrypt = (card, publicKey) => {
  const {holderName, number, cvc, expiryMonth, expiryYear} = card
  return RNAdyenCse.encrypt(
    holderName,
    number,
    cvc,
    expiryMonth,
    expiryYear,
    publicKey,
  )
}
