import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";

export default function App() {
	// const [name, setName] = useState("Kushaan Gowda");
	// const [age, setAge] = useState(19);

	const [people, setPeople] = useState([
		{ name: "Kush", id: "1" },
		{ name: "yoshi", id: "2" },
		{ name: "mario", id: "3" },
		{ name: "luigi", id: "4" },
		{ name: "peach", id: "5" },
		{ name: "toad", id: "6" },
		{ name: "bowser", id: "7" },
	]);

	const handlePress = (id) => {
		console.log("Deleting ", id);
		setPeople(
			people.filter((person) => {
				return person.id != id;
			})
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={people}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => handlePress(item.id)}>
						<Text style={styles.items}>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>

			{/*
        <ScrollView>
          {people.map((person) => {
            return (
              <Text key={person.id} style={styles.item}>
                I am {person.name}
              </Text>
            );
          })}
        </ScrollView>
      */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 40,
		paddingHorizontal: 20,
	},
	items: {
		padding: 20,
		marginTop: 24,
		backgroundColor: "pink",
		fontSize: 24,
		marginHorizontal: 10,
	},
});
