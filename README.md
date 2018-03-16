
# react-native-adyen-cse

## Getting started

`$ npm install react-native-adyen-cse --save`

### Mostly automatic installation

`$ react-native link react-native-adyen-cse`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-adyen-cse` and add `RNAdyenCse.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAdyenCse.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNAdyenCsePackage;` to the imports at the top of the file
  - Add `new RNAdyenCsePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-adyen-cse'
  	project(':react-native-adyen-cse').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-adyen-cse/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-adyen-cse')
  	```
## Usage
```javascript
import {encrypt} from 'react-native-adyen-cse'

const publicKey = '1001|...'
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

testCardDetailsEncrypt().then(encryptedCard =>
  this.setState({encryptedCard}),
)
