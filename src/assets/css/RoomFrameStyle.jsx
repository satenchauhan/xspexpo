import { StyleSheet} from 'react-native';

const RFrameStyle = StyleSheet.create({
    safeView:{
        flex:1,
        backgroundColor: '#fff', 
        padding:4,
    },
    stickySection:{
        backgroundColor:'white',
        borderColor:'white',      
    },
    totalSection:{
        marginLeft:7,  
        marginRight:7,  
    },
    totalPriceBtn:{
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'flex-start', 
        marginBottom:2
    },
    vrLine: {
        height: 12,
        width: 1,
        backgroundColor: 'black',
        marginTop:3,
    },
    totalArea:{
        backgroundColor: '#fff',    
    },
    btmAreaFlex:{
        // flex:1,
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'space-between',
        backgroundColor: '#fff',
        width: '100%',
        height: 'auto', 
        paddingTop:5,
        // borderColor:"rgba(128,128,128, 0.3)",
        // borderWidth:1,
        paddingLeft:1, 
        paddingRight:1,
        paddingBottom:-5, 
        borderRadius:10,
        // elevation:3,
        // position:'absolute',
        // zIndex: 3,
        // elevation: -3
    },
    titleText:{
        fontSize:14,
        color:'gray',
        fontWeight:'bold'
    },
    totalText:{
        fontSize:14,
        color:'black',
        fontWeight:'bold'
    },
    verticleLine: {
        height: 18,
        width: 1,
        backgroundColor: '#909090',
    },
    addRoomBtn:{
        alignSelf:'center',
        backgroundColor: 'white',
        width:'100%',
        height: 'auto', 
        marginLeft:2,
        marginBottom:3,
        marginTop:0,
    },
    addItem:{
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        alignSelf:'center',
        marginTop:1,
        backgroundColor:'white',
        borderTopWidth:0,
        borderTopColor:'white',
        borderColor:'white'
    },
    RoomBtn:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#2196F3',
        borderRadius:10, 
        borderColor:"rgba(128,128,128, 0.3)",
        borderWidth:1,
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowOpacity: 1,
        elevation:5, 
        padding:6,
        marginLeft:5,
        marginRight:8,
    },
    plusIcon:{
        backgroundColor:'#2196F3', 
        height: 20 ,
        width: 20,
        borderRadius:100, 
        paddingLeft:2, 
        marginLeft:10, 
        color:'white'
    },
    btnInactive:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'white',
        borderRadius:10, 
        borderColor:"rgba(128,128,128, 0.3)",
        borderWidth:1,
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        elevation:5, 
        padding:6,
        paddingLeft:12,
        paddingRight:12,
        marginLeft:8,
        marginRight:8,
    },
    btnActive:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor:'#2196F3', 
        borderRadius:10, 
        borderColor:"#2196F3",
        borderWidth:1,
        shadowColor: "#2196F3",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        elevation:5, 
        padding:6,
        paddingLeft:12,
        paddingRight:12,
        marginLeft:8,
        marginRight:8,
    },
    ActiveColor:{
        color:'white',
    },
    InactiveColor:{
         color:'black'
    }
})

export {RFrameStyle};