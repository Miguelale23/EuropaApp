import { View, Text, Image, StyleSheet} from 'react-native'

export default function Post({ header, content, date, username, icon, borderColor, backgroundColor }){
    return (
        <View style={[styles.post, {backgroundColor: backgroundColor}, {borderColor: borderColor}]}>
            <View>
                <Image source={icon}></Image>
                <Text style={styles.headerText}>{header}</Text>
            </View>
            
            <Text style={styles.contentText}>{content}</Text>

            <Text style={styles.userFooterText}>Publicado: {date} por {username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    post:{
        width: '90%',
        height: '60%',
        padding: 10,
        borderWidth: 5,
        borderRadius: 14,
        marginVertical:20,
        flexDirection: 'column'
    },
    headerContainer:{
        flexDirection: 'row'
    },
    headerText:{
        fontSize:20,
        fontWeight:'condensedBold'
    },
    contentText:{
        paddingTop:5,
    },
    userFooterText:{
        fontSize:12,
        paddingTop:5
    }
})