import { Text, View, StyleSheet } from "react-native";
import Post from '../../components/post'

export default function Main_tab() {
  const text = "Non posum ire. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus velit vitae urna fermentum, ac eleifend sem laoreet. Maecenas at lorem quis arcu dictum commodo. Integer bibendum."


  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text>nashe</Text>
      </View>
      <View style={styles.postsContainer}>
        <Post 
        username="donpa" date= "24/9/2024" header="Impresora rota" content={text}
        backgroundColor='#ffce91' borderColor='orange'></Post>
        <Post 
        username="minivice" date= "24/9/2024" header="Rugby" content={text + text + text}
        backgroundColor='#ffce91' borderColor='orange'></Post>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    top: '5%',
    flexDirection:'column'
  },
  header: {
    flex:1,
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    alignSelf: 'center',
    backgroundColor:'lightgreen'
  },
  postsContainer: {
    flex: 15,
    flexDirection: 'column-reverse',
    overflow:'hidden',
    alignItems:'center',
    width: '100%',
    marginBottom: '20%'
  }
});
