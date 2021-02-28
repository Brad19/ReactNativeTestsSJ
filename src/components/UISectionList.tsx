import React from 'react';
import { View, Text, SafeAreaView, SectionList, StatusBar, StyleSheet } from 'react-native';

export type SectionListRenderItem<T> = [
    {
        title: T,
        data: T[]
    }
]

export interface SectionBase<ItemT> {
    data: ReadonlyArray<ItemT>;

    key?: string;

    renderSectionHeader: (info: { section: { title: string } }) => React.ReactElement | null;

    renderItem?: SectionListRenderItem<ItemT>;

    ItemSeparatorComponent?: React.ComponentType<any> | null;

    keyExtractor?: (item: any, index: number) => string;

    ref: React.MutableRefObject<SectionList<unknown, { title: string; data: unknown[]; }>>
}

export interface SectionListData<ItemT> extends SectionBase<ItemT> {
    [key: string]: any;
}

const UISectionList: React.FC<SectionListData<{ title: string, data: unknown[] }>> = (props) => {

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const { data, keyExtractor, renderSectionHeader, ItemSeparatorComponent, ref } = props;
    return (
        <SafeAreaView>
            <View>
                <Text>Welcome to Section List page</Text>
            </View>
            <>
                { data && (
                    <SectionList
                        sections={data}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => <Item title={item} />}
                        renderSectionHeader={renderSectionHeader}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                        ref={ref}
                    />
                )

                }
            </>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});


export default UISectionList;