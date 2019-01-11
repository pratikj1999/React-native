import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Menu',
        headerLeft:
            <View style={{ paddingLeft: 16 }}>
                <Icon
                    name="ac-unit"
                    size={30}
                    color='white'
                    onPress={() => navigation.toggleDrawer()} />
            </View>,
    });
    render() {
        const renderMenuItem = ({ item, index }) => {
            const { navigate } = this.props.navigation;

            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}
                    leftAvatar={{ source: require('./images/uthappizza.png') }}
                />
            );
        };
        return (
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }


}


export default Menu;