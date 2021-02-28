import React from 'react';
import { format } from 'date-fns';
import { Navigation } from 'react-native-navigation';
import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity, ScrollView, SectionList } from 'react-native';
import UITopBar from '../components/UITopbar';
import UIListItem from '../components/UIListItem';

import { MatchingJobsProps } from '../types/types';


const HomeScreen: React.FC<{ componentId: string, data: readonly [{ backButton: true, item: MatchingJobsProps & { firstName: string, lastName: string } }] }> = (props) => {
    const { backButton } = props.data[0];
    const { firstName, lastName, jobTitle, company, milesToTravel, wagePerHourInCents, shifts } = props.data[0].item;
    return (
        <>
            <UITopBar firstName={firstName} lastName={lastName} componentId={props.componentId} isBackButton={backButton} />
            <ScrollView
                style={{ backgroundColor: 'rgb(208, 217, 214)' }}
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEventThrottle={16}
            >
                <View style={styles.container}>
                    <View style={styles.body}>
                        {jobTitle.imageUrl &&
                            <Image
                                style={styles.image}
                                source={{
                                    uri: jobTitle.imageUrl
                                }}
                            />
                        }
                        <View style={styles.content}>
                            <Text style={styles.jobTitle}>
                                {jobTitle.name}
                            </Text>
                            <Text style={styles.company}>
                                {company.name}
                            </Text>
                        </View>
                        <View style={styles.distance}>
                            <View>
                                <Text style={styles.distanceTitle}>Distance</Text>
                                <Text style={styles.milesAndCents}>{`${milesToTravel} miles`}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
                                <Text style={styles.distanceTitle}>Hourly Rate</Text>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={styles.dollars}>$</Text>
                                    <Text style={[styles.milesAndCents, { textAlign: 'right' }]}>{`${parseInt(wagePerHourInCents) / 100} `}</Text>
                                </View>

                            </View>
                        </View>
                        {
                            shifts.length > 0 &&
                            <UIListItem>
                                <>
                                    <Text style={{ fontSize: 15, fontWeight: '600' }}>Shift Dates</Text>
                                    {shifts.map((item) => {
                                        return (
                                            <Text>{`${format(new Date(item.startDate).getMonth(), 'MMM')} ${format(new Date(item.startDate).getDate(), "hh:mm a")} - Value Not available`}</Text>
                                        )
                                    })}
                                </>
                            </UIListItem>
                        }
                        <UIListItem isRightIcon={true}>
                            <>
                                <Text style={{ fontSize: 15, fontWeight: '600' }}>Location</Text>
                                <Text>{company.address.formattedAddress}</Text>
                                <Text>{`${parseFloat(milesToTravel).toFixed(1)} miles from your job search location`}</Text>
                            </>
                        </UIListItem>
                        <UIListItem>
                            <>
                                <Text style={styles.itemTitle}>Requirements</Text>
                                <Text>- Safety Vest</Text>
                                <Text>- Hard hat</Text>
                            </>
                        </UIListItem>
                        <UIListItem isLastItem={true}>
                            <>
                                <Text style={styles.itemTitle}>Report To</Text>
                                <Text>{company.reportTo.name} </Text>
                                <Text>{company.reportTo.phone}</Text>
                            </>
                        </UIListItem>

                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>No Thanks</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.button, { backgroundColor: 'black' }]}>
                                    <Text style={[styles.buttonText, { color: 'white' }]}>I'll Take it</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View >
            </ScrollView >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(208, 217, 214)',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    statusbar: {
        position: 'absolute',
        height: 50,
    },
    body: {
        flexShrink: 1,
        backgroundColor: 'white',
        borderRadius: 5
    },
    image: {
        width: Dimensions.get('window').width - 40,
        height: 200,
        borderRadius: 5
    },
    content: {
        padding: 20,
    },
    jobTitle: {
        fontSize: 25,
        fontWeight: '700'
    },
    company: {
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 5,
    },
    distance: {
        paddingTop: 10,
        backgroundColor: 'rgb(52, 235, 186)',
        height: 75,
        flexDirection: 'row',
        paddingLeft: 20,
    },
    distanceTitle: {
        fontSize: 12,
        fontWeight: '600'
    },
    dollars: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        paddingTop: 2,
    },
    milesAndCents: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
        paddingTop: 2,
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '600'
    },
    button: {
        width: (Dimensions.get('window').width / 2) - 45,
        height: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonWrapper: {
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
    },
    buttonText: {
        color: 'lightgrey',
        textAlign: 'center',
        fontSize: 20,
    }
});

export default HomeScreen;