import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// WelcomeMessage コンポーネントのProps（プロパティ）の型を定義します
// このコンポーネントに渡すことができるデータの種類と名前をTypeScriptで指定します
interface WelcomeMessageProps {
  userName: string; // ユーザーの名前（文字列）
  appName: string;  // アプリケーションの名前（文字列）
}

// WelcomeMessage コンポーネントを定義します
// ここで定義したPropsの型を <WelcomeMessageProps> として指定することで、
// 渡されるデータが正しい型であるかをTypeScriptがチェックしてくれます。
const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ userName, appName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>
        こんにちは、{userName}さん！
      </Text>
      <Text style={styles.appNameText}>
        {appName}へようこそ！
      </Text>
    </View>
  );
};

// スタイルを定義します
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  appNameText: {
    fontSize: 18,
    color: '#666',
  },
});

// このコンポーネントを他のファイルから使えるようにエクスポートします
export default WelcomeMessage;