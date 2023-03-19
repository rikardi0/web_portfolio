
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Hero_Phones: tryRequire('./Hero_Smartphones.png') || require('./questionMark.png'),
	Hero_Phones_Pink: tryRequire('./Smartphone_Hero_Pink.png') || require('./questionMark.png'),
	Gmail: tryRequire('./Gmail_Logo.png') || require('./questionMark.png'),
	GitHub: tryRequire('./Github_Logo.png') || require('./questionMark.png'),
	LinkedIn: tryRequire('./Linkedin_Logo.png') || require('./questionMark.png'),
}