import React,{Component,useState} from 'react';
import 
{ View,
  Text, 
  Image, 
  ScrollView,
  FlatList, 
  TextInput,
  Button,
  StyleSheet 
} from 'react-native';
import Cat from './Components/Cat'
import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'

function App(){
 
  const [courseGoal,setCourseGoal]=useState([]);
  const [isAddMode,setIsAddMode] = useState(false);


  const addGoalHandler = (goalTitle) => {
    if(goalTitle.length === 0){
      return;
    }

     setCourseGoal( currentGoal => [...courseGoal,{id:Math.random().toString(),value:goalTitle}]); 
     setIsAddMode(false);
  }

  const removeGoalHandler=goalId=>{ 



    setCourseGoal(currentGoal=>{
      return currentGoal.filter((goal)=>goal.id !== goalId);
    })

  }

  const cancelGoalHandler=()=>{
    setIsAddMode(false);
  }

        return(
               <View style={styles.screen}>

                 <Text style={{textAlign:'center',backgroundColor:'aliceblue',borderWidth:1,fontSize:50,color:'blue',fontFamily:'TimesNewRoman',textShadowRadius:20,textShadowColor:'green',marginBottom:'20%'}}>TODO APP</Text>


                 <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>

                 <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler}/>
                  <FlatList style={styles.flatlist}
                  keyExtractor={(item,index)=>item.id}
                   data={courseGoal} 
                   renderItem={itemData=> (
                    <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>
                  )}/>
              
               </View>
        )
 }

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
  flatlist:{
    marginVertical:50
  }


});

export default App;