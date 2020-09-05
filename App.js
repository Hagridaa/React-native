import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
  } ;

  const addGoalHandler = () => {
      console.log(enteredGoal);
      setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  }


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="ADD"onPress={addGoalHandler}/>
        </View>
        <View>
          {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
        </View>
      <View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 100
    },

    inputContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },

    input: {
        width: 150, borderBottomColor: 'black', borderWidth:1, padding: 10
    }
});

