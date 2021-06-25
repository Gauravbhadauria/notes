import React, {Component} from 'react';
import SQLite from 'react-native-sqlite-storage';
import {Alert} from 'react-native';
import {localDb} from '../constants/Constants';
export default class CreateTable extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var db = SQLite.openDatabase(
      localDb.dbName,
      '1.0',
      'reactDemo database',
      200000,
      this.openCB,
      this.errorCB,
    );

    db.transaction(function (txt) {
      txt.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          localDb.tableName.tblLogin +
          ' (id INTEGER PRIMARY KEY AUTOINCREMENT,date TEXT,user_id INTEGER,code TEXT,session_token TEXT)',
        [],
      );
      Alert.alert('database created successfully');
    });
  }
  openCB() {
    console.log('database opened');
  }
  errorCB(err) {
    console.log('SQL err ' + err);
  }
  render() {
    return null;
  }
}
