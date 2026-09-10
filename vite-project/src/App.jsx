import React from 'react'
import Card from './components/Card'
import { Bookmark } from 'lucide-react'
import User from './components/user'
const App = () => {
  const jobs = [
  {
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "7 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$58/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: "$30/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "2 days ago",
    post: "Node.js Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "8 days ago",
    post: "MERN Stack Developer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: "$38/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/salesforce.com",
    company: "Salesforce",
    datePosted: "10 days ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$52/hour",
    location: "Mumbai, India"
  }
];
  return (
    <>
    {jobs.map(function(item,idx){
      return <div key={idx}>
        <Card  logo={item.logo} company={item.company} datePosted={item.datePosted} post={item.post} tag1={item.tag1} tag2={item.tag2} pay={item.pay} location={item.location} />
      </div>
    })}

    
    </> 
  
  )
}

export default App
