import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Animated,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
  
  import { FontAwesome } from "@expo/vector-icons";
  
  import {
    markers,
    mapDarkStyle,
    mapStandardStyle,
  } from "./component/constans";
  
  import { useTheme } from "@react-navigation/native";
  import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
  
  const { width, height } = Dimensions.get("window");
  const CARD_HEIGHT = 220;
  const CARD_WIDTH = width * 0.8;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
  
  const MapExemple = ({ navigation }: any, { route }: any) => {
    const [categoriesMarker, setCategoriesMarker] = useState<any>(markers);
    const [data, setData] = useState<any>(markers);
    const [filterData, setFilterData] = useState<any>(markers);
  
    useEffect(() => {
      setData(filterData);
    }, []);
  
    const searchFilterFunction = (text: any) => {
      if (text) {
        const newData = data.filter((item: any) => {
          const itemData = item.title
            ? item.title.toUpperCase()
            : "".toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);
      } else {
        setFilterData(data);
      }
    };
  
    //Animation Marker
    useEffect(() => {
      mapAnimation.addListener(({ value }) => {
        let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
        if (index >= state.categoriesMarker.length) {
          index = state.categoriesMarker.length - 1;
        }
        if (index <= 0) {
          index = 0;
        }
  
        const regionTimeout = setTimeout(() => {
          if (mapIndex !== index) {
            mapIndex = index;
            const { coordinate } = state.categoriesMarker[index];
            mapRef.current.animateToRegion(
              {
                ...coordinate,
                latitudeDelta: state.region.latitudeDelta,
                longitudeDelta: state.region.longitudeDelta,
              },
              350
            );
          }
        }, 10);
        clearTimeout(regionTimeout);
      });
    });
  
    //marker picture
    const CardMarkers = () => {
      return (
        <>
          {filterData.map((marker: any, index: any) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>
                  {marker.title}
                </Text>
                <View style={styles.button}>
                  <TouchableOpacity
                    style={[
                      styles.signIn,
                      {
                        borderColor: "#01723f",
                        borderWidth: 1,
                        marginTop: 15
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: "#01723f",
                        },
                      ]}
                      onPress={() => navigation.navigate("EcoPlace", {
                        name: marker.name,
                        description: marker.description,
                        img: marker.image
                      })}
                    >
                      Читати далі
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </>
      );
    };
  
    // marker location
    const ListPlace = () => {
      return (
        <>
          {filterData.map((marker: any, index: number) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            return (
              <Marker
                key={index}
                coordinate={marker.coordinate}
                onPress={(e: any) => onMarkerPress(e)}
              >
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.Image
                    source={{
                      uri: "https://icon-library.com/images/google-map-location-icon/google-map-location-icon-20.jpg",
                    }}
                    style={[styles.marker, scaleStyle]}
                    resizeMode="cover"
                  />
                </Animated.View>
              </Marker>
            );
          })}
        </>
      );
    };
  
    // const categories
    const initialMapState = {
      categoriesMarker,
      region: {
        latitude: 50.44733397947488,
        longitude: 30.53687699799483,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
    };
  
    const [state, setState] = React.useState(initialMapState);
  
    // Animation value
    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);
  
    // event of marker
    useEffect(() => {
      mapAnimation.addListener(({ value }) => {
        let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
        if (index >= state.categoriesMarker.length) {
          index = state.categoriesMarker.length - 1;
        }
        if (index <= 0) {
          index = 0;
        }
  
        const regionTimeout = setTimeout(() => {
          if (mapIndex !== index) {
            mapIndex = index;
            const { coordinate } = state.categoriesMarker[index];
            mapRef.current.animateToRegion(
              {
                ...coordinate,
                latitudeDelta: state.region.latitudeDelta,
                longitudeDelta: state.region.longitudeDelta,
              },
              350
            );
          }
        }, 10);
        clearTimeout(regionTimeout);
      });
    });
  
    // categories looking on the picture
    const interpolations = state.categoriesMarker.map(
      (marker: any, index: number) => {
        const inputRange = [
          (index - 1) * CARD_WIDTH,
          index * CARD_WIDTH,
          (index + 1) * CARD_WIDTH,
        ];
  
        const scale = mapAnimation.interpolate({
          inputRange,
          outputRange: [1, 1.5, 1],
          extrapolate: "clamp",
        });
  
        return { scale };
      }
    );
  
    // animation card
    const onMarkerPress = (mapEventData: any) => {
      const markerID = mapEventData._targetInst.return.key;
  
      let x = markerID * CARD_WIDTH + markerID * 20;
      if (Platform.OS === "ios") {
        x = x - SPACING_FOR_CARD_INSET;
      }
  
      scrollViewRef.current.scrollTo({ x: x, y: 0, animated: true });
    };
  
    // const for card
    const mapRef = React.useRef<any>(null);
    const scrollViewRef = useRef<any>(null);
  
    return (
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          initialRegion={state.region}
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStandardStyle}
        >
          <ListPlace />
        </MapView>
        <View
          style={styles.searchBox}
        >
          <TextInput
            placeholder="Шукати"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={{ height: 20, width: "90%", padding: 0, marginLeft: 8 }}
            onChangeText={(event) => {
              searchFilterFunction(event);
            }}
          />
          <FontAwesome name="search" size={20} />
        </View>
        <Animated.ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + 20}
          snapToAlignment="center"
          style={styles.scrollView}
          contentInset={{
            top: 0,
            left: SPACING_FOR_CARD_INSET,
            bottom: 0,
            right: SPACING_FOR_CARD_INSET,
          }}
          contentContainerStyle={{
            paddingHorizontal:
              Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: mapAnimation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          <CardMarkers />
        </Animated.ScrollView>
      </View>
    );
  };
  
  export default MapExemple;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchBox: {
      position: "absolute",
      marginTop: Platform.OS === "ios" ? 40 : 40,
      flexDirection: "row",
      backgroundColor: "#fff",
      width: "90%",
      alignSelf: "center",
      borderRadius: 5,
      padding: 10,
      shadowColor: "#ccc",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    chipsScrollView: {
      position: "absolute",
      top: Platform.OS === "ios" ? 90 : 100,
      paddingHorizontal: 10,
    },
    chipsIcon: {
      marginRight: 5,
    },
    chipsItem: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 8,
      paddingHorizontal: 20,
      marginHorizontal: 10,
      height: 35,
      shadowColor: "#ccc",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    scrollView: {
      position: "absolute",
      bottom: 90,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      // padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { width: 2, height: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      // marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
    },
    marker: {
      width: 30,
      height: 30,
    },
    button: {
      alignItems: "center",
      marginTop: 5,
    },
    signIn: {
      width: "100%",
      padding: 5,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
    },
    textSign: {
      fontSize: 14,
      fontWeight: "bold",
    },
  });
  