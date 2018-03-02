
#import "RNAdyenCse.h"
#import "AdyenCSE/AdyenCSE.h"

@implementation RNAdyenCse

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(encrypt:(NSString *)holderName number:(NSString *)number cvc:(NSString *)cvc expiryMonth:(NSString *)expiryMonth expiryYear:(NSString *)expiryYear publickey:(NSString *)publicKey resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    @try {
        ADYCard *card = [ADYCard new];
        card.generationtime = [NSDate new];
        card.number = number;
        card.holderName = holderName;
        card.cvc = cvc;
        card.expiryMonth = expiryMonth;
        card.expiryYear = expiryYear;
        
        NSData *cardData = [card encode];
        NSString *encryptedCard = [ADYEncrypter encrypt:cardData publicKeyInHex:publicKey];
        resolve(encryptedCard);
    } @catch(NSException *exception) {
        NSError *error = nil;
        reject(@"adyen_error", @"failed to encrypt", error);
    }
}

@end
  
