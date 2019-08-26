import React from 'react';
import { Text, View, Image } from 'react-native';
import { Content, Container, Button } from 'native-base';
import { fetchAllPastWalks } from '../store/pastWalks';
import { setActiveWalkThunk } from '../store/activeWalk';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

//TODO need to be able to dynamically get the userId
class PastWalks extends React.Component {
  constructor() {
    super();
    this.handleWalkNavigation = this.handleWalkNavigation.bind(this);
  }
  static navigationOptions = {
    title: 'Past Walks',
  };

  async componentDidMount() {
    await this.props.fetchAllPastWalks(this.props.user.id);
  }

  handleWalkNavigation(walkId) {
    this.props.setActiveWalkThunk(walkId);
    setTimeout(() => {
      this.props.navigation.navigate('Walking Map');
    }, 200);
  }

  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            {this.props.pastWalks.length ? (
              this.props.pastWalks.map(walk => {
                const type =
                  walk.category[0].toUpperCase() + walk.category.slice(1);
                return (
                  <View
                    key={walk.id}
                    style={{
                      height: 200,
                      width: '95%',
                      borderStyle: 'dashed',
                      borderWidth: 5,
                      borderColor: '#436904',
                      borderRadius: 25,
                      backgroundColor: '#b9cd74',
                      marginTop: 10,
                      marginBottom: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        padding: 10,
                        textAlign: 'center',
                      }}
                    >
                      <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                          }}
                        >
                          <Image
                            source={require('../public/thumbnails/dog.png')}
                            style={{
                              display: 'flex',
                              height: 100,
                              width: 100,
                              marginRight: 10,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            height: '90%',
                            width: '70%',
                            paddingTop: 5,
                            paddingBottom: 5,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                fontSize: 16,
                                fontFamily: 'Avenir-Heavy',
                              }}
                            >
                              {walk.name}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                fontSize: 16,
                                fontFamily: 'Avenir-Heavy',
                              }}
                            >
                              Type: {type}
                            </Text>
                          </View>
                          <View
                            style={{ display: 'flex', flexFlow: 'row-wrap' }}
                          >
                            <Text
                              style={{
                                fontSize: 16,
                                fontFamily: 'Avenir-Heavy',
                              }}
                            >
                              {walk.description}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                fontSize: 16,
                                fontFamily: 'Avenir-Heavy',
                              }}
                            >
                              Date: {walk.past_walks.createdAt}
                            </Text>
                            <Button
                              onPress={() => this.handleWalkNavigation(walk.id)}
                              style={{
                                borderRadius: '20px',
                                width: '60%',
                                justifyContent: 'center',
                              }}
                            >
                              <Text style={{ color: 'white' }}>
                                Start this Walk
                              </Text>
                            </Button>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View />
                  </View>
                );
              })
            ) : (
              <Text />
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPastWalks: userId => {
      dispatch(fetchAllPastWalks(userId));
    },
    setActiveWalkThunk: walkId => {
      dispatch(setActiveWalkThunk(walkId));
    },
  };
};

const mapStateToProps = state => {
  return {
    pastWalks: state.allPastWalks,
    user: state.user,
  };
};

PastWalks.propTypes = {
  fetchAllPastWalks: propTypes.func,
  pastWalks: propTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PastWalks);
