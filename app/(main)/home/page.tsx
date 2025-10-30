import Button from "@/components/Button/Button";
import Typo from "@/components/Typo/Typo";
import { useAuth } from "@/contexts/authContext";
import { testSocket } from "@/socket/socketEvents";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Home = () => {
  const { user, signOut } = useAuth();
  //   console.log("User in Home:", user);

  // useEffect(() => {
  //   testSocket(testSocketCallbackHandler);
  //   testSocket(null); // to remove the listener on unmount
  //   return () => {
  //     testSocket(testSocketCallbackHandler, true);
  //   };
  // }, []);

  // const testSocketCallbackHandler = (data: any) => {
  //   console.log("Got response from testSocket event:", data);
  // };

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
