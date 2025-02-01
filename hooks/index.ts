import { useWindowDimensions, Platform } from "react-native";

export const useMediaAndPlatform = () => {
	const { width, height, fontScale } = useWindowDimensions();
	const defaultDesignWidth = 430;
	const defaultDesignHeight = 932;

	const widthScaleFactor = Number(defaultDesignWidth / width).toFixed(2);
	const heightScaleFactor = Number(defaultDesignHeight / height).toFixed(2);

	const getResponsiveFontSize = (fontSize: number) => {
		const calculatedFontSize = fontSize * Number(widthScaleFactor) * fontScale;
		return `${Math.floor(calculatedFontSize)}px`;
	};
	return {
		width,
		height,
		platform: Platform.OS,
		getResponsiveFontSize,
		widthScaleFactor,
		heightScaleFactor,
	};
};
