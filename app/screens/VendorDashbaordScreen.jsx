import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, List, Card, Title, Button, Divider } from 'react-native-paper';

const MOCK_USER = {
  name: 'Sarah Green',
  email: 'sarah@example.com',
  type: 'Vendor',
  joinDate: 'Member since Jan 2024',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
};

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={80} source={{ uri: MOCK_USER.avatar }} />
        <Title style={styles.name}>{MOCK_USER.name}</Title>
        <Button mode="contained" style={styles.editButton}>
          Edit Profile
        </Button>
      </View>

      <Card style={styles.infoCard}>
        <Card.Content>
          <List.Item
            title="Email"
            description={MOCK_USER.email}
            left={props => <List.Icon {props} icon="email" />}
          />
          <Divider />
          <List.Item
            title="Account Type"
            description={MOCK_USER.type}
            left={props => <List.Icon {props} icon="account" />}
          />
          <Divider />
          <List.Item
            title="Member Since"
            description={MOCK_USER.joinDate}
            left={props => <List.Icon {props} icon="calendar" />}
          />
        </Card.Content>
      </Card>

      <View style={styles.menuSection}>
        <List.Section>
          <List.Subheader>Settings</List.Subheader>
          <List.Item
            title="Notifications"
            left={props => <List.Icon {props} icon="bell" />}
            right={props => <List.Icon {props} icon="chevron-right" />}
          />
          <List.Item
            title="Payment Methods"
            left={props => <List.Icon {props} icon="credit-card" />}
            right={props => <List.Icon {props} icon="chevron-right" />}
          />
          <List.Item
            title="Address Book"
            left={props => <List.Icon {props} icon="map-marker" />}
            right={props => <List.Icon {props} icon="chevron-right" />}
          />
          <List.Item
            title="Help & Support"
            left={props => <List.Icon {props} icon="help-circle" />}
            right={props => <List.Icon {props} icon="chevron-right" />}
          />
        </List.Section>
      </View>

      <Button
        mode="outlined"
        style={styles.logoutButton}
        icon="logout"
        onPress={() => {}}>
        Log Out
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    marginTop: 10,
    marginBottom: 5,
  },
  editButton: {
    marginTop: 10,
  },
  infoCard: {
    margin: 16,
  },
  menuSection: {
    backgroundColor: '#fff',
    marginTop: 16,
  },
  logoutButton: {
    margin: 16,
  },
});