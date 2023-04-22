let tweetsData = [
    {
        handle: `@FitnessGuru 💪`,
        profilePic: `images/fitness.jpg`,
        likes: 100,
        retweets: 50,
        tweetText: `Don't wait for motivation to hit you. Create it yourself by taking action and seeing results! 🏋️‍♀️💥`,
        replies: [
            {
                handle: `@GymRat1`,
                profilePic: `images/gymrat.jpg`,
                tweetText: `Thanks for the motivation! Just finished a killer workout 💪💦`,
            },
            {
                handle: `@HealthyEater`,
                profilePic: `images/healthyeater.jpg`,
                tweetText: `I needed this reminder! Time to prep some healthy meals for the week 🍎🥦`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '9j453skf-c0f5-1234-9c4b-4567jklm89',
    },

    {
        handle: `@Fashionista 💄`,
        profilePic: `images/fashionista.jpg`,
        likes: 5000,
        retweets: 1000,
        tweetText: `Spring fashion trend alert: floral prints are in! 🌸🌺 Who else is excited to rock some flowy dresses this season?`,
        replies: [
            {
                handle: `@StyleIcon1`,
                profilePic: `images/styleicon1.jpg`,
                tweetText: `Love this trend! Can't wait to add some more florals to my wardrobe 🌷🌻`,
            },
            {
                handle: `@FashionPolice`,
                profilePic: `images/fashionpolice.jpg`,
                tweetText: `Sorry, but florals are so played out. Stick with classic neutrals instead. 🙅‍♀️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '3m657hjk-c0f5-5678-9c4b-1234fghj12',
    },

    {
        handle: `@Foodie 🍔`,
        profilePic: `images/foodie.jpg`,
        likes: 200,
        retweets: 20,
        tweetText: `Just tried the new burger joint in town and it did not disappoint! 🤤🍔 Who wants to join me for a burger and fries this weekend?`,
        replies: [
            {
                handle: `@HealthyEater`,
                profilePic: `images/healthyeater.jpg`,
                tweetText: `I'm down for a burger, but can we get some sweet potato fries instead? 🍠`,
            },
            {
                handle: `@VeganVibes`,
                profilePic: `images/veganvibes.jpg`,
                tweetText: `No thanks, I'll stick to my plant-based diet. How about a vegan burger joint instead? 🌿🍔`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '2k938fgh-c0f5-9012-9c4b-3456tghj78',
    },
    {
        handle: `@TrollBot66756542 💎`,
        profilePic: `images/troll.jpg`,
        likes: 27,
        retweets: 10,
        tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
    },
    {
        handle: `@Elon ✅`,
        profilePic: `images/musk.png`,
        likes: 6500,
        retweets: 234,
        tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
        replies: [
            {
                handle: `@TomCruise ✅`,
                profilePic: `images/tcruise.png`,
                tweetText: `Yes! Sign me up! 😎🛩`,
            },
            {
                handle: `@ChuckNorris ✅`,
                profilePic: `images/chucknorris.jpeg`,
                tweetText: `I went last year😴`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
    },
    {
        handle: `@NoobCoder12`,
        profilePic: `images/flower.png`,
        likes: 10,
        retweets: 3,
        tweetText: `Are you a coder if you only know HTML?`,
        replies: [
            {
                handle: `@StackOverflower ☣️`,
                profilePic: `images/overflow.png`,
                tweetText: `No. Obviosuly not. Go get a job in McDonald's.`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: `images/love.png`,
                tweetText: `You are wonderful just as you are! ❤️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45',
    },
]

import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

function saveTweetsData() {
  localStorage.setItem('tweetsData', JSON.stringify(tweetsData));
}
function loadTweetsData() {
  const tweetsDataString = localStorage.getItem('tweetsData');
  if (tweetsDataString) {
    tweetsData = JSON.parse(tweetsDataString);
  }
}

document.addEventListener('click', function (e) {
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    }
    else if (e.target.dataset.retweet) {
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if (e.target.dataset.reply) {
        handleReplyClick(e.target.dataset.reply)
    }
    else if (e.target.id === 'tweet-btn') {
        handleTweetBtnClick()
    }
    else if (e.target.dataset.erase) {
        handleEraseClick(e.target.dataset.erase)
    }
    else if (e.target.dataset.bookmark) {
        handleBookmarkClick(e.target.dataset.bookmark)
    }
})

function handleLikeClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked) {
        targetTweetObj.likes--
    }
    else {
        targetTweetObj.likes++
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    saveTweetsData()
    render()
}

function handleRetweetClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isRetweeted) {
        targetTweetObj.retweets--
    }
    else {
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    saveTweetsData()
    render()
}

function handleBookmarkClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId
    })[0]

    targetTweetObj.isBookmarked = !targetTweetObj.isBookmarked
    saveTweetsData()
    render()
}

function handleReplySubmit(tweetId, replyText) {
    const targetTweetObj = tweetsData.find(function (tweet) {
        return tweet.uuid === tweetId
    })

    if (targetTweetObj) {
        targetTweetObj.replies.unshift({
            handle: '@Diegonava150',
            profilePic: 'images/twinavalogo.jpg',
            tweetText: replyText,
            uuid: uuidv4()
        })
        saveTweetsData()
        render()
    }
}

function handleReplyClick(tweetId) {
    const repliesContainer = document.getElementById(`replies-${tweetId}`)
    repliesContainer.classList.toggle('hidden')

    const replyForm = repliesContainer.querySelector('.reply-form')

    replyForm.addEventListener('submit', function (e) {
        e.preventDefault()

        const replyInput = replyForm.querySelector('.reply-input')
        if (replyInput.value) {
            handleReplySubmit(tweetId, replyInput.value)
            replyInput.value = ''
        }
    })
}

function handleEraseClick(tweetId) {
    const tweetIndex = tweetsData.findIndex(function (tweet) {
        return tweet.uuid === tweetId
    })

    if (tweetIndex !== -1) {
        const tweet = tweetsData[tweetIndex];

        if (tweet.replies.length > 0) {
            const deleteReplies = confirm("Do you want to delete only the replies, or the tweet along with the replies? Press OK to delete the tweet along with the replies, or Cancel to delete only the replies.");
            if (deleteReplies) {
                tweetsData.splice(tweetIndex, 1);
            } else {
                tweet.replies = [];
            }
        } else {
            tweetsData.splice(tweetIndex, 1);
        }
        saveTweetsData();
        render();
    }
}

function handleTweetBtnClick() {
    const tweetInput = document.getElementById('tweet-input')

    if (tweetInput.value) {
        tweetsData.unshift({
            handle: `@Diegonava150`,
            profilePic: `images/twinavalogo.jpg`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        saveTweetsData()
        render()
        tweetInput.value = ''
    }

}

function getFeedHtml() {
    let feedHtml = ``

    tweetsData.forEach(function (tweet) {

        let likeIconClass = ''

        if (tweet.isLiked) {
            likeIconClass = 'liked'
            saveTweetsData()
        }

        let retweetIconClass = ''

        if (tweet.isRetweeted) {
            retweetIconClass = 'retweeted'
            saveTweetsData()
        }

        let repliesHtml = ''
        
        const bookmarkIconClass = tweet.isBookmarked ? 'bookmarked' : '';

        if (tweet.replies.length > 0) {
            tweet.replies.forEach(function (reply) {
                repliesHtml += `
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`
            })
        }

        const replyFormHtml = `
<div class="reply-form-container">
    <form class="reply-form">
        <input type="text" class="reply-input" placeholder="Tweet your reply">
        <button type="submit" class="reply-submit-btn">Reply</button>
    </form>
</div>
`

        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
                <span class="tweet-detail">
                    <i class="fa-regular fa-trash-can" data-erase="${tweet.uuid}"></i>
                </span>
                <span class="tweet-detail">
                    <i class="fa-regular fa-bookmark ${bookmarkIconClass}"
                    data-bookmark="${tweet.uuid}"
                    ></i>
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
    ${replyFormHtml}
        ${repliesHtml}
    </div>   
</div>
`
    })
    return feedHtml
}

function render() {
    loadTweetsData()
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()

// check if there is data in local storage
if (localStorage.getItem("tweetsData")) {
  // show the reset button
  document.getElementById("reset-btn").style.display = "flex";
}

// add event listener to reset button
document.getElementById("reset-btn").addEventListener("click", function() {
  // remove data from local storage
  localStorage.removeItem("tweetsData");
  // hide reset button
  document.getElementById("reset-btn").style.display = "none";
});