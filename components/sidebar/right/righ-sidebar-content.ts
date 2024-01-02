import axios from "axios";

export const getPopularTags = async () => {
    try {
        const response = await axios.get('api/articles/top-articles');
        const data = response.data;

        if (data && Array.isArray(data) && data.length > 0 && 'tag' in data[0] && 'count' in data[0]) {
            return data;
        } else {
            console.error('Invalid data structure in API response:', data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching popular tags:', error);
        throw error;
    }
};
