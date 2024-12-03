import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.profileBox}>
      <Text></Text>

      <Image
        source={{
          uri: "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png",
        }}
        style={{ width: 70, height: 70 }}
      />

      <Text style={styles.username}>Wahab</Text>
      <Text style={styles.location}>Kuwait</Text>
      <View style={styles.stats}>
        <View style={styles.box}>
          <Text style={styles.numberStatus}>1000</Text>
          <Text style={styles.indicator}>Followers</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.numberStatus}>500</Text>
          <Text style={styles.indicator}>Likes</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.numberStatus}>200</Text>
          <Text style={styles.indicator}>Photos</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileBox: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 300,
    width: 300,
    backgroundColor: "#f9f4ef",
    flexDirection: "column",
    borderRadius: 16,
    padding: 20,
  },

  username: {
    // padding: 10,
    color: "black",
    fontWeight: "700",
    fontSize: 25,
  },
  location: {
    color: "grey",
    // padding: 10,
    fontWeight: "500",
    fontSize: 20,
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-evenly",
    width: 300,
  },
  numberStatus: {
    color: "grey",
    fontSize: 17,
    justifyContent: "space-between",
  },
  indicator: {
    color: "black",
    fontSize: 15,
    fontWeight: "700",
  },
  box: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
