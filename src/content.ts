import { Images } from './assets'

export const MAIN_ARTICLE = {
  row: true,
  image: Images.MainArticleImage,
  h1: 'Weekly Newsletter: Tweets for Higher Engagements',
  p: "In this weekly newsletter, we will be covering ten types of engaging tweets. This is the guide if you're just starting out on Twitter. ",
  authorImage: Images.UserAvatar,
  firstName: 'Jessica',
  lastName: 'Andrews',
  role: 'Content Manager'
}

export const ARTICLES = [
  {
    row: false,
    image: Images.Article1Image,
    h1: "7 Tips for Organic Traffic",
    p: 'From SEP to integrating with Paid Advertising, this article covers it all.',
    authorImage: Images.UserAvatar1,
    firstName: 'Spencer',
    lastName: 'David',
    role: 'SEO Specialist',
  },
  {
    row: false,
    image: Images.Article2Image,
    h1: 'how To Start Your Own Business',
    p: 'Starting your own business in 2021 has never been easier than it has been.',
    authorImage: Images.UserAvatar2,
    firstName: 'Sara',
    lastName: 'Frey',
    role: 'Business Leader',
  }, 
  {
    row: false,
    image: Images.Article3Image,
    h1: '5 Tips for Better Branding',
    p: 'From SeO To integrating with paid advertising, this article covers it all.',
    authorImage: Images.UserAvatar3,
    firstName: 'David',
    lastName: 'Suns',
    role: 'Brand Manager'
  }
]