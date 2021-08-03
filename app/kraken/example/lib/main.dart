import 'package:flutter/material.dart';
import 'package:kraken/kraken.dart';
import 'package:kraken_websocket/kraken_websocket.dart';
import 'package:kraken_devtools/kraken_devtools.dart';
import 'dart:ui';

void main() {
  KrakenWebsocket.initialize();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '头豹信息科技',
      home: MyBrowser(),
    );
  }
}

class MyBrowser extends StatefulWidget {
  MyBrowser({Key? key, this.title}) : super(key: key);

  final String? title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyBrowser> {

  @override
  Widget build(BuildContext context) {
    final MediaQueryData queryData = MediaQuery.of(context);
    final TextEditingController textEditingController = TextEditingController();

    Kraken? _kraken;
    AppBar appBar = AppBar();

    final Size viewportSize = queryData.size;
    return Scaffold(
        appBar: appBar,
        body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: _kraken = Kraken(
          viewportWidth: viewportSize.width - queryData.padding.horizontal,
          viewportHeight: viewportSize.height - appBar.preferredSize.height - queryData.padding.vertical,
          bundlePath: 'dist/js/app.js',
          devToolsService: ChromeDevToolsService(),
        ),
    ));
  }
}
