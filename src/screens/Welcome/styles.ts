import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 32,
    fontFamily: fonts.heading,
    lineHeight: 38,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 16,
    alignItems: "center",
    paddingHorizontal: 30,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  image: {
    height: Dimensions.get("window").width * 0.7
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 20,
    height: 56,
    width: 56,
  },

  icon: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  }
});