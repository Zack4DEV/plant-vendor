import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, DataTable, Button } from 'react-native-paper';

const MOCK_STATS = {
  totalSales: '$1,234',
  activeListings: 15,
  pendingOrders: 3,
};

const MOCK_RECENT_ORDERS = [
  { id: 1, customer: 'John Doe', item: 'Monstera', status: 'Pending', price: '$45' },
  { id: 2, customer: 'Jane Smith', item: 'Snake Plant', status: 'Shipped', price: '$25' },
  { id: 3, customer: 'Bob Wilson', item: 'Fiddle Leaf', status: 'Delivered', price: '$65' },
];

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.statsContainer}>
        <Card style={styles.statsCard}>
          <Card.Content>
            <Title>Sales</Title>
            <Paragraph>{MOCK_STATS.totalSales}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.statsCard}>
          <Card.Content>
            <Title>Listings</Title>
            <Paragraph>{MOCK_STATS.activeListings}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.statsCard}>
          <Card.Content>
            <Title>Orders</Title>
            <Paragraph>{MOCK_STATS.pendingOrders}</Paragraph>
          </Card.Content>
        </Card>
      </View>

      <Card style={styles.ordersCard}>
        <Card.Content>
          <Title>Recent Orders</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Customer</DataTable.Title>
              <DataTable.Title>Item</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
              <DataTable.Title numeric>Price</DataTable.Title>
            </DataTable.Header>

            {MOCK_RECENT_ORDERS.map((order) => (
              <DataTable.Row key={order.id}>
                <DataTable.Cell>{order.customer}</DataTable.Cell>
                <DataTable.Cell>{order.item}</DataTable.Cell>
                <DataTable.Cell>{order.status}</DataTable.Cell>
                <DataTable.Cell numeric>{order.price}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card.Content>
      </Card>

      <View style={styles.actionButtons}>
        <Button mode="contained" style={styles.button} icon="plus">
          Add New Listing
        </Button>
        <Button mode="outlined" style={styles.button} icon="cog">
          Manage Inventory
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statsCard: {
    flex: 1,
    marginHorizontal: 4,
  },
  ordersCard: {
    marginBottom: 16,
  },
  actionButtons: {
    gap: 8,
  },
  button: {
    marginBottom: 8,
  },
});