#import <Flutter/Flutter.h>

#define NAME_METHOD_SPLIT @"!!"

@interface KrakenPlugin : NSObject<FlutterPlugin>

@property NSObject<FlutterPluginRegistrar> *registrar;

- (instancetype) initWithRegistrar: (NSObject<FlutterPluginRegistrar>*)registrar;

+ (FlutterMethodChannel *) getMethodChannel;

@end
