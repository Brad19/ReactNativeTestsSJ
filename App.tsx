/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ListRenderItem,
  TouchableOpacity
} from 'react-native';
import { push } from './src/navigation/routes';
import UITopBar from './src/components/UITopbar';
import { ProfileProps, MatchingJobsProps } from './src/types/types'

const App: () => React$Node = (props) => {

  const [profile, setProfile] = useState<ProfileProps>(null);
  const [matchingJobs, setMatchingJobs] = useState<ReadonlyArray<MatchingJobsProps>>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const [profile, matchingJobs] = await Promise.all([fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile'),
      fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches')]);

      let [profileJson, matchingJobsJson] = await Promise.all([profile.json(), matchingJobs.json()]);
      setProfile(profileJson);
      setMatchingJobs(matchingJobsJson);

    }
    fetchProfile();

  }, [])



  const onPress = (jobId: string) => {
    const filteredItem = matchingJobs.find((item) => item.jobId === jobId);
    const item = Object.assign({}, filteredItem, { firstName: profile.firstName, lastName: profile.lastName });
    push(props.componentId, 'HomeScreen', { backButton: true, item })
  };

  const renderItem: ListRenderItem<MatchingJobsProps> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item.jobId)}>
        <View style={styles.itemWrapper}>
          <View>
            <Text style={{ fontSize: 20 }}>{item.jobTitle.name}</Text>
            <Text style={{ fontSize: 30 }}>{item.company.name}</Text>
          </View>
          <View style={styles.arrowWrapper}>
            <Text style={{ textAlign: 'right', fontSize: 20 }}> {' > '} </Text>
          </View>
        </View>

      </TouchableOpacity>
    )
  }

  return (
    <>
      {
        profile && matchingJobs.length > 0 && (
          <View style={{ flex: 1 }}>
            <UITopBar accessibilityLabel={'Topbar'} firstName={profile.firstName} lastName={profile.lastName} />
            <View style={styles.body}>
              <FlatList
                data={matchingJobs}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}
                keyExtractor={(item, index) => item.jobId}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ borderWidth: 1, borderColor: 'grey' }} />}
              />
            </View>
          </View>

        )
      }
    </>
  )
};



const styles = StyleSheet.create({
  button: {
    backgroundColor: 'skyblue'
  },
  body: {
    flexGrow: 1,
    alignItems: 'center',
  },
  itemWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  arrowWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }

});

export default App;

{/* <HomeScreen componentId={'Component2'} /> */ }
{/* <StatusBar barStyle="dark-content" /> */ }
{/* <UITopBar /> */ }