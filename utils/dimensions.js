import { Dimensions } from 'react-native';

const screenDimensions = Dimensions.get('screen');
const windowDimensions = Dimensions.get('window');

const [SCREEN_WIDTH, SCREEN_HEIGHT] = [
 screenDimensions.width,
 screenDimensions.height,
];
const [WINDOW_WIDTH, WINDOW_HEIGHT] = [
 windowDimensions.width,
 windowDimensions.height,
];

export { SCREEN_WIDTH, SCREEN_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT };
