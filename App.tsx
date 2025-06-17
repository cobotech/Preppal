import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import WelcomeMessage from './components/WelcomeMessage'; // ここを追加！

export default function App() {
  return (
    <View style={styles.container}>
      {/* ここに WelcomeMessage コンポーネントを配置します */}
      <WelcomeMessage userName="オーナー" appName="Preppal" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});