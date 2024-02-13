const getPredictionByID = async (id) => {
    try {
        // Load the JSON data directly as an object
        const predictions = [
            { "id": 1, "name": "Investments done previously are likely to get good returns." },
            { "id": 2, "name": "A special surprise is awaiting you on Eid." },
            { "id": 3, "name": "Expect an exciting time in a family function or a get-together." },
            { "id": 4, "name": "Health wise you feel on the top of the world." },
            { "id": 5, "name": "This is your lucky day, as something desired may be fulfilled immediately!" },
            { "id": 6, "name": "You can be nominated for a prestigious project or assignment." },
            { "id": 7, "name": "You will be able to achieve much more than expected on the academic front." },
            { "id": 8, "name": "Someone can ease your commuting problems by offering a ride." },
            { "id": 9, "name": "You can fall for a person of your dreams, but remember love is a two-way process." },
            { "id": 10, "name": "Your skills are likely to bring you to the notice of people who matter." },
            { "id": 11, "name": "You will maintain good health by eating right and remaining active." },
            { "id": 12, "name": "You will win GPStar benefits all Year Long." },
            { "id": 13, "name": "Even if your day starts rough, remember that there's always a silver lining waiting to be found." },
            { "id": 14, "name": "Try to stay optimistic and focus on the good things." },
            { "id": 15, "name": "Your Valentine's day is about to get more exciting." },
            { "id": 16, "name": "Forget social media and enjoy the peace of quality one-on-one time." },
            { "id": 17, "name": "Your lucky number this week is 404. Unfortunately, it seems to be missing." },
            { "id": 18, "name": "Your horoscope advises you to wear pants today. Trust us, it's for the best." },
            { "id": 19, "name": "A sudden craving for Kacchi will lead you to the best meal of your life. Follow your heart, and your stomach." },
            { "id": 20, "name": "You will get a sudden urge to eat some Nehari today and will get special discount." },
            { "id": 21, "name": "Your future holds an abundance of cheese. Embrace it. Be the cheese you wish to see in the world." },
            { "id": 22, "name": "Beware of a sneaky squirrel stealing your snacks. It's not personal; they're just nuts about nuts." },
            { "id": 23, "name": "Your future holds a spontaneous road trip with friends. Just make sure someone remembers to bring the snacks." },
            { "id": 24, "name": "Your horoscope advises you to embrace your inner child today." }
        ];
        
        const prediction = predictions.find(prediction => prediction.id === id);
        return prediction ? prediction.name : null; // Return the name property if prediction exists, otherwise return null
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        return null; // Return null if there's an error
    }
};

export { getPredictionByID };
