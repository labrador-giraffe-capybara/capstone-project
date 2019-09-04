import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Modal, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { Form, Item, Picker, Icon, Button } from 'native-base';
import { AntDesign, SimpleLineIcons } from 'react-native-vector-icons';
import {
  getAllAttractionsThunk,
  getAttractionsByTagThunk,
} from '../store/attractions';

function AttractionsMap(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickerPlaceholder, setPickerPlaceholder] = useState('Filter by tag');
  useEffect(() => {
    props.getAllAttractions();
  }, []);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handlePicker = e => {
    setPickerPlaceholder(e);
    e = e.toLowerCase();
    if (e === 'all attractions') {
      props.getAllAttractions();
    } else {
      props.getAttractionsByTag(e);
    }
  };

  const pinColor = coord => {
    if (coord.category === 'architecture') {
      return '#478FCD';
    }
    if (coord.category === 'nature') {
      return '#5fAD46';
    }
    if (coord.category === 'art and museums') {
      return 'violet';
    }
    if (coord.category === 'historical') {
      return 'tomato';
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        <View style={{ display: 'flex', flexDirection: 'column', margin: 50 }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Avenir-Heavy',
                justifyContent: 'center',
                marginTop: 50,
              }}
            >
              Filter by tag to see the types of attractions nearby.
            </Text>
            <View
              style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}
            >
              <SimpleLineIcons
                name="location-pin"
                size={25}
                color="#478FCD"
                style={{ padding: 5 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Avenir-Heavy',
                  paddingTop: 5,
                }}
              >
                Architecture
              </Text>
            </View>
            <View
              style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}
            >
              <SimpleLineIcons
                name="location-pin"
                size={25}
                color="#5fAD46"
                style={{ padding: 5 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Avenir-Heavy',
                  paddingTop: 5,
                }}
              >
                Nature
              </Text>
            </View>
            <View
              style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}
            >
              <SimpleLineIcons
                name="location-pin"
                size={25}
                color="violet"
                style={{ padding: 5 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Avenir-Heavy',
                  paddingTop: 5,
                }}
              >
                Art and Museums
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              <SimpleLineIcons
                name="location-pin"
                size={25}
                color="tomato"
                style={{ padding: 5 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Avenir-Heavy',
                  paddingTop: 5,
                }}
              >
                Historical
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Button
              style={{ justifyContent: 'center', borderRadius: 20 }}
              onPress={closeModal}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: 'white',
                  fontFamily: 'Avenir-Heavy',
                }}
              >
                Close
              </Text>
            </Button>
          </View>
        </View>
      </Modal>
      <MapView
        provider="google"
        showsUserLocation={true}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 41.895442,
          longitude: -87.638957,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
          }}
        >
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                iosHeader="Filter"
                placeholder={pickerPlaceholder}
                style={{ width: undefined }}
                onValueChange={handlePicker}
              >
                <Picker.Item label="All Tags" value="All Tags" />
                <Picker.Item label="Architecture" value="architecture" />
                <Picker.Item label="Art and Museums" value="art and museums" />
                <Picker.Item label="Historical" value="historical" />
                <Picker.Item label="Nature" value="nature" />
              </Picker>
            </Item>
          </Form>
          <AntDesign
            name="questioncircleo"
            size={27}
            color="black"
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              width: 325,
              paddingTop: 8,
              paddingBottom: 7,
              paddingLeft: 250,
              left: 90,
            }}
            onPress={openModal}
          />
        </View>

        {props.attractions.length
          ? props.attractions.map(coord => {
              return (
                <Marker
                  key={coord.id}
                  title={coord.name}
                  description={coord.description}
                  pinColor={pinColor(coord)}
                  coordinate={{
                    longitude: coord.location.coordinates[1],
                    latitude: coord.location.coordinates[0],
                  }}
                />
              );
            })
          : null}
      </MapView>
    </SafeAreaView>
  );
}

AttractionsMap.navigationOptions = {
  title: 'Nearby Attractions',
};

const mapState = state => {
  return {
    attractions: state.attractions,
  };
};

const mapDispatch = dispatch => {
  return {
    getAllAttractions: () => dispatch(getAllAttractionsThunk()),
    getAttractionsByTag: tag => dispatch(getAttractionsByTagThunk(tag)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(AttractionsMap);
