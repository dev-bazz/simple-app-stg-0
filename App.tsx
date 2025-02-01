import { StatusBar } from 'expo-status-bar';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMediaAndPlatform } from "./hooks";
import { Header, Heading } from "./components/text";
import { Btn } from "./components/button";
import { Image } from "expo-image";
import { images } from "./constant";

export default function App () {
  const { height, widthScaleFactor } = useMediaAndPlatform();
  console.log( 'widthScaleFactor: ', Number( widthScaleFactor ) * 400 );
  const handlePress = async ( url: string ) => {
    await Linking.openURL( url );
  };
  const btnUIw = `${ ( Number( widthScaleFactor ) * 200 ) }px`;
  return (
    <ScrollView >
      <View style={ [ styles.container, { height: height } ] }>
        <Header ws={ Number( widthScaleFactor ) }>
          <Image source={ images.profile } style={ [ { width: 80 * Number( widthScaleFactor ), height: 80 * Number( widthScaleFactor ), borderRadius: 100 } ] } />
          <Heading scale={ Number( widthScaleFactor ) }>Clement Bazuaye</Heading>
          <Text>HNG 12 Internship</Text>
          <Text>React Native Dev </Text>
        </Header>
        <Btn bg="#54428E" widthT={ btnUIw } onPress={ () => handlePress( "https://github.com/dev-bazz/simple-app-stg-0" ) }>
          <Text style={ [ { color: 'white' } ] }>GitHub repository</Text>
        </Btn>
        <Btn bg="#2274A5" widthT={ btnUIw } onPress={ () => handlePress( "https://hng.tech/hire/react-native-developers" ) }>
          <Text style={ [ { color: 'white' } ] }>React Native</Text>
        </Btn>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500
  },
} );
