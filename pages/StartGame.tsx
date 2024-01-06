import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Avatar from "../components/Avatar";
import { StatusBar } from "expo-status-bar";
import { FaEdit } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

interface DataAvatar {
  id: string;
  name: string;
  imageUrl: string;
}

const StartGame = () => {
  const data: DataAvatar[] = [
    { id: "1", name: "John", imageUrl: "../assets/avatar1.png" },
  ];

  const renderAvatar = ({ item }: { item: DataAvatar }) => (
    <Avatar imageUrl={item.imageUrl} name={item.name} />
  );

  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require("../assets/bg2.png")} />
      <Image style={styles.logo1} source={require("../assets/logo1.png")} />

      <StatusBar style="auto" />

//set diamond
      <View style={styles.diamondContainer}>
        <TouchableOpacity style={styles.diamondButton}>
          <Text style={styles.diamondText}>20</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.vectordiamond}
            source={require("../assets/adddiamondpng.png")}
          />
        </TouchableOpacity>

        <Image
          style={styles.diamond}
          source={require("../assets/diamond.png")}
        />
      </View>

      <View>
        <Image
          style={styles.avatar}
          source={require("../assets/avatar1.png")}
        />
        <FaEdit style={styles.edit} />
        <Text style={styles.textup}>Select Your Avatar</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Play Game</Text>
      </TouchableOpacity>

      <Image style={styles.artist} source={require("../assets/artist.png")} />
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo1: {
    width: 230,
    height: 230,
    position: "relative",
    marginTop: -280,
    marginRight: 200,
  },

  //set diamond start
  diamondContainer: {
    position: "absolute",
    top: 20,
    marginLeft: 280,
  },
  vectordiamond: {
    width: 30,
    height: 30,
    top: -21,
    marginLeft: 65,
  },
  diamond: {
    width: 25,
    height: 25,
    top: -53,
    marginLeft: -5,
  },
  diamondButton: {
    backgroundColor: "#000000",
    padding: 10,
    width: 80,
    height: 15,
    borderRadius: 17,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  diamondText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },

  //set diamond end
  textup: {
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
  button: {
    backgroundColor: "#5ce1e6",
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 17,
    marginTop: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#F2F2F2",
    position: "relative",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    marginLeft: 10,
    alignContent: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 2,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 40,
    marginBottom: 5,
  },
  edit: {
    position: "absolute",
    top: 60,
    right: -5,
    width: 30,
    height: 30,
    color: "white",
  },
  artist: {
    position: "absolute",
    width: 430,
    height: 190,
    marginTop: "132%",
  },
});
