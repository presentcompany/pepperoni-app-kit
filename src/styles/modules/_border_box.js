import { StyleSheet } from 'react-native';

const borderBox = StyleSheet.create({
	mainBorder: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: '#FFF',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default borderBox;