import { StyleSheet, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Navbar from './Navbar';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Navbar />
      </View>
    </ApolloProvider>
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
