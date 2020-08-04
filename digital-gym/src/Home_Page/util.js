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


 export {Quote, VideoList}