 const DigitalGymQuote = () => {
    const DigitalGymQuote = [
        'A studio that offers you more.',
        'Always something happening.',
        'Anything you can conceive, you can achieve.',
        'Be an Inspiration.',
        'Be part of the Elite.',
        'Bespoke fitness for all ages.',
        'Bodies of stamina & strength.',
        'Building confidence. Building fitness.',
        'Celebrating health.',
        'Changing bodies, changing lives.',
        'Close to Home. Close to Work.',
        'Commit to be Fit.',
        'Convenient. Affordable.',
        'Crunch. No judgments.',
        'Decide, Commit, Succeed.',
        'Don’t be a brat, burn that fat.',
        'Everyone in life needs balance.',
        'Find a way or make one.'
    ]
    return  DigitalGymQuote[Math.floor(Math.random() * DigitalGymQuote.length)]
}

const VideoList = {
    'gymSharkVideo': 'https://www.youtube.com/embed/xZs6nCUQuuM?autoplay=1&mute=1'
    }

const ReviewList = [
    {
        name: 'Boxy',
        review: 'Had a great workout this afternoon. Equipment is spaced apart and clean. Wipes,paper and antibacterials\n' +
        'spray are located at each area for use. There is a wide selection of machines and staff were very helpful.',
        city: 'Manchester',
        stars: 5
    },
    {
        name: 'Kelly',
        review: 'Joined Doncaster gym recently, the staff are friendly, there is loads of equipment and there are so many classes. Good price aswell :)',
        city: 'Doncaster',
        stars: 5
    },
    {
        name: 'Joseph',
        review: 'Great gym and great instructors. Big place plenty of equipment.',
        city: 'London',
        stars: 5
    }
]

 const DailyQuotesInformation = [
     {
         author: 'Arnold Schwarzenegger, seven-time Mr. Olympia',
         quote: 'The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.'
     },
     {
         author: 'Henry David Thoreau, poet and philosopher',
         quote: 'Success usually comes to those who are too busy to be looking for it.'
     },
     {
         author: 'Michael John Bobak, digital artist',
         quote: 'All progress takes place outside the comfort zone.'
     },
     {
         author: 'Bret Contreras, sports scientist',
         quote: 'If you think lifting is dangerous, try being weak. Being weak is dangerous.'
     },
     {
         author: 'Vidal Sassoon, hairstylist and businessman',
         quote: 'The only place where success comes before work is in the dictionary.'
     },
     {
         author: 'Greg Plitt, fitness model',
         quote: 'The clock is ticking. Are you becoming the person you want to be?'
     },
     {
         author: 'Henry Ford, industrialist',
         quote: 'Whether you think you can, or you think you can’t, you’re right.'
     },
     {
         author: 'Bruce Lee, actor and martial artist',
         quote: 'The successful warrior is the average man, with laser-like focus.'
     },
     {
         author: 'Michael Jordan, basketball player',
         quote: 'You must expect great things of yourself before you can do them.'
     },
     {
         author: 'Pablo Picasso, visual artist',
         quote: 'Action is the foundational key to all success.'
     },
 ]


 export {DigitalGymQuote, VideoList, ReviewList, DailyQuotesInformation}