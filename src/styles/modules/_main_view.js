import { StyleSheet } from 'react-native';
import colours from '../base/_colours.js';

const mainViewStyles = StyleSheet.create({
	mainBackground: {
		backgroundColor: colours.cBlue,
		flex: 1,
	},

	mainButton: {
		width: 91,
		height: 94,
	},

	mainBorder: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: colours.cWhite,
		borderRadius: 15,
	},

	imageContainer: {
		flex: 1,
		height: 170,
		justifyContent: 'center',
		alignItems: 'center',
	},

	mainText: {
		marginTop: 20,
		marginBottom: 20,
		color: colours.cWhite,
		fontSize: 21,
	},

	imageContainerFirst: {
		marginTop: 50,
	},
});

export default mainViewStyles;