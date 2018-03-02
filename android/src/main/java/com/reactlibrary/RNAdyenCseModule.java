
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import adyen.com.adyencse.encrypter.exception.EncrypterException;

import adyen.com.adyencse.pojo.Card;
import java.util.Date;

public class RNAdyenCseModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNAdyenCseModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNAdyenCse";
  }

  @Override
  public boolean canOverrideExistingModule() {
      return true;
  }

  @ReactMethod
  public void encrypt(String holderName, String number, String cvc, String expiryMonth, String expiryYear,
                      String publicKey, Promise promise) {

      Card card = new Card.Builder()
              .setHolderName(holderName)
              .setCvc(cvc)
              .setExpiryMonth(expiryMonth)
              .setExpiryYear(expiryYear)
              .setGenerationTime(new Date())
              .setNumber(number)
              .build();

      try {
          String encryptedCard = card.serialize(publicKey);
          promise.resolve(encryptedCard);
      } catch (EncrypterException e) {
          promise.reject("RN_ADYEN_CSE_ERROR", e);
      }
  }
}
