function getThemeStyles(color) {
    switch (color) {
        case 'light':
            return {backgroundColor: '#f8f9fa'};
        case 'earth':
            return {backgroundColor: '#959970', color: 'white'};
        case 'dark':
            return {backgroundColor: '#42424c', color: 'white'};
        default:
            return {backgroundColor: '#f8f9fa'};
    }
}

export default getThemeStyles;