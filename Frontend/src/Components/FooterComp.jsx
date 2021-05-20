import React from 'react'
import SimpleReactFooter from "simple-react-footer";

export default function FooterComp() {
  const description = `A library is a collection of books, magazines and articles.Its a place where we can either read,
  borrow/rent books. New books/magazines/articles are added weekly and some are added
  monthly and depending on the situation. A Library Management System is a software built to
  handle the primary housekeeping functions of a library.`;
  const title = "Library Management System";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
 ];
 return <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="feed/"
    facebook="/"
    twitter="/"
    instagram="/"
    youtube="#"
    pinterest="#"
    copyright="Library Management System"
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"
 />
}