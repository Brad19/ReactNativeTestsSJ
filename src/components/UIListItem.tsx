import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const UIRenderItem: React.FC<{ children: React.ReactNode; isRightIcon?: boolean; isLastItem?: boolean }> = ({ children, isRightIcon = false, isLastItem = false }) => {
    return (<View style={styles.content}>
        <View style={styles.wrapper}>
            <Text style={styles.icon}>X</Text>
            <View style={styles.itemText}>
                {children}
            </View>
            {
                isRightIcon && (
                    <View style={styles.rightIcon}>
                        <Text style={[styles.icon]}>X</Text>
                    </View>
                )
            }
        </View>
        {
            !isLastItem && <View style={styles.divider} />
        }

    </View>)
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 5,
        borderRadius: 5,
    },
    wrapper: {
        flexDirection: 'row'
    },
    icon: {
        alignSelf: 'center'
    },
    itemText: {
        padding: 10
    },
    divider: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginTop: 10
    },
    rightIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default UIRenderItem;