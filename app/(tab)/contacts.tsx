import React, { useEffect, useState, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import * as Contacts from "expo-contacts";

export default function ContactsScreen() {
  const colorScheme = useColorScheme();
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  const theme = useMemo(() => ({
    backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
    textColor: colorScheme === 'dark' ? '#ffffff' : '#333333',
    secondaryTextColor: colorScheme === 'dark' ? '#b0b0b0' : '#666666',
    separatorColor: colorScheme === 'dark' ? '#333333' : '#eeeeee',
    itemBackground: colorScheme === 'dark' ? '#2d2d2d' : '#ffffff',
    errorColor: colorScheme === 'dark' ? '#ff6b6b' : '#dc3545',
  }), [colorScheme]);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
          });
          if (data.length > 0) {
            const filteredContacts = data.filter(
              (contact) => contact.name && contact.name !== "null null"
            );
            setContacts(filteredContacts);
          }
        } else {
          setError("Permission to access contacts was denied");
        }
      } catch (err) {
        setError("Error fetching contacts");
        console.error(err);
      }
    })();
  }, []);

  const renderContact = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.contactItem,
        { backgroundColor: theme.itemBackground }
      ]}
    >
      <Text style={[styles.contactName, { color: theme.textColor }]}>
        {item.name}
      </Text>
      {item.phoneNumbers && item.phoneNumbers[0] && (
        <Text style={[styles.phoneNumber, { color: theme.secondaryTextColor }]}>
          {item.phoneNumbers[0].number}
        </Text>
      )}
    </TouchableOpacity>
  );

  if (error) {
    return (
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.error, { color: theme.errorColor }]}>
          {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={[styles.separator, { backgroundColor: theme.separatorColor }]} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactItem: {
    padding: 16,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "600",
  },
  phoneNumber: {
    fontSize: 14,
    marginTop: 4,
  },
  separator: {
    height: 1,
  },
  error: {
    textAlign: "center",
    marginTop: 20,
    padding: 16,
  },
});
