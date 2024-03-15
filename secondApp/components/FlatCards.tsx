import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FlatCards() {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>FlatCards</Text>
      </View>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>

      <Text style={styles.headingText}>Scrollable Cards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
          </View>
        </View>
      </ScrollView>

      <Text style={styles.headingText}>Images</Text>
      <Image
        source={{
          uri: 'https://t4.ftcdn.net/jpg/01/32/61/93/360_F_132619387_pOcjcRMZ49pus3YR4SDKN7zNsiTmJOVy.jpg',
        }}
        style={styles.imageBox}></Image>

      <Text style={styles.headingText}>Links</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/01/32/61/93/360_F_132619387_pOcjcRMZ49pus3YR4SDKN7zNsiTmJOVy.jpg',
            }}
            style={styles.imageBox}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          openWebsite('https://reactnative.dev/docs/touchablenativefeedback')
        }}>
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/01/32/61/93/360_F_132619387_pOcjcRMZ49pus3YR4SDKN7zNsiTmJOVy.jpg',
            }}
            style={styles.imageBox}></Image>
        </TouchableOpacity>

        <Image
          source={{
            uri: 'https://t4.ftcdn.net/jpg/01/32/61/93/360_F_132619387_pOcjcRMZ49pus3YR4SDKN7zNsiTmJOVy.jpg',
          }}
          style={styles.imageBox}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 2,
    flex: 0,
    // alignItems:'center',
    // justifyContent:'center'
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    height: 50,
    width: 50,
    objectFit: 'fill',
    margin: 10,
  },
});
