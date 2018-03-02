
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

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNAdyenCse.sln` in `node_modules/react-native-adyen-cse/windows/RNAdyenCse.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Adyen.Cse.RNAdyenCse;` to the usings at the top of the file
  - Add `new RNAdyenCsePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNAdyenCse from 'react-native-adyen-cse';

// TODO: What to do with the module?
RNAdyenCse;
```
  