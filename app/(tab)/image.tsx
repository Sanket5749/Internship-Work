import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  useColorScheme,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useMemo, useState } from "react";

const imageGallery = [
  {
    id: 1,
    url: "https://tse4.mm.bing.net/th/id/OIP.-wtRKCICcILF5WqJLjODxgHaED?pid=Api&P=0&h=180",
  },
  {
    id: 2,
    url: "https://tse2.mm.bing.net/th/id/OIP.roHntiwsK2sQ73ICkLPmaAHaE8?pid=Api&P=0&h=180",
  },
  {
    id: 3,
    url: "https://tse3.mm.bing.net/th/id/OIP.s9Irf5fq-UcGQBprEeOOGQHaE6?pid=Api&P=0&h=180",
  },
  {
    id: 4,
    url: "https://tse3.mm.bing.net/th/id/OIP.qYCUWrXU149uQhB8FwKzcwHaE8?pid=Api&P=0&h=180",
  },
  {
    id: 5,
    url: "http://www.highreshdwallpapers.com/wp-content/uploads/2014/03/Sleek-and-Sexy-HD-Sports-Car-1280x960.jpg",
  },
  {
    id: 6,
    url: "https://img.lovepik.com/photo/48007/1949.jpg_wh860.jpg",
  },
];

const ImageGallery = () => {
  const colorScheme = useColorScheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const theme = useMemo(
    () => ({
      backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#ffffff",
      borderColor: colorScheme === "dark" ? "#333333" : "#dddddd",
      imageBackground: colorScheme === "dark" ? "#333333" : "#f5f5f5",
    }),
    [colorScheme]
  );

  const handlePress = (id: number) => {
    alert(`Image ${id} pressed`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.imageContainer,
        { backgroundColor: theme.imageBackground },
      ]}
      onPress={() => handlePress(item.id)}
    >
      <Image
        source={{ uri: item.url }}
        style={[styles.img, { borderColor: theme.borderColor }]}
      />
    </TouchableOpacity>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          data={imageGallery}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          style={{ backgroundColor: theme.backgroundColor }}
        />
      </ScrollView>
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 8,
  },
  imageContainer: {
    flex: 1,
    margin: 6,
    borderRadius: 12,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
  },
});
