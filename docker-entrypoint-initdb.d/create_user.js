// システム系のDBやコレクション以外のデータを読み書きする権限のユーザを作成
var users = [
  {
    user: 'mongo',
    pwd: 'mongo',
    roles: [
      {
        role: 'readWrite',
        db: 'mongo'
      }
    ]
  }
];

for (var i = 0, length = users.length; i < length; ++i) {
  db.createUser(users[i]);
}
