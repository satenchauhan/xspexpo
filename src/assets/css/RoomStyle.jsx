import { StyleSheet} from 'react-native';

const RoomStyles = StyleSheet.create({
        scrollContainer: {
            backgroundColor: '#F5F5FF',
            borderRadius:10,
            borderColor:"rgba(128,128,128, 0.3)",
            borderWidth:2,
            position:'relative',
        },
        roomInpt:{
            fontSize:18,
            fontWeight:'bold',
            // color:'rgba(128,128,128, 0.3)',
            borderColor:'black', 
            borderRadius:5,
            width:'auto', 
            padding:5
        },
        editBtn:{
            marginTop:5,
            marginLeft:-5,
            borderColor:'black',
            color:'rgba(128,128,128, 0.5)'
        },
        estimatecard:{
            flex:1,
            alignItems: 'center',
            justifyContent:'center',
            alignItems:'center',
            padding:5,
            position: 'relative',
            bottom:10
        },
        defaultField:{
            flex:1,
            flexDirection:'row', 
            alignItems:'flex-start', 
            justifyContent:'space-between', 
            alignSelf:'center',
            marginBottom:3,
            marginLeft:20,
            zIndex: 1,
            elevation:-1
        },
        eyeBtn:{
            flex:1,
            flexDirection:'row', 
            alignItems:'flex-start', 
            justifyContent:'flex-start', 
            
        },
        eyeTxt:{
            fontSize:12,
            color:"#2196F3", 
            fontWeight:'bold',
            lineHeight:23,
        },
        inputSection:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor: '#fff',
            borderRadius:10,
            width: '90%',
            height: 'auto',
            padding: 5,
            paddingTop:10,
            paddingBottom:-2,
            paddingLeft: 15,
            shadowColor: "#1e272e",
            shadowOffset: {
            width: 2,
            height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation:5, 
            // position:'relative',
            marginBottom:35,
        },
        addRoom:{
            flexDirection:'row', 
            alignItems:'center',
            backgroundColor:'white',
            paddingLeft:3,
            // borderWidth:1,
            borderColor:'#1e272e',
            borderRadius:8,
            shadowColor: "#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowOpacity: 0.5,
            elevation:5,    
        },
        plus:{
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#2196F3',
            borderRadius:8, 
            shadowColor: "#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowOpacity: 0.5,
            elevation:5, 
            padding:8,
            margin:5
        },
        room:{
            backgroundColor:'white', 
            marginLeft:5,
            borderRadius:8, 
            shadowColor: "#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowOpacity: 0.5,
            elevation:5, 
        },
        plusIcon:{
            backgroundColor:'#2196F3', 
            height: 20 ,
            width: 20,
            borderRadius:100, 
            paddingLeft:2, 
            marginLeft:3, 
            color:'white'
        },
        inputs:{
            alignItems:'center',
            justifyContent:'space-between',
            width:60, 
            height: 35, 
            paddingTop:20,
            paddingBottom:-15,
            borderColor: '#000000',
            borderBottomWidth:2, 
            fontSize:14,    
        },
        inptTxt:{
            fontSize:14, 
            fontWeight:'bold',
        },
       
        bottomArea:{
            width: '100%',
            paddingLeft:5,
            paddingRight:5, 
            marginTop:10,
            marginBottom:20
        },
        bottomSection:{
            backgroundColor: 'white',
            borderRadius:10,
            width: '100%',
            height: 'auto', 
            shadowColor:"#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius:5,
            elevation:5,
            
        },
        
        txt:{
            fontSize:14,
            color:'#000000'
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",  
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        btnOpen: {
            backgroundColor:"#2196F3",
        },
        btnClose: {
            backgroundColor: "#2196F3",
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            // elevation: 5
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        },
        verticleLine: {
            height: 20,
            width: 1,
            backgroundColor: '#909090',
            // padding:0,
        },
        vrLine: {
            height: 15,
            width: 1,
            // paddingLeft:3,
            backgroundColor: 'black',
            // padding:0,
            marginTop:2,
        },
        result:{
            fontSize:14,
            fontWeight:'normal'
        },
        bottomRoomTotal:{
            fontSize:14,
            color:'#000000',
            fontWeight:'bold', 
            textAlign:'center', 
            textDecorationLine:'underline', 
            marginBottom:10
        },
        floatListArea:{
            backgroundColor:'rgba(238, 238, 238, 0.9)', 
            flex:1, 
            alignItems:'flex-end', 
            justifyContent:'flex-end', 
            marginTop:45, 
            marginRight:0
        },
        // Add Image
        imageSection:{
            alignSelf:'center',
            backgroundColor: '#F5F5FF',
            width:'100%', 
            marginLeft:2,
            // marginBottom:15,
            marginTop:10,
            // paddingBottom:15,
            marginBottom:-20
        },
        addImg:{
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'space-between',
            // marginLeft:5
        },
        imgPlus:{
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'white', 
            borderRadius:8, 
            shadowColor: "#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowOpacity: 0.5,
            elevation:5, 
            padding:6,
        },
        imgPlusIcon:{
            borderRadius:100, 
            paddingLeft:2, 
            marginLeft:3, 
            color:'black',
            opacity: 0.7
        },
        ImgverticleLine: {
            height: 35,
            width: 1,
            backgroundColor: '#909090',
            marginLeft:5,
        },
        line:{
            borderBottomWidth:1,
            color:'#b2bec3',
            width:'100%',
            marginBottom:10, 
            opacity:0.1 
        },
        hrLine:{
            borderBottomWidth:1, 
            color:'black',
            opacity:1
        },
        notePlus:{
            maxWidth:106,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'white', 
            borderRadius:8, 
            shadowColor: "#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowOpacity: 0.5,
            elevation:5, 
            padding:6,
            
        },
        noteBtn:{
            width:70,
            backgroundColor:'white', 
            borderRadius:8, 
            textAlign:'center',
            padding:10,
            borderTopLeftRadius:0,
            borderBottomLeftRadius:0,   
        },
        SaveBtn:{
            width:70,
            backgroundColor:'white', 
            borderRadius:8, 
            textAlign:'center',
            padding:10,
            borderTopRightRadius:0,
            borderBottomRightRadius:0,   
        },
      
})

export {RoomStyles};