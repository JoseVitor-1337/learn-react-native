import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171d31",
  },
  content: {
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: "center",
    color: "#FFF",
  },
  button: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#0094ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    right: 20,
    bottom: 20,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modal: {
    flex: 1,
    backgroundColor: "#171d31",
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 20,
    color: "#FFF",
  },
  modalBody: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 10,
    height: 100,
    textAlignVertical: "top",
    color: "#000",
    borderRadius: 5,
  },
  handleTask: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
  },

  handleTaskText: {
    fontSize: 20,
  },
});

export default styles;
