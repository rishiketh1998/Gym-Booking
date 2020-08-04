 const Quote = () => {
    const gymQuotes = [
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
    return  gymQuotes[Math.floor(Math.random() * gymQuotes.length)]
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


 export {Quote, VideoList, ReviewList}