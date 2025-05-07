import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MarketplaceScreen from './screens/MarketplaceScreen';
import VendorDashboardScreen from './screens/VendorDashboardScreen';
import NearbyScreen from './screens/NearbyScreen';
import ProfileScreen from './screens/ProfileScreen';
import { AIAssistantScreen } from './screens/AIAssistantScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#2E7D32',
              tabBarInactiveTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#2E7D32',
              },
              headerTintColor: '#fff',
            }}>
            <Tab.Screen
              name="Marketplace"
              component={MarketplaceScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="store" size={26} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Nearby"
              component={NearbyScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="map-marker" size={26} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="AI Assistant"
              component={AIAssistantScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="robot" size={26} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Dashboard"
              component={VendorDashboardScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="view-dashboard" size={26} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" size={26} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}