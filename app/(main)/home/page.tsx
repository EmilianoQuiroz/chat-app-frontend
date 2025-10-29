import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { useAuth } from "@/contexts/authContext";
import Button from "@/components/Button/Button";
import Typo from "@/components/Typo/Typo";

const Home = () => {
  const { user, signOut } = useAuth();
  //   console.log("User in Home:", user);
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button onPress={handleLogout}>
        <Typo>Logout</Typo>
      </Button>
    </View>
  );
};

export default Home;
