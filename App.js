import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>

        <View style={styles.global1}>

          <View style={styles.block1}>
            <View style={styles.block11}>
              <Image
                style={styles.image}
                source={require('./assets/like.png')}
              />

            </View>
            <Image
              style={styles.Orang}
              source={require('./assets/orange.png')}
            />
            <Text style={styles.add}>ADD</Text>
            <Text style={styles.orange}>orange                                        100fcf</Text>
          </View>
          <View style={styles.block2}>
            <View style={styles.block11}>
              <Image
                style={styles.image}
                source={require('./assets/like.png')}
              />

            </View>

            <Image
              style={styles.raisain}
              source={require('./assets/raisain.png')}
            />
            <Text style={styles.add1}>ADD</Text>
            <Text style={styles.Grape}>Grape                                        500fcf</Text>
          </View>
        </View>
        <View style={styles.global}>

          <View style={styles.block3}>
            <Text style={styles.xenter}>xender shop</Text>
            <Text style={styles.xent}>2356 Toltirican Street</Text>
            <Text style={styles.xenter}>9A.M -7P.M</Text>

          </View>
          <View style={styles.block4}>
            <Text style={styles.xenter}>xender shop</Text>
            <Text style={styles.xent}>2356 Toltirican Street</Text>
            <Text style={styles.xenter}>9A.M -7P.M</Text>


          </View>
        </View>
        <View style={styles.shop}>
          <Text style={styles.shop}>Nearby Shop</Text>

        </View>
        <View style={styles.fruits}>
          <Text style={styles.fruits}> <View style={styles.fruit}>  Orange </View>               Grape                    Pineaple               Strave</Text>

        </View>
      </View>
      <View style={styles.block5}>
        <Image
          style={styles.image}
          source={require('./assets/home.png')}
        />

      </View>
      <View style={styles.block6}>
        <Image
          style={styles.image}
          source={require('./assets/loupe.png')}
        />

      </View>
      <View style={styles.block7}>
        <Image
          style={styles.image}
          source={require('./assets/panier.png')}
        />
      </View>
      <View style={styles.block8}>
        <Image
          style={styles.image}
          source={require('./assets/personne.png')}
        />
      </View>
      <View style={styles.block9}>
        <Image
          style={styles.image}
          source={require('./assets/boutique.png')}
        />

      </View>
      <View style={styles.block10}>
        <Image
          style={styles.image}
          source={require('./assets/boutique2.png')}
        />
      </View>
      <View style={styles.discorver}>
        <Text style={styles.discover1}>Discover  Seasonal </Text>
        <Text style={styles.discover2}>Fruits  and  Vegetable </Text>

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: 2,
    borderRadius: 1,

    width: 2000,
    display: 'flex',
  },
  discover1:
  {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: -700,
    marginLeft: -300,

  },
  discover2:
  {
    fontWeight: 'bold',
    marginLeft: -300,
    fontSize: 25,
  },
  container1:
  {
    alignItems: 'center',
    justifyContent: 'center',
    height: 900,
    width: 700,
    borderColor: 'black',
    borderRadius: 1,
    backgroundColor: 'beige',
    borderRadius: 50,
    flexDirection: 'column',
    display: 'flex',
    flex: 'start',
  },
  shop:
  {
    fontSize: 20,
    marginTop: -190,
    marginLeft: -200,
  },
  xent:
  {
    marginLeft: 40,
  },
  fruits:
  {
    marginTop: -300,
    fontSize: 20,
  },
  fruit:
  {

    width: 90,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'pink',
  },
  // navbar : 
  // {
  //   gap : 20 ,
  //   display : 'flex',
  // },
  // text : 
  // {
  //  fontSize : 30 ,
  //   fontWeight : 'bold',
  // },

  block1:
  {
    borderRadius: 10,
    backgroundColor: 'pink',
    width: 300,
    height: 300,
    marginLeft: 20,
    marginBottom: -300,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

  },
  block2:
  {
    borderRadius: 10,
    backgroundColor: 'purple',
    width: 300,
    height: 300,
    marginLeft: 350,
    marginBottom: -30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  global1:
  {
    marginBottom: 100,
  },
  block3:
  {
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderColor: 'red',
    width: 300,
    height: 90,
    marginBottom: -90,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderWidth : 1 ,


  },
  block4:
  {
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderColor: 'red',
    width: 300,
    height: 90,
    marginLeft: 350,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderWidth : 1 ,
  },
  block5:
  {

    width: 100,
    height: 60,
    marginTop: -70,
    marginLeft: -500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  block6:
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 60,
    marginTop: -60,
    marginLeft: -150
  },
  block7:
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 60,
    marginTop: -60,
    marginLeft: 500,
  },
  block8:
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 60,
    marginTop: -60,
    marginLeft: 150,
  },
  block9:
  {
    marginTop: -150,
    marginLeft: -550,
    backgroundColor: 'pink',
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  block10:
  {
    marginTop: -60,
    marginLeft: 150,
    backgroundColor: 'pink',
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  block11:
  {
    marginLeft: 230,
    marginTop: -50,
  },
  global:
  {
    marginBottom: 230,

  },
  image:
  {
    width: 50,
    height: 50,
    position: 'relative',

  },
  add:
  {
    fontWeight: 'bold',
    width: 90,
    height: 25,
    borderRadius: 10,
    backgroundColor: 'beige',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: -70,

  },
  add1:
  {
    fontWeight: 'bold',
    width: 90,
    height: 25,
    borderRadius: 10,
    backgroundColor: 'violet',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: -70,
  },
  orange:
  {
    fontWeight: 'bold',
    marginBottom: 50,
    marginLeft: -10,
  },
  Grape:
  {
    fontWeight: 'bold',
    marginBottom: 30,
    marginLeft: -10,
  },
  Orang:
  {
    width: 130,
    height: 100,
    marginBottom: 60,
  },
  raisain:
  {
    width: 100,
    height: 100,
    marginBottom: 60,
  },
  xenter:
  {
    textAlign: 'center',


  },

});