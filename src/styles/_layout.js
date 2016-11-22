import { StyleSheet } from 'react-native';

export default layout = StyleSheet.create({
	container: {
		flex: 1,
 	},
 	header: {
		height: 57,
 	},
 	headerLogo: {
		width: 111,
		height: 27,
 	},
	headerHomeButton: {
		position: 'absolute',
		top: 14,
		right: 32,
		width: 26,
		height: 29,
 	},
 	flexContainer: {
 		flexDirection: 'row',
 		alignItems: 'center',
 		justifyContent: 'center',
 		flex: 1,
 	}
});