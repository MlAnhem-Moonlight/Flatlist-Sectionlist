import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, SectionList } from 'react-native';
import BoxText from './components/CustomText';
import CustomText from './components/CustomBox';

export default function App() {

  const Data =
  [
    {id:'1',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'2',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'3',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'4',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'5',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'6',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'7',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'8',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'9',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'10',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'11',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'12',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
  ]

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (

    <SafeAreaView style={styles.container} edges={['top']}> 
        <FlatList style={styles.list1}
          data={Data}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=> (<BoxText text1={item.name} text2={item.discription} text3={item.date} text4={item.time}/>)}
        />  
        <SectionList style={styles.list2}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item})=> (
            <CustomText text1={item}/>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />              
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  list1:
  {
    top:20,
    paddingBottom:10,
  },
  list2:
  {
    width:"100%",
  },
  item: {
    backgroundColor: 'rgba(196, 74, 74, 1)',
    width:"100%",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
